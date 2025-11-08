export default function Solution() {
  const sprints = [
    {
      title: 'Data Foundations Sprint',
      stage: '0→1 Stage',
      promise: 'Set your GTM and CRM foundation right from day one.',
      highlights: [
        'Define ICPs, deal stages, and CRM structure that scale.',
        'Build a clean pipeline and hygiene process around how you actually sell.',
        'Connect early demo and deal data to messaging and channels that work.'
      ],
      outcome: 'You\'ll have a structured GTM system ready for growth — no rebuilds later.',
      proof: 'Used this playbook at Freshworks and Zluri to build scalable GTM systems before RevOps existed.'
    },
    {
      title: 'Board-Ready Insights Sprint',
      stage: '1→10 Stage',
      promise: 'Turn messy CRM data into investor-ready clarity.',
      highlights: [
        'Audit and clean your GTM stack for funnel visibility.',
        'Standardize metrics, lead sources, and pipeline definitions.',
        'Build the reporting layer RevOps would — before you hire one.'
      ],
      outcome: 'You\'ll know what drives revenue and what\'s leaking — before the next board review.',
      proof: 'I\'ve seen Series A teams lose months fixing bad data — this sprint prevents it.'
    }
  ];

  return (
    <section id="solution" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 pb-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-4">
          Two focused sprints.
        </h2>

        <p className="text-lg md:text-xl text-gray-600 text-center mx-auto mb-12 md:mb-16 leading-relaxed">
          Different stages, same outcome — clean GTM systems and confidence in your data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 w-full px-0 md:px-4">
          {sprints.map((sprint, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#FF7A00] mb-2">{sprint.stage}</p>
                <h3 className="text-2xl font-bold text-[#1F1F1F]">
                  {sprint.title}
                </h3>
              </div>

              <p className="text-lg font-semibold text-[#1F1F1F] mb-4">
                {sprint.promise}
              </p>

              <ul className="space-y-3 mb-6">
                {sprint.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FF7A00] mt-1 text-lg">•</span>
                    <span className="text-base text-gray-700 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Outcome</p>
                  <p className="text-base text-gray-700 leading-relaxed">{sprint.outcome}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Proof</p>
                  <p className="text-base text-gray-700 leading-relaxed">{sprint.proof}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0D1B2A] text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto text-center w-full px-4 md:px-0 mb-12">
          <p className="text-base md:text-lg mb-4 leading-relaxed font-medium">
            Flat, transparent pricing.
          </p>
          <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed">
            Each engagement runs for one month — no retainers, no fluff, just clarity that scales.
          </p>

          <p className="text-2xl md:text-3xl font-bold mb-8 text-[#FF7A00]">
            Sprint starts at $350 USD.
          </p>

          <button
            onClick={() => window.open('https://calendar.app.google/HXsmD9MhuU6LEXUM7', '_blank')}
            className="bg-[#FF7A00] text-white px-8 md:px-12 py-3 md:py-4 rounded-[20px] text-base md:text-lg font-semibold hover:bg-[#FF8C1A] hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Let's work together
          </button>
        </div>
      </div>
    </section>
  );
}
