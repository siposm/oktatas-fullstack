namespace aspMvcCaseStudy.Data
{
    public interface INameRepository
    {
        void Add(string name);
        string List();
    }
}