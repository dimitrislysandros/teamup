namespace TeamUp.API.Models
{
    public class Connect
    {
        public int UserId {get; set;}
        public int EventId {get; set;}
        public User Player {get; set;}
        public Event Event {get; set;}
    }
}