import React, { useState } from 'react';
import { Twitter, Circle, Instagram, Linkedin } from 'lucide-react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4';

const SERVICES = [
  'Website',
  'Mobile App',
  'Web App',
  'E-Commerce',
  'Visual Identity',
  '3D & Motion',
  'Digital Marketing',
  'Growth & Consulting',
  'Other',
] as const;

interface SocialBtnProps {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  colorClass: string;
  href: string;
  label: string;
}

function SocialBtn({ id, icon: Icon, colorClass, href, label }: SocialBtnProps) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-8 h-8 rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity ${colorClass}`}
    >
      <Icon size={14} />
    </a>
  );
}

export default function App() {
  const [selected, setSelected] = useState<string[]>(['Website']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setName('');
    setEmail('');
    setMessage('');
    setSelected(['Website']);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      id="landing-root"
      className="min-h-screen bg-white p-4 sm:p-6 flex flex-col justify-center lg:h-screen lg:overflow-hidden"
    >
      {/* Outer Main Card with immersive depth */}
      <div
        id="landing-card"
        className="relative w-full rounded-[24px] overflow-hidden min-h-[calc(100vh-32px)] sm:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)] bg-black shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col"
      >
        {/* Full-bleed background video with cinematic opacity */}
        <video
          id="background-video"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div
          id="content-layer"
          className="relative z-10 flex flex-col min-h-[calc(100vh-32px)] sm:min-h-[calc(100vh-48px)] lg:h-full p-6 sm:p-8 gap-6 justify-between"
        >
          {/* Top Pill Navbar */}
          <header id="top-navbar" className="w-full flex items-center">
            <div
              id="navbar-pill"
              className="bg-white/60 backdrop-blur-[12px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] pl-4 pr-2 py-2 w-full sm:w-fit flex items-center gap-4 sm:gap-6"
            >
              {/* Logo */}
              <div id="brand-logo" className="flex items-center shrink-0 cursor-pointer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                  className="w-8 h-8 shrink-0"
                  aria-label="Forma Logo"
                >
                  <path
                    d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z"
                    fill="black"
                  />
                </svg>
              </div>

              {/* Navigation links (hidden on mobile, shown on sm+) */}
              <nav
                id="desktop-nav-links"
                className="hidden sm:flex items-center gap-6"
                aria-label="Main Navigation"
              >
                <a
                  id="nav-link-story"
                  href="#story"
                  className="text-[#1f2937] text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  Our story
                </a>
                <a
                  id="nav-link-expertise"
                  href="#expertise"
                  className="text-[#1f2937] text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  Expertise
                </a>
                <a
                  id="nav-link-work"
                  href="#work"
                  className="text-[#1f2937] text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  Our work
                </a>
                <a
                  id="nav-link-journal"
                  href="#journal"
                  className="text-[#1f2937] text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  Journal
                </a>
              </nav>

              {/* CTA button */}
              <button
                id="cta-start-project"
                type="button"
                onClick={scrollToContact}
                className="bg-black text-white text-sm font-medium px-5 py-2 rounded-xl hover:bg-[#374151] transition-colors ml-auto sm:ml-0 whitespace-nowrap cursor-pointer"
              >
                Start a project
              </button>
            </div>
          </header>

          {/* Spacer */}
          <div className="flex-1 min-h-[32px]" />

          {/* Bottom Row: Headline (left) + Contact Form Card (right) */}
          <div
            id="bottom-section"
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            {/* Left Headline with cinematic drop-shadow and refined typography */}
            <p
              id="hero-headline"
              className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-[1.15] text-white max-w-[540px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] shrink-0"
            >
              We craft bold ideas
              <br />
              and ship them as{' '}
              <span
                className="accent-word"
                style={{
                  fontFamily: "var(--f-serif)",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                products
              </span>
            </p>

            {/* Right Contact Form Card */}
            <div id="contact-wrapper" className="w-full lg:w-[440px] shrink-0">
              <div
                id="contact-card"
                className="bg-white rounded-[24px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-6 flex flex-col gap-4"
              >
                {/* 1. Heading */}
                <h2
                  id="contact-heading"
                  className="text-xl font-bold text-black tracking-tight"
                >
                  Say hello! 👋
                </h2>

                {/* 2. Email + socials row */}
                <div
                  id="contact-social-row"
                  className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                      Drop us a line
                    </span>
                    <a
                      id="contact-email-link"
                      href="mailto:hello@forma.co"
                      className="text-blue-600 font-bold text-sm hover:underline truncate"
                    >
                      hello@forma.co
                    </a>
                  </div>

                  <div id="social-buttons" className="flex items-center gap-1.5 shrink-0">
                    <SocialBtn
                      id="social-btn-twitter"
                      icon={Twitter}
                      colorClass="bg-gray-100 text-gray-800"
                      href="https://twitter.com"
                      label="Twitter"
                    />
                    <SocialBtn
                      id="social-btn-circle"
                      icon={Circle}
                      colorClass="bg-pink-100 text-pink-500"
                      href="https://dribbble.com"
                      label="Circle"
                    />
                    <SocialBtn
                      id="social-btn-instagram"
                      icon={Instagram}
                      colorClass="bg-orange-100 text-orange-400"
                      href="https://instagram.com"
                      label="Instagram"
                    />
                    <SocialBtn
                      id="social-btn-linkedin"
                      icon={Linkedin}
                      colorClass="bg-blue-100 text-blue-600"
                      href="https://linkedin.com"
                      label="LinkedIn"
                    />
                  </div>
                </div>

                {/* 3. OR divider */}
                <div id="or-divider" className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 text-[10px] font-bold tracking-wider">OR</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* 4. Form or 5. Success State */}
                {sent ? (
                  <div
                    id="contact-success-state"
                    className="flex flex-col items-center justify-center text-center py-6 gap-3"
                  >
                    <div
                      id="success-checkmark"
                      className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600"
                    >
                      ✓
                    </div>
                    <h3
                      id="success-heading"
                      className="text-base font-semibold text-gray-900"
                    >
                      You're all set!
                    </h3>
                    <p id="success-subtext" className="text-sm text-gray-500">
                      Expect a reply within 24 hours.
                    </p>
                    <button
                      id="reset-form-btn"
                      type="button"
                      onClick={handleReset}
                      className="mt-2 text-xs font-medium text-gray-500 hover:text-black underline transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-bold text-black block mb-2"
                      >
                        Tell us about your vision
                      </label>

                      {/* Name + Email inputs side by side */}
                      <div className="flex flex-col sm:flex-row gap-2 mb-2">
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm outline-none transition-all placeholder-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                        />
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm outline-none transition-all placeholder-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                        />
                      </div>

                      {/* Textarea */}
                      <textarea
                        id="contact-message"
                        rows={3}
                        required
                        placeholder="What are you looking to build or improve..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="h-20 resize-none w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm outline-none transition-all placeholder-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                      />
                    </div>

                    {/* Service tags */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-gray-700 mb-2">
                        I need help with...
                      </p>
                      <div id="service-tags-container" className="flex flex-wrap gap-1.5">
                        {SERVICES.map((service, index) => {
                          const isSelected = selected.includes(service);
                          return (
                            <button
                              key={service}
                              id={`service-tag-${index}`}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-gray-100 border-gray-900 text-black'
                                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={sending}
                      className="bg-black text-white w-full py-3 rounded-xl font-semibold text-sm hover:bg-[#374151] transition-colors mt-1 cursor-pointer disabled:opacity-60"
                    >
                      {sending ? 'Sending...' : 'Send my message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
