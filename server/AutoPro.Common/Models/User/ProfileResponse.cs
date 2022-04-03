using AutoPro.Common.Models.Ad;

namespace AutoPro.Common.Models.User
{
  public class ProfileResponse
  {
    public IEnumerable<ProfileAdListingModel> Ads { get; set; }
  }
}
