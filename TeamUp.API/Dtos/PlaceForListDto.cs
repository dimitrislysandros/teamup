using System.Collections.Generic;
using TeamUp.API.Models;

namespace TeamUp.API.Dtos
{
    public class PlaceForListDto
    {
       public int Id {get; set;}
        public string Name {get; set;}
        public string Address {get; set;}
        public string HowToBook {get; set;}
        public string Info {get; set;}
        public string Latitude {get;set;}
        public string Longitude {get;set;}
        public string FieldType {get;set;}
        public bool Public {get;set;}
        public string PhotoUrl{get;set;}
    
    
    }
}