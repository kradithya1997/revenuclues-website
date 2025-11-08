import { AlertCircle, TrendingDown } from 'lucide-react';

export default function Pain() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Foundation Chaos',
      stage: '0→1 Stage',
      points: [
        'When chasing your first 20 customers, GTM setup takes a backseat.',
        'CRM fields go missing, data lives in spreadsheets, and deals depend on founder memory.',
        'By Series A, most startups rebuild their CRM from scratch — because they didn\'t structure it early.',
        '→ You can\'t scale what isn\'t structured.'
      ]
    },
    {
      icon: TrendingDown,
      title: 'Scaling Blind',
      stage: '1→10 Stage',
      points: [
        'Revenue grows, but clarity doesn\'t.',
        'No one knows which channels or segments actually drive deals.',
        'Investors ask, "What\'s your CAC or churn trend?" — and there\'s no data to answer.',
        '→ Momentum without visibility is a slowdown waiting to happen.'
      ]
    }
  ];

  return (
    <section id="pain" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-16">
          Where early GTM breaks — and how it costs you time, deals, and investor trust.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F8F8] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#FF7A00] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#FF7A00]">{point.stage}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">
                  {point.title}
                </h3>
                <ul className="space-y-4">
                  {point.points.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#FF7A00] mt-1 text-lg">•</span>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}