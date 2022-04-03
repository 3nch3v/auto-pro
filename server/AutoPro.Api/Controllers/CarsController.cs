namespace AutoPro.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;

    using AutoPro.Api.Controllers;
    using AutoPro.Api.Infrastructure.Extensions;
    using AutoPro.Services.Contracts;
    using AutoPro.Common.Models.Ad;

    public class CarsController : ApiController
    {
        private readonly IAdService _adService;

        public CarsController(IAdService adService)
        {
            _adService = adService;
        }

        [Authorize]
        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult> Create(CreateAdRequest request)
        {
            var userId = User.GetId();
            await _adService.CreateAdAsync(request, userId);

            return Ok(new { message = "An ad was successful created." });
        }

        [HttpGet]
        [Route("Random")]
        public ActionResult<IList<AdListingModel>> GetRandom()
        {
          var ads = _adService.GetRandom();

          return Ok(ads);
        }

        [HttpGet]
        [Route("All/{page:int}")]
        public ActionResult<AllAdsResponse> GetAll(int page = 1)
        {
            var ads = _adService.GetAllAsync(page);

            return Ok(ads);
        } 

        [HttpGet]
        [Route("Details/{id:int}")]
        public ActionResult<AdResponse> GetSigle(int id)
        {
            var ad = _adService.GetSigleAsync(id);

            return Ok(ad);
        }

        [Authorize]
        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = User.GetId();
            await _adService.DeleteAsync(id, userId);

            return Ok(new { message = "An ad was successful deleted." });
        }

        [Authorize]
        [HttpGet]
        [Route("Deactivate/{id:int}")]
        public async Task<ActionResult> Deactivate(int id)
        {
            var userId = User.GetId();
            await _adService.DeactivateAsync(id, userId);

            return Ok(new { message = "The ad was successful deactivated." });
        } 
    }
}
