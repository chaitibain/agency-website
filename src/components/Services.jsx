import services from "../data/services";

import {
  FaGlobe,
  FaSearch,
  FaBullhorn,
  FaPalette,
  FaRocket,
  FaVideo,
} from "react-icons/fa";

const icons = [
  <FaGlobe />,
  <FaSearch />,
  <FaBullhorn />,
  <FaPalette />,
  <FaRocket />,
  <FaVideo />,
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#0B0B0F] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            What We Do
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Our Services
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            We provide complete digital solutions to help your business
            grow online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#16161D] rounded-3xl p-8 border border-white/10 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-3xl mb-6">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-8">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href="#contact"
                className="inline-block mt-6 text-blue-500 font-semibold hover:text-blue-400 transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;