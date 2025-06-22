import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="font-sans bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-md sm:text-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          About SleepTracker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-md sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          A smarter way to monitor and enhance your sleep—backed by science and built for everyone.
        </p>
      </section>

      <div className="border-t border-emerald-500/20 mx-8" />

      {/* Mission Section */}
      <section className="py-16 px-8 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-8 text-md sm:text-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Our Mission
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          At SleepTracker, our mission is to empower individuals to take control of their sleep health.
          By leveraging advanced analytics and user-friendly design, we help you unlock better rest,
          deeper insights, and a healthier lifestyle.
        </p>
      </section>

    <div className="border-t border-emerald-500/20 mx-8" />

      {/* Features Section */}
      <section className="py-16 px-8 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-8 text-md sm:text-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Why Choose SleepTracker?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1f2937] p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Comprehensive Tracking</h3>
            <p className="text-gray-300">
              Monitor your nightly patterns to discover trends, habits, and improvements.
            </p>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2 text-teal-400">Personalized Insights</h3>
            <p className="text-gray-300">
              Get data-driven feedback and suggestions tailored to your unique sleep behavior.
            </p>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2 text-emerald-400">User-Friendly Design</h3>
            <p className="text-gray-300">
              Enjoy a seamless and intuitive experience optimized for all devices and sleep goals.
            </p>
          </div>
        </div>
      </section>

    <div className="border-t border-emerald-500/20 mx-8" />

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-[#0a0a0a] text-center">
        <h2 className="text-3xl font-bold mb-4 text-md sm:text-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Ready to Sleep Smarter?
        </h2>
        <p className="text-lg mb-6 text-md sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Start optimizing your sleep with SleepTracker and take charge of your health today.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-white text-teal-700 hover:text-emerald-500 px-6 py-3 rounded-md font-medium shadow-md transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
