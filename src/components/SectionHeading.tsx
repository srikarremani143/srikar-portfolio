"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
