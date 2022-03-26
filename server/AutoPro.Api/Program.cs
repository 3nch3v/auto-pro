using System.Reflection;

using Microsoft.EntityFrameworkCore;

using AutoPro.Api.Infrastructure.Extensions;
using AutoPro.Data;
using AutoPro.Data.Models;
using AutoPro.Services.Contracts;
using AutoPro.Services;

var builder = WebApplication.CreateBuilder(args);

var appSettings = builder.Services.GetAppSettings(builder.Configuration);

builder.Services.AddCors();

builder.Services.AddDbContext<ApplicationDbContext>(
    options =>options.UseLazyLoadingProxies()
                     .UseSqlServer(builder.Configuration.GetDefaultConnectionString()));

builder.Services.AddDefaultIdentity<ApplicationUser>(IdentityOptionsProvider.GetIdentityOptions)
                .AddRoles<ApplicationRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddJwtAuthentication(appSettings);

builder.Services.AddControllers();

builder.Services.AddApplicationServices();

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddSingleton(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseMigrationsEndPoint();
}

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapDefaultControllerRoute();

app.UseCors(x => x.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader());

//app.UseMiddleware<JwtMiddleware>();

app.UseEndpoints(endpoints => endpoints.MapControllers());

app.ApplyMigrations();

app.Run();
