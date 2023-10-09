using api.Data;
using api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeveloperController : ControllerBase
    {
        IDeveloperRepository repo;

        public DeveloperController(IDeveloperRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public IEnumerable<Developer> GetDevelopers()
        {
            return this.repo.Read();
        }

        [HttpGet("{id}")]
        public Developer? GetDeveloper(int id)
        {
            return this.repo.Read(id);
        }

        [HttpPost]
        public void CreateDeveloper([FromBody] Developer developer)
        {
            this.repo.Create(developer);
        }

        [HttpPut]
        public void EditDeveloper([FromBody] Developer developer)
        {
            this.repo.Update(developer);
        }

        [HttpDelete("{id}")]
        public void DeleteDeveloper(int id)
        {
            this.repo.Delete(id);
        }
    }
}
