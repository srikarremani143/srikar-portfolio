"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/resume";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-md opacity-75 animate-pulse-glow" />
            <Image
              src={personalInfo.image}
              alt={personalInfo.name}
              width={160}
              height={160}
              className="relative rounded-full object-cover border-2 border-white/20"
              priority
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-blue-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 mb-4 tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--muted)] mb-6"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-4"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={fadeInUp} className="mb-10">
          {personalInfo.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {cert}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            View Projects
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.resume}
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold glass-card gradient-border hover:-translate-y-0.5 transition-transform"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
            ...(personalInfo.socials.portfolio
              ? [
                  {
                    icon: Globe,
                    href: personalInfo.socials.portfolio,
                    label: "Portfolio",
                  },
                ]
              : []),
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-3 rounded-xl glass-card hover:scale-110 transition-all text-[var(--muted)] hover:text-blue-500"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-[var(--muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
