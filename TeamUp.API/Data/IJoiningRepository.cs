using System.Collections.Generic;
using System.Threading.Tasks;
using TeamUp.API.Models;

namespace TeamUp.API.Data
{
    public interface IJoiningRepository
    {
         void Add<T>(T entity) where T:class;
         void Delete<T>(T entity) where T:class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<IEnumerable<Event>> GetEvents();
         Task<IEnumerable<Place>> GetPlaces();
         Task<User> GetUser(int id);
         Task<Event> GetEvent(int id);
         Task<Place> GetPlace(int id);
         Task<Connect> GetConnect (int playerId, int eventId);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForUser(int userId);
    }
}