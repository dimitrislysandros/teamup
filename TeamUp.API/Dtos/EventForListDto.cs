using System;
using TeamUp.API.Models;

namespace TeamUp.API.Dtos
{
    public class EventForListDto
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public DateTime EventDate {get;set;}
        public Place Place{get;set;}
        public int PlaceId {get;set;}

        public string PlaceName {get;set;}
        public string PlaceLatitude {get;set;}
        public string PlaceLongitude {get;set;}
    }
}