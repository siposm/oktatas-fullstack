namespace welcommer.Models
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public List<string> Skills { get; set; }
        public string Job { get; set; }
        public Person(string skills)
        {
            this.Skills = new List<string>();
            foreach (var item in skills.Split('@'))
            {
                this.Skills.Add(item);
            }
        }
    }
}
