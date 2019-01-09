using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamUp.API.Models;

namespace TeamUp.API.Data
{
    public class JoiningRepository : IJoiningRepository
    {
        private readonly DataContext _context;
        public JoiningRepository(DataContext context)
        {
            _context=context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Event> GetEvent(int id)
        {
            var eventToGet = await _context.Events.
                FirstOrDefaultAsync(e => e.Id == id);

            return eventToGet;
        }

        public async Task<IEnumerable<Event>> GetEvents()
        {
            var eventsToGet = await _context.Events.ToListAsync();

            return eventsToGet;
        }

        public async Task<User> GetUser(int id)
        {
            var user= await _context.Users.Include(p => p.Photos).
                FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        // public async Task<Place> GetPlace(int id)
        // {
        //      var place= await _context.Place.Include(p => p.PlacesPhoto).
        //         FirstOrDefaultAsync(u => u.Id == id);

        //      return place;
        // }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p => p.Photos).ToListAsync();

            return users;
        }

        // public async Task<IEnumerable<Place>> GetPlaces()
        // {
        //     var places = await _context.Place.Include(p => p.PlacesPhoto).ToListAsync();

        //     return places;
        // }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}