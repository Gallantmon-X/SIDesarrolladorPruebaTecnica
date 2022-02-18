using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetCoreAPIMYSQL.Data.Repositories;
using NetCoreAPIMYSQL.Model;
using System.Threading.Tasks;

namespace NetCoreAPIMSQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibroController : ControllerBase
    {
        private readonly ILibroRepository _libroRepository;

        public LibroController(ILibroRepository libroRepository)
        {
            _libroRepository = libroRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllLibros()
        {
            return Ok(await _libroRepository.GetAllLibros());
        }
        [HttpPost]
        public async Task<IActionResult> CreateLibro([FromBody] Libro libro)
        {
            if (libro == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var created = await _libroRepository.InsertLibro(libro);
            return Created("created", created);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateLibro([FromBody] Libro libro)
        {
            if (libro == null)
                return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            await _libroRepository.UpdateLibro(libro);
            return NoContent();
        }
        [HttpDelete("{IdLibro}")]
        public async Task<IActionResult> DeleteLibro(int IdLibro)
        {
            await _libroRepository.DeleteLibro(new Libro() { IdLibro = IdLibro });
                return NoContent();
        }
    }
}
