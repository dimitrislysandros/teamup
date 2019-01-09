using System;

namespace TeamUp.API.Dtos
{
    public class PlacePhotosForDetailedDto
    {
        public int Id {get;set;}
        public string Url {get;set;}
        public string Description {get;set;}
        public DateTime DateAdded {get;set;}
        public bool IsMain {get;set;}
    }
}