using Microsoft.EntityFrameworkCore;
using TeamUp.API.Models;

namespace TeamUp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }
    }
}