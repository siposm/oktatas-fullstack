using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DeveloperDbContext : DbContext
    {
        public DbSet<Developer> Developers { get; set; }
        public DeveloperDbContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connString = @"Data Source=(LocalDB)\MSSQLLocalDB;Initial Catalog=developerdb;Integrated Security=True;MultipleActiveResultSets=true";
            optionsBuilder.UseSqlServer(connString);
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Developer>().HasData(
                new Developer()
                {
                    ID = 1,
                    Name = "John the programmer",
                    IsActive = true,
                    Job = Job.Frontend,
                    Salary = 980000
                },
                new Developer()
                {
                    ID = 2,
                    Name = "Jamie the developer",
                    IsActive = false,
                    Job = Job.Backend,
                    Salary = 350990
                },
                new Developer()
                {
                    ID = 3,
                    Name = "John Carmack",
                    IsActive = false,
                    Job = Job.Database,
                    Salary = 999999
                }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
