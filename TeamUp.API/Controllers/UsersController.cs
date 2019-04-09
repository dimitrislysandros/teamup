using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TeamUp.API.Data;
using TeamUp.API.Dtos;
using TeamUp.API.Models;

namespace TeamUp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IJoiningRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IJoiningRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var usersGet = await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(usersGet);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            var userToReturn= _mapper.Map<UserForDetaildeDto>(user);

            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");
        }

        [HttpPost("{id}/join/{eventId}")]
        public async Task<IActionResult> JoinEvent(int id, int eventId)
        {
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var connection = await _repo.GetConnect(id, eventId);

            if (connection!=null)
                return BadRequest("You have already joined this event");

            if (await _repo.GetEvent(eventId) == null)
                return NotFound();

            connection = new Connect
            {
                UserId = id,
                EventId = eventId
            };

            _repo.Add<Connect>(connection);

            if (await _repo.SaveAll())
                return Ok();
            
            return BadRequest("Failed to join the event");
        }
    }
}