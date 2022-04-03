namespace AutoPro.Api.Controllers
{
  using Microsoft.AspNetCore.Mvc;

  using AutoPro.Common;
  using AutoPro.Services.Contracts;
  using AutoPro.Common.Models.User;
  using AutoPro.Api.Infrastructure.Extensions;

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

    [HttpPost]
    [Route("Profile")]
    public ActionResult<ProfileResponse> Profile()
    {
      var userId = User.GetId();
      var response = _userService.GetProfile(userId);

      return Ok(response);
    }

    [HttpPost]
    [Route("Subscribe")]
    public ActionResult<ProfileResponse> NewsletterSubscribe(SubscribeRequest email)
    {
      return Ok(new { message = "Successfully subscribed." });
    }
  }
}
