import { Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20 snap-start">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-16">
          <span className="chalk-underline">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A00] to-[#FF8C1A] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="https://raw.githubusercontent.com/adithyakr/revenueclues-assets/main/UConnHartfordHeadshots_12.jpg"
                alt="Adithya"
                className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              With 7 years across <span className="font-semibold">Freshworks, Zluri, and Adobe</span>, I've seen how much time founders lose trying to connect GTM data.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I started <span className="font-bold text-[#FF7A00]">RevenueClues</span> as a weekend project to help founders move faster by turning existing data into clear, actionable insights.
            </p>

            <button
              onClick={() => window.open('https://calendar.app.google/HXsmD9MhuU6LEXUM7', '_blank')}
              className="bg-[#0D1B2A] text-white px-10 py-4 rounded-[20px] text-lg font-semibold hover:bg-[#1F1F1F] hover:scale-105 transition-all duration-300 shadow-xl mt-8"
            >
              Let's connect over a call
            </button>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/kradithya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#0077B5] text-white rounded-full hover:bg-[#006399] hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adithya@revenueclues.info"
                className="flex items-center justify-center w-12 h-12 bg-[#FF7A00] text-white rounded-full hover:bg-[#FF8C1A] hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
