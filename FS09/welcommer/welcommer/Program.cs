var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapGet("/welcome", async t =>
{
    string name = t.Request.Query["name"];
    string age = t.Request.Query["age"];

    string siteStart = "<html>";
    string siteEnd = "</html>";

    for (global::System.Int32 i = 0; i < 10; i++)
    {
        siteStart += $"<p>{i}</p>";
        siteStart += "<img src=https://picsum.photos/200>";
    }

    await t.Response.WriteAsync($"{siteStart}<h3>Hello {name}! Your age is: {age}</h3>{siteEnd}");
});


//app.MapGet("/", () => "<h1>Hello World!</h1>");
//app.MapGet("/time", () => DateTime.Now.ToLongTimeString());
//app.MapGet("/hello", () =>
//{
//});

app.Run();
