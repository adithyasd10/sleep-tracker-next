'use client';

const ContactPage = () => {
  return (
    <div className="font-sans bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Contact SleepTracker
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-md sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Have questions or need help? Get in touch with us!
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-emerald-500/20 mx-8" />

      {/* Contact Form Section */}
      <section className="py-16 px-8 bg-[#111827]">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Get in Touch
        </h2>
        <form
          className="max-w-3xl mx-auto space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById('name') as HTMLInputElement)?.value;
            const email = (document.getElementById('email') as HTMLInputElement)?.value;
            const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
            const mailtoLink = `mailto:adithyasdmail@gmail?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
            window.location.href = mailtoLink;
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 bg-[#0f172a] border border-gray-700 text-white rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 bg-[#0f172a] border border-gray-700 text-white rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 bg-[#0f172a] border border-gray-700 text-white rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 hover:from-cyan-600 hover:via-teal-500 hover:to-emerald-600 text-white px-4 py-2 rounded-md font-medium shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Divider */}
      <div className="border-t border-emerald-500/20 mx-8" />

      {/* Contact Information Section */}
      <section className="py-16 px-8 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
          Contact Information
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Email</h3>
            <p className="text-gray-300">adithyasdmail@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-teal-400">Phone</h3>
            <p className="text-gray-300">+91 9188723036</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-emerald-400">Address</h3>
            <p className="text-gray-300">Trivandrum,Kerala,USA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
