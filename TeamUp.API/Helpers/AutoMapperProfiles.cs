using System.Linq;
using AutoMapper;
using TeamUp.API.Dtos;
using TeamUp.API.Models;

namespace TeamUp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetaildeDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<Event, EventForListDto>();
            CreateMap<Event, EventForDetailedDto>()
                .ForMember(dest => dest.PlaceLatitude, opt => {
                    opt.MapFrom(src => src.Place.Latitude);
                })
                .ForMember(dest => dest.PlaceLongitude, opt => {
                    opt.MapFrom(src => src.Place.Longitude);
                });
                // ;
            CreateMap<Place, PlaceForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.PlacesPhoto.FirstOrDefault(p => p.IsMain).Url);
                });
            CreateMap<Place, PlaceForDetailed>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.PlacesPhoto.FirstOrDefault(p => p.IsMain).Url);
                });
            CreateMap<PlacesPhoto, PlacePhotosForDetailedDto>();
        }
    }
}