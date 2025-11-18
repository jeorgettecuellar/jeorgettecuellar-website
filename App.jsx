import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTION_IDS = [
  "about",
  "offerings",
  "education",
  "portfolio",
  "speaking",
  "teaching",
  "advocacy",
  "international",
  "contact",
];

// Using your 14 public photos
const photoHighlights = [
  { src: "/photo1.jpg", alt: "Photo 1", caption: "Community impact and collaboration." },
  { src: "/photo2.jpg", alt: "Photo 2", caption: "Celebrating youth empowerment." },
  { src: "/photo3.jpg", alt: "Photo 3", caption: "Building opportunities for students." },
  { src: "/photo4.jpg", alt: "Photo 4", caption: "Speaking with local leaders." },
  { src: "/photo5.jpg", alt: "Photo 5", caption: "Program mentorship and support." },
  { src: "/photo6.jpg", alt: "Photo 6", caption: "Work with youth and advocates." },
  { src: "/photo7.jpg", alt: "Photo 7", caption: "Community outreach moments." },
  { src: "/photo8.jpg", alt: "Photo 8", caption: "Educational support programs." },
  { src: "/photo9.jpg", alt: "Photo 9", caption: "Celebrating milestones together." },
  { src: "/photo10.jpg", alt: "Photo 10", caption: "Team collaboration and events." },
  { src: "/photo11.jpg", alt: "Photo 11", caption: "International educational exchange." },
  { src: "/photo12.jpg", alt: "Photo 12", caption: "Community-centered work abroad." },
  { src: "/photo13.jpg", alt: "Photo 13", caption: "Partnership building and growth." },
  { src: "/photo14.jpg", alt: "Photo 14", caption: "Empowering education initiatives." },
];

export default function JeorgetteWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [lightboxItem, setLightboxItem] = useState(null);

  // scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinkClasses = (id) =>
    [
      "relative text-xs tracking-wide uppercase",
      "cursor-pointer transition-colors",
      activeSection === id
        ? "text-indigo-800"
        : "text-slate-600 hover:text-slate-900",
    ].join(" ");

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900 antialiased"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      {/* TOP BAR / NAV */}
      <motion.header
        className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-40"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="rounded-full w-10 h-10 bg-gradient-to-br from-indigo-600 to-rose-500 flex items-center justify-center text-white font-semibold text-sm">
              JC
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">
                Jeorgette Cuellar{" "}
                <span className="text-[11px] font-normal ml-1 text-slate-500">
                  (she/her)
                </span>
              </p>
              <p className="text-[11px] text-slate-500">
                Sociologist • Educator • Advocate for displaced youth
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {["about", "offerings", "education", "portfolio", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={navLinkClasses(id)}
                >
                  <span>{id}</span>
                  {activeSection === id && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-indigo-600" />
                  )}
                </button>
              )
            )}
          </nav>

          {/* CTA in header */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex items-center rounded-full border border-indigo-600 px-4 py-1.5 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-50 transition"
          >
            Book Jeorgette
          </button>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        {/* HERO / ABOUT */}
        <section
          id="about"
          className="grid lg:grid-cols-[1.6fr,1.1fr] gap-10 items-start"
        >
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-amber-700 mb-3">
              Teaching people to build lives they want
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl md:text-[2.6rem] leading-tight md:leading-[1.1] font-extrabold text-slate-900"
            >
              From survival mode
              <br />
              to sustainable, thriving lives.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-5 text-[15px] leading-relaxed text-slate-700 max-w-xl"
            >
              I partner with displaced youth, system-impacted people, and the
              organizations that serve them to build practical structures for
              stability—academically, emotionally, and in community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-700 text-white px-6 py-2.5 text-xs font-semibold shadow-sm hover:bg-indigo-800 transition"
              >
                Book a conversation
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[11px] font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                View speaking & programs
              </button>
            </motion.div>

            <div className="mt-5 text-[11px] text-slate-600 space-y-1">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:c.jorgette@yahoo.com"
                  className="underline underline-offset-2"
                >
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Based in:</span> Los Angeles,
                California
              </p>
            </div>

            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
              >
                Download résumé (PDF)
              </a>
            </div>
          </div>

          {/* Hero side card */}
          <motion.aside
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="bg-white/90 border border-slate-200 rounded-3xl shadow-sm p-6 space-y-5"
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500">
              Snapshot
            </p>
            <ul className="space-y-3 text-[13px] leading-relaxed text-slate-800">
              <li>
                Advocate for displaced youth, including those experiencing
                homelessness and foster care transitions.
              </li>
              <li>
                Educator working at the intersection of incarceration,
                rehabilitation, and higher education.
              </li>
              <li>
                Speaker and curriculum designer focused on systems-level change
                grounded in lived experience.
              </li>
            </ul>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500">
                Core strengths
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Student activism",
                  "Curriculum design",
                  "Story-driven keynotes",
                  "Community partnerships",
                  "Workshop facilitation",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-[11px] text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        {/* OFFERINGS */}
        <section id="offerings" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Ways we can work together
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-700 max-w-xl">
                Programming and partnerships designed for schools, nonprofits,
                and agencies supporting youth and system-impacted communities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Keynotes & Story-driven Talks",
                body:
                  "Audience-centered talks connecting lived experience, research, and concrete next steps.",
              },
              {
                title: "Workshops & Curriculum",
                body:
                  "Modular sessions on resilience, re-entry, academic planning, and navigating social services.",
              },
              {
                title: "Advising & Partnerships",
                body:
                  "Thought partnership for program design, policy initiatives, and cross-institution collaborations.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] text-slate-700 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.16em] uppercase text-slate-500">
                UCLA
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                B.A. Sociology • 2023–2025
              </h3>
              <p className="mt-1 text-[12px] text-slate-700">
                Leadership Academy Cohort • Underground Scholars Policy
                Fellowship.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.16em] uppercase text-slate-500">
                Barstow Community College
              </p>
              <h3 className="mt-1 text-sm font-semibold">
                A.A. English • 2020–2022
              </h3>
              <p className="mt-1 text-[12px] text-slate-700">
                Summa Cum Laude • All California Academic Awardee • Commencement
                Speaker.
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO HUB */}
        <section id="portfolio" className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Portfolio highlights
          </h2>
          <p className="text-xs md:text-sm text-slate-700 max-w-xl">
            Speaking, teaching, advocacy, and international work that connect
            personal narrative with structural change.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                id: "speaking",
                title: "Speaking & Media",
                body:
                  "Keynotes, panels, and media features centering youth, re-entry, and education.",
              },
              {
                id: "teaching",
                title: "Teaching & Curriculum",
                body:
                  "Classroom and community-based instruction for youth and adults across contexts.",
              },
              {
                id: "advocacy",
                title: "Advocacy & Policy Work",
                body:
                  "Partnerships with nonprofits and agencies to move policy and practice.",
              },
              {
                id: "international",
                title: "International Work",
                body:
                  "Delegations and exchanges exploring correctional education abroad.",
              },
            ].map((card) => (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] text-slate-700 leading-relaxed">
                  {card.body}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* SPEAKING SECTION WITH VIDEOS */}
        <section id="speaking" className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Speaking & media
          </h2>
          <p className="text-xs md:text-sm text-slate-700 max-w-xl">
            Story-driven talks connecting personal experience, research, and
            practical frameworks for audiences of students, practitioners, and
            leaders.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-sm text-slate-900">
                Featured testimonial film
              </h3>
              <div className="mt-3 aspect-video rounded-xl overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nDHfURsqDWs"
                  title="Testimonial video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-sm text-slate-900">
                Commencement address
              </h3>
              <div className="mt-3 aspect-video rounded-xl overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TFAbGh3ZhkY"
                  title="Commencement speech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* TEACHING */}
        <section id="teaching" className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Teaching & curriculum
          </h2>
          <p className="text-xs md:text-sm text-slate-700 max-w-xl">
            Curriculum and instruction across correctional facilities,
            community-based programs, and campus-based initiatives.
          </p>
        </section>

        {/* ADVOCACY */}
        <section id="advocacy" className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Advocacy & policy work
          </h2>
          <p className="text-xs md:text-sm text-slate-700 max-w-xl">
            Legislative and organizational advocacy shaped by lived experience
            and grounded in coalition work.
          </p>
        </section>

        {/* INTERNATIONAL */}
        <section id="international" className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            International work
          </h2>
          <p className="text-xs md:text-sm text-slate-700 max-w-xl">
            Global delegations exploring decarceration, education, and
            rehabilitation in international correctional systems.
          </p>
        </section>

        {/* PHOTO HIGHLIGHTS */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Photo highlights
          </h2>
          <p className="text-xs md:text-sm text-slate-700 max-w-xl">
            Glimpses into the rooms, communities, and collaborations that shape
            my work.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photoHighlights.map((item, index) => (
              <figure
                key={index}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:-translate-y-[3px] hover:shadow-md transition"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <figcaption className="p-3 text-[11px] text-slate-800">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-7"
        >
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Let&apos;s talk about your community.
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-700 max-w-md">
                Share a bit about your audience, your goals, and the kind of
                transformation you&apos;re working toward. I&apos;ll follow up
                with possibilities for talks, workshops, or longer-term
                partnership.
              </p>

              <div className="mt-5 text-[11px] text-slate-700 space-y-1">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:c.jorgette@yahoo.com"
                    className="underline underline-offset-2"
                  >
                    c.jorgette@yahoo.com
                  </a>
                </p>
                <p>Location: Los Angeles, California, United States</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <h3 className="font-semibold text-sm text-slate-900">
                Quick inquiry
              </h3>
              <form className="mt-3 grid gap-3">
                <input
                  className="border border-slate-300 rounded-md px-3 py-2 text-xs"
                  placeholder="Your name"
                />
                <input
                  className="border border-slate-300 rounded-md px-3 py-2 text-xs"
                  placeholder="Email"
                />
                <textarea
                  className="border border-slate-300 rounded-md px-3 py-2 text-xs"
                  rows={4}
                  placeholder="How can I help?"
                />
                <button
                  type="button"
                  className="mt-1 inline-flex justify-center rounded-full bg-indigo-700 px-4 py-2 text-[11px] font-semibold text-white hover:bg-indigo-800 transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {lightboxItem && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                />
              </div>
              <div className="p-4 flex items-start justify-between gap-4">
                <p className="text-sm text-slate-900">{lightboxItem.caption}</p>
                <button
                  type="button"
                  className="text-[11px] px-3 py-1 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
                  onClick={() => setLightboxItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="pt-6 mt-4 border-t border-slate-200 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Jeorgette Cuellar &middot; Built with
          care.
        </footer>
      </main>
    </div>
  );
}
