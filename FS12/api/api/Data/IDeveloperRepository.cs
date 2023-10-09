using api.Models;

namespace api.Data
{
    public interface IDeveloperRepository
    {
        void Create(Developer dev);
        void Delete(int id);
        IEnumerable<Developer> Read();
        Developer? Read(int id);
        void Update(Developer dev);
    }
}