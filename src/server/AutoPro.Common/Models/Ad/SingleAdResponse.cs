namespace AutoPro.Common.Models.Ad
{
    public class SingleAdResponse
    {
        public int Id { get; set; }

        public string? Title { get; set; }

        public string? Description { get; set; }

        public DateTime Date { get; set; }

        public string? Contact { get; set; }

        public bool IsActive { get; set; }

        public string? Make { get; set; }

        public string? Model { get; set; }

        public decimal Price { get; set; }

        public int Kilometers { get; set; }

        public int HorsePower { get; set; }

        public int Year { get; set; }

        public string? PictureUrl { get; set; }
    }
}
