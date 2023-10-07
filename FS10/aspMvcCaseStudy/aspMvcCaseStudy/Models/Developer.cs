using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace aspMvcCaseStudy.Models
{
    public enum Job
    {
        [Display(Name = "Frontend developer")]
        frontend = 0,

        [Display(Name = "Backend developer")]
        backend = 1,

        [Display(Name = "Fullstack developer")] 
        fullstack = 2,

        [Display(Name = "Database engineer")] 
        database = 3,

        [Display(Name = "HR")] 
        hr = 4
    }
    public class Developer
    {
        public string Name { get; set; }
        public int Salary { get; set; }
        public Job Job { get; set; }
        public bool IsActive { get; set; }
    }

    public static class EnumExtensions
    {
        public static string GetDisplayName(this Enum enumValue)
        {
            return enumValue.GetType()
                            .GetMember(enumValue.ToString())
                            .First()
                            .GetCustomAttribute<DisplayAttribute>()
                            .GetName();
        }
    }

}
