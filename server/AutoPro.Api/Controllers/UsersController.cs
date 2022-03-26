namespace AutoPro.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    using AutoPro.Common;
    using AutoPro.Services.Contracts;
    using AutoPro.Common.Models.User;

    public class UsersController : ApiController
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult> Register(RegisterRequest model)
        {
            await _userService.RegisterAsync(model);

            return Ok(new { message = "Successful registered." });
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<LoginResponse>> Login(LoginRequest model)
        {
            var response = await _userService.AuthenticateAsync(model);

            return Ok(response);
        }
    }
}
