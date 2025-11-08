import { Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-12 md:py-20 pt-24 md:pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-12 md:mb-16">
          <span className="chalk-underline">Your GTM Engineer — part Sales, part Analytics.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative group w-full md:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7A00] to-[#FF8C1A] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="https://raw.githubusercontent.com/kradithya1997/revenueclues-assets/main/UConnHartfordHeadshots_12.jpg"
                alt="Adithya"
                className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6 mt-8 md:mt-0">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              I'm KR Adithya — an Analytics Engineer with a Sales Engineering backbone.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Over 7 years across Freshworks, Zluri, and Adobe, I've built GTM foundations that connect sales, data, and scale.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At Freshworks, I worked as both a Presales Engineer and Analytics Engineer, translating demo insights into CRM systems.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At Zluri, I was the founding Solutions Engineer, setting up GTM structure from the ground up.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At Adobe, I was a Data Analyst, aligning product and revenue metrics.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Now, through RevenueClues, I help early-stage SaaS founders build GTM systems that scale before RevOps ever arrives.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-500 mb-3">Certifications</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span className="text-base text-gray-700">HubSpot RevOps Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span className="text-base text-gray-700">HubSpot Reporting & Analytics Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF7A00] mt-1">•</span>
                  <span className="text-base text-gray-700">Product Analytics Certified (Product School)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-500 mb-4">Mission</p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6">
                Help founders move from scattered data to structured growth.
              </p>
              <button
                onClick={() => window.open('https://calendar.app.google/HXsmD9MhuU6LEXUM7', '_blank')}
                className="bg-[#0D1B2A] text-white px-8 md:px-10 py-3 md:py-4 rounded-[20px] text-base md:text-lg font-semibold hover:bg-[#1F1F1F] hover:scale-105 transition-all duration-300 shadow-xl w-full md:w-auto text-center"
              >
                Let's work together
              </button>
            </div>

            <div className="flex gap-4 mt-6 md:gap-6">
              <a
                href="https://www.linkedin.com/in/kradithya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#0077B5] text-white rounded-full hover:bg-[#006399] hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adithya@revenueclues.info"
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#FF7A00] text-white rounded-full hover:bg-[#FF8C1A] hover:scale-110 transition-all duration-300 shadow-lg"
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
