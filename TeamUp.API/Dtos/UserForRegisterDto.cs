using System.ComponentModel.DataAnnotations;

namespace TeamUp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username {get; set;}
        
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="Pass must be 4-8 characters")]
        public string Password {get; set;}
    }
}