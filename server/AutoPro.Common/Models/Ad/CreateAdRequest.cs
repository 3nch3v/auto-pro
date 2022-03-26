namespace AutoPro.Common.Models.Ad
{
    using System.ComponentModel.DataAnnotations;

    public class CreateAdRequest
    {
        [Required]
        [MinLength(2)]
        public string? Title { get; set; }

        [Required]
        [MinLength(6)]
        public string? Description { get; set; }

        [Required]
        [MinLength(3)]
        public string? Contact { get; set; }

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
