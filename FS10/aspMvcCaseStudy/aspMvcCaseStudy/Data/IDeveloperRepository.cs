using aspMvcCaseStudy.Models;

namespace aspMvcCaseStudy.Data
{
    public interface IDeveloperRepository
    {
        void Create(Developer dev);
        void Delete(string name);
        IEnumerable<Developer> Read();
        Developer? Read(string name);
        void Update(Developer dev);
    }
}