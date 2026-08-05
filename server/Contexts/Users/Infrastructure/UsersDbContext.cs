using Microsoft.EntityFrameworkCore;
using server.Contexts.Users.Domain.Entities;

namespace server.Contexts.Users.Infrastructure;

public class UsersDbContext : DbContext
{
    public UsersDbContext(DbContextOptions<UsersDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
}