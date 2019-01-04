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
         Task<User> GetUser(int id);
         Task<Event> GetEvent(int id);
    }
}