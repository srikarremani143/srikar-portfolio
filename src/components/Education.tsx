"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/resume";
import { fadeInUp } from "@/lib/utils";

export default function Education() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--section-alt)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card rounded-2xl p-8 md:p-10 card-hover"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <GraduationCap size={32} className="text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                <span className="gradient-text">Education</span>
              </h2>
              <h3 className="text-xl font-bold mt-3">{education.degree}</h3>
              <p className="text-lg text-blue-500 font-semibold mt-1">
                {education.university}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} />
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} />
                  {education.location}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400">
                  GPA: {education.gpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
