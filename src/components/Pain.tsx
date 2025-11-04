import { Eye, TrendingDown, AlertTriangle } from 'lucide-react';

export default function Pain() {
  const painPoints = [
    {
      icon: Eye,
      title: 'Broken Visibility',
      points: [
        "Leaders rely on intuition because dashboards don't align.",
        'Metrics exist — but insights are scattered across tools and teams.'
      ]
    },
    {
      icon: TrendingDown,
      title: 'False Signals',
      points: [
        'Product and pricing decisions are made without seeing real conversion impact.',
        'More reporting ≠ more clarity — it often hides what actually moves revenue.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Reactive Decisions',
      points: [
        'Root causes are buried — churn patterns, rep hygiene, or data gaps.',
        "Teams end up reacting instead of predicting where growth will break next."
      ]
    }
  ];

  return (
    <section id="pain" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-16">
          What Slows Founders Down
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F8F8] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#FF7A00] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
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
        <p className="text-xl md:text-2xl font-bold text-[#FF7A00] text-center">
          These aren't data issues — they're clarity issues.
        </p>
      </div>
    </section>
  );
}