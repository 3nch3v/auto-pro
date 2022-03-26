namespace AutoPro.Common.Models.User
{
    using System.ComponentModel.DataAnnotations;

    public class RegisterRequest
    {
        [Required]
        [MinLength(6)]
        public string? Email { get; set; }

        [Required]
        [MinLength(6)]
        public string? Password { get; set; }

        [Required]
        [MinLength(6)]
        [Compare("Password")]
        public string? ConfirmPassword { get; set; }
    }
}
