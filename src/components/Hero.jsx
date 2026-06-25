const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-500">
          Tailwind is Working 🚀
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Welcome to Sparrow Films
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;