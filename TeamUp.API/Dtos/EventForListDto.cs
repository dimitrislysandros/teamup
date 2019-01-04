using System;

namespace TeamUp.API.Dtos
{
    public class EventForListDto
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public string Latitude {get;set;}
        public string Longitude {get;set;}
        public DateTime EventDate {get;set;}
        public int ParticipantsTeamA {get;set;}
        public int ChargePerPerson {get;set;}
    }
}