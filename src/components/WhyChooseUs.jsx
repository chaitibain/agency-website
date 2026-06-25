const features = [
  {
    title: "Creative Strategy",
    description: "Every project starts with research and a custom growth strategy.",
  },
  {
    title: "Fast Delivery",
    description: "We deliver high-quality work on time without compromising quality.",
  },
  {
    title: "Result Driven",
    description: "Our focus is on leads, conversions, and measurable business growth.",
  },
  {
    title: "Dedicated Support",
    description: "We're here to help before, during, and after every project.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We combine creativity, technology, and marketing to help your business grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;