using System;
using System.Collections.Generic;

namespace TeamUp.API.Models
{
    public class Event
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public DateTime EventDate {get;set;}
        public string EvnetTime {get; set;}
        public int ChargePerPerson {get;set;}
        public Place Place {get;set;}
        public int PlaceId {get;set;}
        public ICollection<Connect> Player {get; set;}

    }
}