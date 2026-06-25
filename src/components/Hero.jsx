const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] top-20 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
          Digital Marketing Agency
        </p>

        <h1 className="mt-6 text-6xl md:text-7xl font-extrabold leading-tight">
          Grow Your Business
          <br />
          <span className="text-blue-500">
            With Creative Digital Solutions
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We help brands increase visibility, generate quality leads,
          build stunning websites, and scale through powerful marketing
          strategies.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300">
            Get Free Consultation
          </button>

          <button className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-xl transition duration-300">
            View Portfolio
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-10 max-w-3xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-blue-500">100+</h2>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-500">50+</h2>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-500">5★</h2>
            <p className="text-gray-400 mt-2">Client Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;