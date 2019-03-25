using System;
using System.Collections.Generic;
using TeamUp.API.Models;

namespace TeamUp.API.Dtos
{
    public class EventForDetailedDto
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public DateTime EventDate {get;set;}
        public int ChargePerPerson {get;set;}
        public Place Place{get;set;}
        public int PlaceId {get;set;}
        
    }
}