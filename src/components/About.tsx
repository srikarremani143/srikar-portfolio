"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen, Award, FileText } from "lucide-react";
import { summary } from "@/data/resume";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: BookOpen, value: "6+", label: "Major Projects" },
  { icon: FileText, value: "2", label: "Publications" },
  { icon: Award, value: "M.S.", label: "Robotics & AI" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building AI systems that solve real-world problems"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              {summary}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card rounded-2xl p-6 text-center card-hover"
              >
                <Icon size={28} className="mx-auto mb-3 text-blue-500" />
                <p className="text-2xl font-bold gradient-text">{value}</p>
                <p className="text-sm text-[var(--muted)] mt-1">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
