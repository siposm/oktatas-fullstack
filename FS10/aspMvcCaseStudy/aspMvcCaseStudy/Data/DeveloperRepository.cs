using aspMvcCaseStudy.Models;

namespace aspMvcCaseStudy.Data
{
    public class DeveloperRepository : IDeveloperRepository
    {
        List<Developer> developers;
        public DeveloperRepository()
        {
            developers = new List<Developer>();
        }

        public void Create(Developer dev)
        {
            this.developers.Add(dev);
        }

        public IEnumerable<Developer> Read()
        {
            return this.developers;
        }

        public Developer? Read(string name)
        {
            // we handle name as unique identifier
            return this.developers.FirstOrDefault(x => x.Name == name);
        }

        public void Update(Developer dev)
        {
            Developer toUpdate = this.Read(dev.Name);

            toUpdate.Salary = dev.Salary;
            toUpdate.IsActive = dev.IsActive;
            toUpdate.Job = dev.Job;
        }
        public void Delete(string name)
        {
            Developer toDelete = this.Read(name);
            this.developers.Remove(toDelete);
        }
    }
}
