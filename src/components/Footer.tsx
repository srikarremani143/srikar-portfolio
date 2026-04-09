"use client";

import { Github, Linkedin, Mail, ArrowUp, Globe } from "lucide-react";
import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text mb-1">SR.</p>
            <p className="text-sm text-[var(--muted)]">
              Building the future with AI, one model at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass-card hover:scale-110 transition-transform text-[var(--muted)] hover:text-blue-500"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass-card hover:scale-110 transition-transform text-[var(--muted)] hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            {personalInfo.socials.portfolio ? (
              <a
                href={personalInfo.socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-card hover:scale-110 transition-transform text-[var(--muted)] hover:text-blue-500"
                aria-label="Portfolio"
              >
                <Globe size={18} />
              </a>
            ) : null}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg glass-card hover:scale-110 transition-transform text-[var(--muted)] hover:text-blue-500"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2.5 rounded-lg glass-card hover:scale-110 transition-transform text-[var(--muted)] hover:text-blue-500"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--card-border)] text-center">
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
