using Microsoft.EntityFrameworkCore;
using server.Contexts.Users.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// =======================
// Services
// =======================

// ------------------------------------------------------
// Add DbContext (PostgreSQL)
// Needs one service registration per DbContext, even if they use the same connection string
// ------------------------------------------------------


builder.Services.AddDbContext<UsersDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("Default")
    ));



// Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS (for Vite frontend)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// =======================
// Middleware
// =======================

// Swagger UI (kun i development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// HTTPS redirect (kan fjernes hvis du vil teste enklere)
app.UseHttpsRedirection();

// CORS må være før endpoints
app.UseCors();

// =======================
// Endpoints (midlertidig)
// =======================

// Test endpoint
app.MapGet("/test", () => "Backend works!");

// =======================
// VSA Endpoints
// =======================

// Eksempel (bruk når du lager feature)
// app.MapGetUser();

app.Run();