using Microsoft.AspNetCore.Mvc;

namespace aspMvcCaseStudy.Data
{
    public class NameRepository : INameRepository
    {
        List<string> names;
        public NameRepository()
        {
            this.names = new List<string>() { "John", "Jane", "Dom" };
        }

        public void Add(string name)
        {
            this.names.Add(name);
        }

        public string List()
        {
            return String.Join(",", this.names);
        }
    }
}
