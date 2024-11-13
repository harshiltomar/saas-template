import { Check } from 'lucide-react';
import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    features: [
      '1 Active Bot',
      '1,000 Monthly Messages', 
      'Basic Bot Templates',
      'Standard Support',
      'Basic Analytics'
    ]
  },
  {
    name: 'Professional',
    price: '$29',
    features: [
      '5 Active Bots',
      '10,000 Monthly Messages',
      'Advanced Templates', 
      'Priority Support',
      'Advanced Analytics'
    ]
  },
  {
    name: 'Business',
    price: '$79',
    popular: true,
    features: [
      'Unlimited Active Bots',
      '100,000 Monthly Messages',
      'Custom Bot Development',
      '24/7 Premium Support',
      'AI-Powered Features'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom Bot Solutions',
      'Unlimited Messages',
      'Dedicated Account Manager',
      'SLA Guarantee',
      'Custom Integrations'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
            Choose the perfect plan for your bot-building needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <CardSpotlight 
              key={index}
              className={`group flex flex-col p-6 md:p-8 backdrop-blur-sm backdrop-saturate-150 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500/50 scale-105 shadow-lg shadow-blue-500/20' 
                  : 'hover:scale-[1.02] transition-transform duration-300'
              }`}
              color={plan.popular ? "rgba(29, 78, 216, 0.55)" : "rgba(59, 130, 246, 0.45)"}
            >
              <div className="flex-1">
                {plan.popular && (
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/20">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-8 flex items-baseline">
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-blue-200/60 ml-2">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-blue-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button 
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                      : 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}