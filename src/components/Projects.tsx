"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/resume";
import { staggerContainer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-[var(--section-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Enterprise-grade AI solutions I've built"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold leading-tight pr-2">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="shrink-0 text-[var(--muted)] group-hover:text-blue-500 transition-colors mt-1"
                  />
                </div>

                <p className="text-sm text-[var(--muted)] mb-4 line-clamp-3">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-xs text-[var(--muted)]"
                    >
                      <span className="text-blue-500 mt-0.5 shrink-0">
                        &#10003;
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
