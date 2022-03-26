namespace AutoPro.Services.Contracts
{
    using AutoPro.Common;
    using AutoPro.Common.Models.User;

    public interface IUserService
    {
        Task RegisterAsync(RegisterRequest model);

        Task<LoginResponse> AuthenticateAsync(LoginRequest model);

        ProfileResponse GetProfile(string userId);
  }
}
