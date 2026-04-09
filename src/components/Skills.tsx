"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Brain,
  BarChart3,
  Layers,
  Cloud,
  Sparkles,
  Server,
} from "lucide-react";
import { skills } from "@/data/resume";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  brain: Brain,
  "bar-chart": BarChart3,
  layers: Layers,
  cloud: Cloud,
  sparkles: Sparkles,
  server: Server,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const activeSkills = skills.find((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with daily"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skills.map(({ category, icon }) => {
            const Icon = iconMap[icon] || Code2;
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "glass-card text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                <Icon size={16} />
                {category}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeSkills && (
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {activeSkills.skills.map(({ name }, i) => (
                <motion.span
                  key={name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { delay: i * 0.05, duration: 0.4 },
                    },
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2.5 rounded-xl glass-card font-medium text-sm cursor-default gradient-border hover:shadow-lg hover:shadow-blue-500/10 transition-shadow"
                >
                  {name}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
