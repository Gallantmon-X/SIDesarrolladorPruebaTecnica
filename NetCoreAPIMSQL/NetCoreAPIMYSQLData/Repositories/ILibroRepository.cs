using NetCoreAPIMYSQL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreAPIMYSQL.Data.Repositories
{
   public interface ILibroRepository
    {
        Task<IEnumerable<Libro>>GetAllLibros();
        Task<bool> InsertLibro(Libro Libro);
        Task<bool> UpdateLibro(Libro Libro);
        Task<bool> DeleteLibro(Libro Libro);
    }
}
