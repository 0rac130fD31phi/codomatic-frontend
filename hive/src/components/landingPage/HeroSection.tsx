import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-black opacity-50"></div>
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Autonomous Digital <span className="text-teal-400">Entities</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Build, deploy, and scale AI-driven systems without writing code.
        </p>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-lg"
          >
            Try Demo
          </motion.button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;