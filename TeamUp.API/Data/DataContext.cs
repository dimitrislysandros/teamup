using Microsoft.EntityFrameworkCore;
using TeamUp.API.Models;

namespace TeamUp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users{get;set;}

        public DbSet<Photo> Photos {get;set;}

        public DbSet<Event> Events {get;set;}
        public DbSet<Place> Place {get;set;}
        public DbSet<PlacesPhoto> PlacesPhotos {get;set;}
        public DbSet<Connect> Connections {get; set;}
        protected override void OnModelCreating(ModelBuilder builder){
            builder.Entity<Connect>()
                .HasKey(k => new {k.UserId, k.EventId});
            builder.Entity<Connect>()
                .HasOne(u => u.Player)
                .WithMany(u => u.Event)
                .HasForeignKey(u => u.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Connect>()
                .HasOne(u => u.Event)
                .WithMany(u => u.Player)
                .HasForeignKey(u => u.EventId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}