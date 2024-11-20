import React from "react";
import { Bot, Terminal, Code } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-12 h-12 text-teal-400" />,
    title: "No-Code Orchestration",
    description: "Deploy AI systems without technical barriers.",
  },
  {
    icon: <Terminal className="w-12 h-12 text-teal-400" />,
    title: "Autonomous Scaling",
    description: "Let your ideas evolve and scale independently.",
  },
  {
    icon: <Code className="w-12 h-12 text-teal-400" />,
    title: "Parallel Execution",
    description: "Run multiple AI agents for faster innovation.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-white font-bold mb-12 text-center">
          Why Choose Haive?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all"
            >
              <div>{feature.icon}</div>
              <h3 className="text-xl text-white font-bold mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
