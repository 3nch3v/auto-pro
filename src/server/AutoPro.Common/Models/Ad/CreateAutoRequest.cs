using System.ComponentModel.DataAnnotations;

namespace AutoPro.Common.Models.Ad
{
    public class CreateAutoRequest
    {
        [Required]
        [MinLength(2)]
        public string? Make { get; set; }

        [Required]
        [MinLength(1)]
        public string? Model { get; set; }

        public decimal Price { get; set; }

        public int Kilometers { get; set; }

        public int HorsePower { get; set; }

        public int Year { get; set; }

        [Required]
        public string? PictureUrl { get; set; }
    }
}
