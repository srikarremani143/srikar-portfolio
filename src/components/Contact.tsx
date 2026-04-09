"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Globe } from "lucide-react";
import { personalInfo } from "@/data/resume";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: personalInfo.socials.github },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.socials.linkedin },
  ...(personalInfo.socials.portfolio
    ? [{ icon: Globe, label: "Portfolio", href: personalInfo.socials.portfolio }]
    : []),
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--section-alt)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in collaborating or have a question? Let's connect."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {contactMethods.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-4 p-5 glass-card rounded-2xl card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                  <Icon size={22} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wider font-medium">
                    {label}
                  </p>
                  <p className="font-semibold">{value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3 pt-4"
            >
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass-card rounded-xl card-hover text-sm font-medium text-[var(--muted)] hover:text-blue-500 transition-colors"
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <form
              action={`mailto:${personalInfo.email}`}
              method="POST"
              encType="text/plain"
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
