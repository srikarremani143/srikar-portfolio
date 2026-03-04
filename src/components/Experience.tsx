"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/resume";
import { fadeInUp } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey building AI systems"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-12 last:mb-0 pl-12 md:pl-0 md:w-1/2 ${
                  isLeft
                    ? "md:pr-12 md:ml-0"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 timeline-dot ${
                    isLeft
                      ? "left-2.5 md:left-auto md:-right-2"
                      : "left-2.5 md:-left-2"
                  }`}
                />

                <div className="glass-card rounded-2xl p-6 card-hover">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-blue-500 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-[var(--muted)]"
                      >
                        <span className="text-blue-500 mt-1.5 shrink-0">
                          &#9656;
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
