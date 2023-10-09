using api.Data;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllersWithViews();

// IoC
builder.Services.AddDbContext<DeveloperDbContext>();
builder.Services.AddTransient<IDeveloperRepository, DeveloperRepository>();

builder.Services.AddSwaggerGen();


var app = builder.Build();

app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapGet("/", () => "Hello World!");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowCredentials()
    .AllowAnyMethod()
    .AllowAnyHeader()
    .WithOrigins("http://localhost:5500"));

app.Run();
