"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, ExternalLink } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { staggerContainer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section id="blog" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Learning & Insights"
          subtitle="Exploring new technologies and sharing what I learn"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "glass-card text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--muted)] mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs text-[var(--muted)] bg-[var(--card)]"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {post.date && (
                  <p className="text-xs text-[var(--muted)]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                )}

                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 mt-2"
                >
                  Read on LinkedIn
                  <ExternalLink size={12} />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
