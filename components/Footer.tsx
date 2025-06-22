import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-emerald-500/20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
              LunaLog
            </h2>
            <p className="text-gray-400 text-sm">
              Track your sleep, improve your health.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SleepTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
