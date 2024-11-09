import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Code,
  Sparkles,
  Github,
  Zap,
  Timer,
  Lock,
  ArrowRight,
  CheckCircle,
  Terminal,
  Coffee,
  Server,
  Cpu,
} from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}
const BackgroundGradient: React.FC = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  </div>
);
const PricingCard: React.FC<{
  plan: {
    name: string;
    price: string;
    features: string[];
    highlighted?: boolean;
  };
}> = ({ plan }) => (
  <div
    className={`rounded-xl p-8 ${
      plan.highlighted
        ? 'bg-emerald-500 transform scale-105 shadow-xl shadow-emerald-500/20'
        : 'bg-gray-800/50 border border-gray-700 hover:border-emerald-500/20 transition-all'
    }`}
  >
    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
    <p className="text-3xl font-bold mb-6">{plan.price}</p>
    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <CheckCircle className="h-5 w-5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 px-4 rounded-lg transition-all transform hover:scale-105 ${
        plan.highlighted
          ? 'bg-white text-emerald-500 hover:bg-gray-100'
          : 'bg-emerald-500 hover:bg-emerald-600'
      }`}
    >
      Get Started
    </button>
  </div>
);

const FAQSection: React.FC = () => (
  <div className="py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-8">
        {[
          {
            q: "How does it compare to traditional development?",
            a: "Our platform accelerates development by 10x while maintaining high code quality and best practices."
          },
          {
            q: "Can I customize the generated code?",
            a: "Yes, you have full access to the source code and can modify it as needed."
          },
          {
            q: "What about security?",
            a: "Security best practices are built-in, and all code follows industry standards."
          }
        ].map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-8">
            <h3 className="text-xl font-semibold mb-4">{faq.q}</h3>
            <p className="text-gray-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const FinalCTA: React.FC<{
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}> = ({ email, setEmail, handleSubmit }) => (
  <div className="py-24 bg-gray-800/20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Start Creating?</h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Join thousands of developers who are already building faster with AI-powered development.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:border-emerald-500 transition-colors"
          required
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
        >
          Join <ChevronRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  </div>
);

const Navbar: React.FC = () => (
  <nav className="fixed w-full z-50 top-0 left-0 px-4 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <span className="text-2xl font-bold">haive</span>
      <div className="hidden md:flex gap-8 items-center">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#pricing">Pricing</a>
        <button className="bg-emerald-500 px-6 py-2 rounded-full">Get Started</button>
      </div>
    </div>
  </nav>
);

const LandingPage: React.FC = () => {
  const [demoText, setDemoText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showResponse, setShowResponse] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'api'>('web');

  const samplePrompt = "Build me a React dashboard with real-time data visualization";
  const responseSteps: string[] = [
    "Planning architecture...",
    "Configuring data streams...",
    "Generating components...",
    "Implementing real-time updates...",
    "Done! Preview your dashboard",
  ];

  useEffect(() => {
    if (isTyping && demoText.length < samplePrompt.length) {
      const timeout = setTimeout(() => {
        setDemoText(samplePrompt.slice(0, demoText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (demoText.length === samplePrompt.length) {
      setShowResponse(true);
    }
  }, [demoText, isTyping]);

  const startDemo = () => {
    setIsTyping(true);
    setDemoText('');
    setShowResponse(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const useCases: UseCase[] = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Build responsive websites and web apps with AI-powered assistance',
      icon: Terminal,
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      description: 'Create native mobile applications for iOS and Android',
      icon: Server,
    },
    {
      id: 'api',
      title: 'API Integration',
      description: 'Connect and automate services with intelligent API handling',
      icon: Coffee,
    },
  ];

  return (
      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundGradient />
        <Navbar />

      <div className="container mx-auto px-4">
        <div className="min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto">
          <div className="text-center mb-12 pt-20">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-emerald-400">Create,</span>
              <br />
              Don't Code
            </h1>
            <p className="text-xl text-gray-400">
              Transform your ideas into reality with AI-powered development
            </p>
          </div>

          <div className="w-full bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="font-mono">
              <p className="text-emerald-400">
                → {demoText}
                <span className="animate-pulse">|</span>
              </p>

              {showResponse && (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Analyzing requirements...</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Cpu className="w-4 h-4" />
                    <span>Generating solution...</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Ready to deploy!</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full font-medium">
              Start Building
            </button>
            <button className="border border-gray-700 hover:border-emerald-500 px-8 py-3 rounded-full font-medium">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-800/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Terminal className="h-8 w-8" />,
                title: "Describe Your Need",
                description: "Tell us what you want to build in plain English",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "AI Planning",
                description: "Our AI breaks down the task and plans the implementation",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Generate & Deploy",
                description: "Get production-ready code and instant deployment",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6 text-emerald-400">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What You Can Build</h2>
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-700 p-1">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeTab === useCase.id
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(useCase.id)}
                >
                  {useCase.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {useCases.find((uc) => uc.id === activeTab)?.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {useCases.find((uc) => uc.id === activeTab)?.description}
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic responsive design",
                  "Built-in security best practices",
                  "Scalable architecture",
                  "Testing included",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="aspect-video bg-gray-900 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            {/* Additional footer content */}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
