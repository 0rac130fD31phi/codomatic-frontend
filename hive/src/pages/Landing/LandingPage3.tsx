
// pages/LandingPage.tsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useFont } from '../../contexts/FontContext';
import { HeroSection } from '../../components/landingPage/sections/HeroSection';
import { FeaturesSection } from '../../components/landingPage/sections/FeatureSection';
import { HowItWorksSection } from '../../components/landingPage/sections/HowItWorksSection';
import { UseCasesSection } from '../../components/landingPage/sections/UseCases';
//import { PricingSection } from '../../components/landingPage/sections/Pricing';
import { FAQSection } from '../../components/landingPage/sections/FAQSection';
import { CTASection } from '../../components/landingPage/sections/CTASection';

export const LandingPage: React.FC = () => {
  const { theme } = useTheme();
  const { settings } = useFont();

  return (
    <div className={`min-h-screen ${theme.bgPrimary}`}>
     

      {/* Main Content */}
      <main>
        <HeroSection />
         {/* How It Works Section */}
         <section className={`py-32 ${theme.bgPrimary}`}>
          <div className="max-w-7xl mx-auto px-6">
            <HowItWorksSection />
          </div>
        </section>

        {/* Features Section */}
        <section 
          className={`
            relative py-32
            ${theme.surfaces.secondary}
            border-t ${theme.border.color}
          `}
        >
          <div className="max-w-7xl mx-auto px-6">
            <FeaturesSection />
          </div>
        </section>

       
        {/* Use Cases Section */}
        <section 
          className={`
            py-32
            ${theme.surfaces.secondary}
            border-y ${theme.border.color}
          `}
        >
          <div className="max-w-7xl mx-auto px-6">
            <UseCasesSection />
          </div>
        </section>

        {/* Pricing Section 
        <section className={`py-32 ${theme.bgPrimary}`}>
          <div className="max-w-7xl mx-auto px-6">
            <PricingSection />
          </div>
        </section>
        */}

        {/* FAQ Section */}
        <section 
          className={`
            py-32
            ${theme.surfaces.secondary}
            border-t ${theme.border.color}
          `}
        >
          <div className="max-w-3xl mx-auto px-6">
            <FAQSection />
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-32 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto px-6">
            <CTASection />
          </div>
        </section>
      </main>

      
    </div>
  );
};


// Would you like me to continue with the remaining sections:
// 1. CTA Section
// 2. FAQ Section
// 3. Footer
// 4. Additional interactive components?
