import { useState, useEffect } from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

export default function Solution() {
  useEffect(() => {}, []);
  const levers = [
    {
      icon: TrendingUp,
      title: 'Revenue Levers',
      questions: [
        'How do customers expand?',
        'Why do customers churn?',
        'How are opportunities concentrated?'
      ]
    },
    {
      icon: Target,
      title: 'Conversion Levers',
      questions: [
        'Which channels truly work?',
        "What's my real conversion rate?",
        'Where is user friction hiding?'
      ]
    },
    {
      icon: Users,
      title: 'Sales Efficiency Levers',
      questions: [
        'How AI-ready is my CRM?',
        "What's our win rate?",
        'How do reps perform?'
      ]
    }
  ];

  return (
    <section id="solution" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-20 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-8">
          Get clarity in two weeks.
        </h2>

        <p className="text-lg md:text-xl text-gray-600 text-center mx-auto mb-16 leading-relaxed">
  In two weeks, I'll map your GTM and product metrics to pinpoint what's working, what's not, and why.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {levers.map((lever, index) => {
            const Icon = lever.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#FF7A00] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">
                  {lever.title}
                </h3>

                <ul className="space-y-4">
                  {lever.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start gap-3">
                      <span className="text-[#FF7A00] mt-1 text-lg">•</span>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0D1B2A] text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto text-center w-full px-4">
          <p className="text-s md:text-base mb-3 leading-relaxed">
            You'll get a pointed, data-backed insight pack on what's working, why it's working, and where to focus next.
          </p>

          <p className="text-lg md:text-xl font-bold mb-4 text-[#FF7A00]">
            Engagement starts at $350.
          </p>

          <button
            onClick={() => window.open('https://calendar.app.google/HXsmD9MhuU6LEXUM7', '_blank')}
            className="bg-[#FF7A00] text-white px-8 py-4 rounded-[20px] text-base md:text-lg font-semibold hover:bg-[#FF8C1A] hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Let's work together
          </button>
        </div>
      </div>
    </section>
  );
}
