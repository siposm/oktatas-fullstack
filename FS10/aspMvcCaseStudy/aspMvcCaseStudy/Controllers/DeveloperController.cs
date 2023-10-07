using aspMvcCaseStudy.Data;
using aspMvcCaseStudy.Models;
using Microsoft.AspNetCore.Mvc;

namespace aspMvcCaseStudy.Controllers
{
    public class DeveloperController : Controller
    {
        IDeveloperRepository repo;
        public DeveloperController(IDeveloperRepository repo)
        {
            this.repo = repo;
        }

        public IActionResult Index()
        {
            return View(this.repo.Read()); // read all --> list all devs
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult Create(Developer developer)
        {
            this.repo.Create(developer);
            return RedirectToAction(nameof(Index));
        }

        [HttpGet]
        public IActionResult Delete(string name)
        {
            this.repo.Delete(name);
            return RedirectToAction(nameof(Index));
        }

        [HttpGet]
        public IActionResult Update(string name)
        {
            Developer dev = this.repo.Read(name);
            return View(dev);
        }

        [HttpPost]
        public IActionResult Update(Developer developer)
        {
            this.repo.Update(developer);
            return RedirectToAction(nameof(Index));
        }
    }
}
