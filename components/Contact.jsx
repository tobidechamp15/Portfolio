"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { profile, links } from "@/data/portfolio";

const initialForm = { name: "", email: "", message: "" };

const contactRows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "Oluwatobiloba Oluwadare", href: links.linkedin },
  { label: "GitHub", value: "tobidechamp15", href: links.github },
];

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleChange = (e) => {
    if (status !== "sending") setStatus("idle");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setFormData(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section border-t border-white/[0.08]">
      <div className="container-x">
        <Reveal>
          <p className="label">Contact</p>
          <h2 className="section-title mt-3 max-w-[560px]">Get in touch</h2>
          <p className="lead mt-4 max-w-[36rem]">
            Send a message about a role or a project and I will reply within a day or two.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <Reveal>
            <div className="card px-6 py-2">
              {contactRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block py-4 border-t border-white/[0.08] first:border-t-0 group"
                >
                  <span className="label">{row.label}</span>
                  <span className="block mt-1 text-[15px] text-ink-text break-all group-hover:text-accent transition-colors duration-150">
                    {row.value}
                  </span>
                </a>
              ))}
            </div>
            <button type="button" onClick={copyEmail} className="btn btn-secondary btn-sm mt-4" aria-live="polite">
              {copied ? "Email copied" : "Copy email address"}
            </button>
          </Reveal>

          <Reveal delay={0.06}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink-text2 mb-2">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-text2 mb-2">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-text2 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="The role or project" className="resize-y" />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "sending" ? "Sending" : "Send message"}
                </button>
                <p role="status" aria-live="polite" className="text-sm">
                  {status === "sent" && <span className="text-[#4cc38a]">Message sent, thank you</span>}
                  {status === "error" && (
                    <span className="text-[#e5484d]">Could not send. Please email {profile.email} instead</span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
