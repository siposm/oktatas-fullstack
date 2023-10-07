using Microsoft.AspNetCore.Mvc;
using welcommer.Models;

namespace welcommer.Controllers
{
    public class PersonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Welcome(string name, int age, string job, string skills)
        {
            //object[] data = { name, age };
            Person p = new Person(skills) { Name = name, Age = age, Job = job };
            return View(p);
        }
    }
}
