namespace AutoPro.Services.Contracts
{
    using AutoPro.Common.Models.Ad;

    public interface IAdService
    {
        Task CreateAdAsync(CreateAdRequest request, string userId);

        Task DeleteAsync(int id, string userId);

        Task DeactivateAsync(int id, string userId);

        AdResponse GetSigleAsync(int id);

        AllAdsResponse GetAllAsync(int page);

        IList<AdListingModel> GetRandom();
  }
}
