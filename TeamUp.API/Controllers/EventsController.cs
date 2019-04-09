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
    public class EventsController : ControllerBase
    {
        private readonly IJoiningRepository _repo;
        private readonly IMapper _mapper;
        public EventsController(IJoiningRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetEvents()
        {
            var eventsGet = await _repo.GetEvents();

            var eventsToReturn = _mapper.Map<IEnumerable<EventForListDto>>(eventsGet);

            return Ok(eventsToReturn);
        }

        [HttpGetAttribute("{id}", Name="GetEvent")]
        public async Task<IActionResult> GetEvent(int id)
        {
            var eventGet = await _repo.GetEvent(id);

            var eventToReturn= _mapper.Map<EventForDetailedDto>(eventGet);

            return Ok(eventToReturn);
        }
    }
}