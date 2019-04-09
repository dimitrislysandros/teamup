using System;
using TeamUp.API.Models;

namespace TeamUp.API.Dtos
{
    public class EventForCreateDto
    {
        public string Name {get; set;}
        public DateTime EventDate {get;set;}
        public int ChargePerPerson {get;set;}
        public Place Place{get;set;}
        public int PlaceId {get;set;}
    }
}