namespace AutoPro.Services
{
  using System.Collections.Generic;
  using System.Threading.Tasks;

  using AutoPro.Common.Models.Ad;
  using AutoPro.Data;
  using AutoPro.Data.Models;
  using AutoPro.Services.Contracts;

  public class AdService : IAdService
  {
    private readonly ApplicationDbContext _dbContext;

    public AdService(ApplicationDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    public async Task CreateAdAsync(CreateAdRequest request, string userId)
    {
      var ad = new Advertisement
      {
        Title = request.Title,
        Description = request.Description,
        Date = DateTime.Now,
        Contact = request.Contact,
        UserId = userId,
        Auto = new Auto
        {
          Make = request.Make,
          Model = request.Model,
          Price = request.Price,
          Year = request.Year,
          Kilometers = request.Kilometers,
          HorsePower = request.HorsePower,
          PictureUrl = request.PictureUrl,
        },
      };

      await _dbContext.Advertisements.AddAsync(ad);
      await _dbContext.SaveChangesAsync();
    }

    public async Task DeactivateAsync(int id, string userId)
    {
      var ad = _dbContext.Advertisements.FirstOrDefault(x => x.Id == id && x.UserId == userId);
      if (ad == null)
      {
        throw new Exception("Deactivate not possible.");
      }

      ad.IsActive = false;

      await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id, string userId)
    {
      var ad = _dbContext.Advertisements.FirstOrDefault(x => x.Id == id && x.UserId == userId);
      if (ad == null)
      {
        throw new Exception("Delete not possible.");
      }

      _dbContext.Remove(ad);

      await _dbContext.SaveChangesAsync();
    }

    public AllAdsResponse GetAllAsync(int page)
    {
      var ads = _dbContext.Advertisements
          .Skip((page - 1) * 9)
          .Take(9)
          .ToList();

      var allAdsResponse = new AllAdsResponse
      {
        Page = page,
        AdsCount = 1,
        Ads = new List<AdListingModel>(),
      };

      foreach (var ad in ads)
      {
        allAdsResponse.Ads.Add(new AdListingModel
        {
          Id = ad.Id,
          Make = ad.Auto.Make,
          Model = ad.Auto.Model,
          Price = ad.Auto.Price,
          Year = ad.Auto.Year,
          PictureUrl = ad.Auto.PictureUrl,
        });
      }

      return allAdsResponse;
    }

    public IList<AdListingModel> GetRandom()
    {
      var ads = _dbContext.Advertisements
        .OrderBy(emp => Guid.NewGuid())
        .Take(3)
        .ToList();

      var randomAds = ads.Select(x => new AdListingModel
      {
        Id = x.Id,
        Model = x.Auto.Model,
        Make = x.Auto.Make,
        PictureUrl = x.Auto.PictureUrl,
        Price = x.Auto.Price,
        Year = x.Auto.Year
      })
        .ToList();

      return randomAds;
    }

    public AdResponse GetSigleAsync(int id)
    {
      var ad = _dbContext.Advertisements.FirstOrDefault(x => x.Id == id);
      if (ad == null)
      {
        throw new Exception("Ad does not exist.");
      }

      var response = new AdResponse
      {
        Id = ad.Id,
        Title = ad.Title,
        Description = ad.Description,
        Date = ad.Date,
        Contact = ad.Contact,
        IsActive = ad.IsActive,
        Make = ad.Auto.Make,
        Model = ad.Auto.Model,
        Price = ad.Auto.Price,
        Kilometers = ad.Auto.Kilometers,
        HorsePower = ad.Auto.HorsePower,
        Year = ad.Auto.Year,
        PictureUrl = ad.Auto.PictureUrl,
      };

      return response;
    }
  }
}
