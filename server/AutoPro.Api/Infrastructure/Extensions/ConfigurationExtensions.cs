namespace AutoPro.Api.Infrastructure.Extensions
{
    using AutoPro.Common;

    public static class ConfigurationExtensions
    {
        public static string GetDefaultConnectionString(this IConfiguration configuration)
        {
            return configuration.GetConnectionString("DefaultConnection");
        }

        public static AppSettings GetAppSettings(this IServiceCollection services, IConfiguration configuration)
        {
            var appSettingsConfig = configuration.GetSection("AppSettings");

            services.Configure<AppSettings>(appSettingsConfig);

            var appSettings = appSettingsConfig.Get<AppSettings>();

            return appSettings;
        }
    }
}
