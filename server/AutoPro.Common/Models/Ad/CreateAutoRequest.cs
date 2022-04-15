using System.ComponentModel.DataAnnotations;

namespace AutoPro.Common.Models.Ad
{
  public class CreateAutoRequest
  {
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
