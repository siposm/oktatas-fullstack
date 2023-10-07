using aspMvcCaseStudy.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace aspMvcCaseStudy.Controllers
{
    public class NameController : Controller
    {
        INameRepository repo;
        public NameController(INameRepository repo)
        {
            this.repo = repo;
            //this.repo = new NameRepository(); // BAD
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Add(string name)
        {
            this.repo.Add(name);
            return RedirectToAction(nameof(List));
        }

        public string List()
        {
            return this.repo.List();
        }
    }
}