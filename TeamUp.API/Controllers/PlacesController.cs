using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TeamUp.API.Data;
using TeamUp.API.Dtos;


namespace TeamUp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PlacesController : ControllerBase
    {
        private readonly IJoiningRepository _repo;
        private readonly IMapper _mapper;
        public PlacesController(IJoiningRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetPlaces()
        {
            var placesGet = await _repo.GetPlaces();

            var placesToReturn = _mapper.Map<IEnumerable<PlaceForListDto>>(placesGet);

            return Ok(placesToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPlace(int id)
        {
            var place = await _repo.GetPlace(id);

            var placeToReturn= _mapper.Map<PlaceForDetailed>(place);

            return Ok(placeToReturn);
        }
    }
}