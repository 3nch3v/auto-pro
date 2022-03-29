namespace AutoPro.Common.Models.Ad
{
  public class AdListingModel
  {
    public int Id { get; set; }

    public string? Make { get; set; }

    public string? Model { get; set; }

    public decimal Price { get; set; }

    public int Year { get; set; }

    public string? PictureUrl { get; set; }
  }
}
