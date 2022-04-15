namespace AutoPro.Data.Models
{
  using System.ComponentModel.DataAnnotations;

  public class Advertisement
  {
    public int Id { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Title { get; set; }

    [Required]
    [StringLength(500, MinimumLength = 10)]
    public string Description { get; set; }

    public DateTime Date { get; set; }

    [Required]
    [StringLength(30, MinimumLength = 6)]
    public string Contact { get; set; }

    public bool IsActive { get; set; } = true;

    public int AutoId { get; set; }

    public virtual Auto Auto { get; set; }

    [Required]
    public string UserId { get; set; }

    public virtual ApplicationUser User { get; set; }
  }
}
