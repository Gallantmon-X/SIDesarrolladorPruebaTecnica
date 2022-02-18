using Dapper;
using MySql.Data.MySqlClient;
using NetCoreAPIMYSQL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreAPIMYSQL.Data.Repositories
{
    public class LibroRepository : ILibroRepository
    {
        private MySQLConfiguration _connectionString;
        public LibroRepository(MySQLConfiguration connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<bool> DeleteLibro(Libro Libro)
        {
            var db = dbConnection();
            var sql = @"
                 DELETE FROM  Libro 
                 Where IdLibro=@IdLibro";
           
            var result = await db.ExecuteAsync(sql, new { IdLibro = Libro.IdLibro });
            return result > 0;
        }

        public async Task<IEnumerable<Libro>> GetAllLibros()
        {
            var db = dbConnection();
            var sql = @"SELECT IdLibro, AutorLibro, TituloLibro,ComentarioLibro FROM libro;";
            return await db.QueryAsync<Libro>(sql, new { });
        }

        public async Task<bool> InsertLibro(Libro Libro)
        {
            var db = dbConnection();
            var sql = @"INSERT INTO Libro (AutorLibro,TituloLibro, ComentarioLibro) VALUES (@AutorLibro,@TituloLibro, @ComentarioLibro)";
           var result=await db.ExecuteAsync(sql, new {Libro.AutorLibro,Libro.TituloLibro,Libro.ComentarioLibro });
            return result > 0;
        }

        public async Task<bool> UpdateLibro(Libro Libro)
        {
            var db = dbConnection();
            var sql = @"UPDATE  Libro (AutorLibro, ComentarioLibro) VALUES (@AutorLibro, @ComentarioLibro) 
            Where IdLibro=@IdLibro";
            var result = await db.ExecuteAsync(sql, new { Libro.AutorLibro, Libro.ComentarioLibro });
            return result > 0;
        }

        protected  MySqlConnection dbConnection() 
        {
            return new MySqlConnection(_connectionString.ConnectionString);
        }

    }
}
