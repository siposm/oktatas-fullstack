using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace api.Models
{
    public enum Job
    {
        [Display(Name = "Frontend developer")]
        Frontend = 100,

        [Display(Name = "Backend developer")]
        Backend = 200,

        [Display(Name = "Fullstack developer")]
        Fullstack = 300,

        [Display(Name = "Database engineer")]
        Database = 400,

        [Display(Name = "HR")]
        HR = 500
    }
    public class Developer
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public Job Job { get; set; }
        public bool IsActive { get; set; }
    }
}
