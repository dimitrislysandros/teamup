using System;

namespace TeamUp.API.Models
{
    public class Event
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public string Latitude {get;set;}
        public string Longitude {get;set;}
        public DateTime EventDate {get;set;}
        public int ParticipantsTeamA {get;set;}
        public int ChargePerPerson {get;set;}
        public User User {get;set;}
        public int UserId{get;set;}
    }
}