namespace AutoPro.Services
{
    using System.Text;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Threading.Tasks;

    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;

    using AutoPro.Common;
    using AutoPro.Data.Models;
    using AutoPro.Services.Contracts;
    using AutoPro.Common.Models.User;
    using Microsoft.AspNetCore.Identity;

    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private readonly UserManager<ApplicationUser> _userManager;

        public UserService(IOptions<AppSettings> appSettings, UserManager<ApplicationUser> userManager)
        {
            _appSettings = appSettings.Value;
            _userManager = userManager;
        }

        public async Task RegisterAsync(RegisterRequest model)
        {
            var user = new ApplicationUser
            {
                Email = model.Email,
                UserName = model.Email,
                ModifiedOn = DateTime.Now,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                throw new ApplicationException("Register user failed.");
            }
        }

        public async Task<LoginResponse> AuthenticateAsync(LoginRequest model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null) 
            {
                throw new InvalidOperationException("Bad request. No user found");
            }

            var isPasswordValid = await _userManager.CheckPasswordAsync(user, model.Password);
            if (!isPasswordValid)
            {
                throw new InvalidOperationException("No authorized.");
            }

            var token = GenerateJwtToken(user);

            var response = new LoginResponse
            { 
                Id = user.Id,
                Email = user.Email,
                Token = token,
            };

            return response;
        }

        private string GenerateJwtToken(ApplicationUser user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] 
                { 
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Name, user.UserName)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key), 
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            var encryptedToken = tokenHandler.WriteToken(token);

            return encryptedToken;
        }
    }
}
