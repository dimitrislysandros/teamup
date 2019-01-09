using System.Collections.Generic;

namespace TeamUp.API.Dtos
{
    public class PlaceForDetailed
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public string Country {get; set;}
        public string City {get; set;}
        public string Address {get; set;}
        public string HowToBook {get; set;}
        public string Info {get; set;}
        public string Latitude {get;set;}
        public string Longitude {get;set;}
        public string FieldType {get;set;}
        public string FieldSize {get;set;}
        public bool Public {get;set;}
        public string PhotoUrl{get;set;}
        public ICollection<PlacePhotosForDetailedDto> Photos {get;set;}
    
    }
}