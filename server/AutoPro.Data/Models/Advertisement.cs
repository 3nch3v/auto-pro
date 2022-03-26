namespace AutoPro.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Advertisement
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public string Contact { get; set; }

        public bool IsActive { get; set; } = true;

        public int AutoId { get; set; }

        public virtual Auto Auto { get; set; }

        [Required]
        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
