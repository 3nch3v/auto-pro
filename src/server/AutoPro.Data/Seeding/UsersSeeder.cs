namespace AutoPro.Data.Seeding
{
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.DependencyInjection;

    using AutoPro.Data.Models;

    using static AutoPro.Common.GlobalConstants;

    internal class UsersSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext.Users.Any())
            {
                return;
            }

            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            var adminUser = new ApplicationUser
            {
                UserName = "admin@admin.net",
                Email = "admin@admin.net",
            };

            var adminRegistrationResult = userManager.CreateAsync(adminUser, "administrator").Result;

            if (adminRegistrationResult.Succeeded)
            {
                await userManager.AddToRoleAsync(adminUser, Roles.Administrator);
            }
        }
    }
}
