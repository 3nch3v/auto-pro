namespace AutoPro.Common.Models.Ad
{
  using System.ComponentModel.DataAnnotations;

  public class CreateAdRequest
  {

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string? Title { get; set; }

    [Required]
    [StringLength(500, MinimumLength = 10)]
    public string? Description { get; set; }

    [Required]
    [StringLength(30, MinimumLength = 6)]
    public string? Contact { get; set; }

    [Required]
    [StringLength(20, MinimumLength = 2)]
    public string? Make { get; set; }

    [Required]
    [StringLength(20, MinimumLength = 2)]
    public string? Model { get; set; }

    [Range(0, int.MaxValue)]
    public decimal Price { get; set; }

    [Range(0, int.MaxValue)]
    public int Kilometers { get; set; }

    [Range(0, int.MaxValue)]
    public int HorsePower { get; set; }

    [Range(1900, int.MaxValue)]
    public int Year { get; set; }

    [Required]
    [StringLength(2048, MinimumLength = 6)]
    public string? PictureUrl { get; set; }
  }
}
