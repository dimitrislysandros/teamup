using System;

namespace TeamUp.API.Models
{
    public class PlacesPhoto
    {
        public int Id {get;set;}
        public string Url {get;set;}
        public string Description {get;set;}
        public DateTime DateAdded {get;set;}
        public bool IsMain {get;set;}
        public Place Place{get;set;}
        public int PlaceId{get;set;}
    
    }
}