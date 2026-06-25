import navigation from "../constants/navigation";
import siteConfig from "../config/siteConfig";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold whitespace-nowrap"
        >
          {siteConfig.agencyName}
        </a>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-blue-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
          Free Consultation
        </button>

      </div>
    </nav>
  );
};

export default Navbar;