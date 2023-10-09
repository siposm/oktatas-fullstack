using api.Models;

namespace api.Data
{
    public class DeveloperRepository : IDeveloperRepository
    {
        DeveloperDbContext db;

        public DeveloperRepository(DeveloperDbContext db)
        {
            this.db = db;
        }

        public void Create(Developer dev)
        {
            this.db.Developers.Add(dev);
            db.SaveChanges();
        }

        public IEnumerable<Developer> Read()
        {
            return this.db.Developers;
        }

        public Developer? Read(int id)
        {
            return this.db.Developers.FirstOrDefault(x => x.ID == id);
        }

        public void Update(Developer dev)
        {
            Developer toUpdate = this.Read(dev.ID);

            toUpdate.Name = dev.Name;
            toUpdate.Salary = dev.Salary;
            toUpdate.IsActive = dev.IsActive;
            toUpdate.Job = dev.Job;

            db.SaveChanges();
        }
        public void Delete(int id)
        {
            Developer toDelete = this.Read(id);
            this.db.Developers.Remove(toDelete);

            db.SaveChanges();
        }
    }
}
