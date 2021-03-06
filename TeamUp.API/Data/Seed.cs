using System.Collections.Generic;
using Newtonsoft.Json;
using TeamUp.API.Models;

namespace TeamUp.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedPlaces()
        {
            var placeData=System.IO.File.ReadAllText("Data/PlaceSeedData.json");
            var placesToAdd = JsonConvert.DeserializeObject<List<Place>>(placeData);
            foreach (var placeTA in placesToAdd)
            {
                _context.Place.Add(placeTA);
            }

            _context.SaveChanges();
        }
        public void SeedEvents()
        {
            var eventData=System.IO.File.ReadAllText("Data/EventSeedData.json");
            var eventsToAdd = JsonConvert.DeserializeObject<List<Event>>(eventData);
            foreach (var eventTA in eventsToAdd)
            {
                _context.Events.Add(eventTA);
            }

            _context.SaveChanges();
        }

        public void SeedUsers()
        {
            var userData=System.IO.File.ReadAllText("Data/UsersSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);

                user.PasswordHash=passwordHash;
                user.PasswordSalt=passwordSalt;
                user.Username=user.Username.ToLower();

                _context.Users.Add(user);
            }

            _context.SaveChanges();
        }


        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac= new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt=hmac.Key;
                passwordHash=hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}