"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/data/resume";
import { staggerContainer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

export default function Publications() {
  return (
    <section id="publications" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Publications"
          subtitle="Peer-reviewed research contributions"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.15, duration: 0.6 },
                },
              }}
              className="glass-card rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <FileText size={22} className="text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-bold leading-snug">
                      {pub.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="shrink-0 mt-1 text-[var(--muted)] group-hover:text-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-2 mb-3">
                    <span className="text-sm font-semibold text-blue-500">
                      {pub.venue}
                    </span>
                    <span className="text-xs text-[var(--muted)] px-2 py-0.5 rounded-full glass-card">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)]">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
