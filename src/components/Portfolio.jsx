import portfolio from "../data/portfolio";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Our Work
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Recent Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A glimpse of successful projects we've delivered for clients across different industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden bg-[#16161D] border border-white/10 hover:border-blue-500 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <p className="text-blue-500 text-sm uppercase">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;