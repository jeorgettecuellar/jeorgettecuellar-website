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
  "gallery",
  "contact",
];

const photoHighlights = [
  { src: "/photo1.jpg", alt: "Photo 1", caption: "Speaking with community partners and supporters." },
  { src: "/photo2.jpg", alt: "Photo 2", caption: "Celebrating youth leadership and accomplishment." },
  { src: "/photo3.jpg", alt: "Photo 3", caption: "Gathering with students and mentors after a workshop." },
  { src: "/photo4.jpg", alt: "Photo 4", caption: "Community event focused on uplifting families." },
  { src: "/photo5.jpg", alt: "Photo 5", caption: "Sharing lived experience in a recorded conversation." },
  { src: "/photo6.jpg", alt: "Photo 6", caption: "Marking milestones with the young people I serve." },
  { src: "/photo7.jpg", alt: "Photo 7", caption: "Connection and celebration at a donor event." },
  { src: "/photo8.jpg", alt: "Photo 8", caption: "Building relationships that expand opportunity." },
  { src: "/photo9.jpg", alt: "Photo 9", caption: "International collaboration around justice and education." },
  { src: "/photo10.jpg", alt: "Photo 10", caption: "Learning from systems abroad focused on rehabilitation." },
  { src: "/photo11.jpg", alt: "Photo 11", caption: "Global classroom moments with educators and students." },
  { src: "/photo12.jpg", alt: "Photo 12", caption: "Partnering with community organizations overseas." },
  { src: "/photo13.jpg", alt: "Photo 13", caption: "Strengthening international networks for change." },
  { src: "/photo14.jpg", alt: "Photo 14", caption: "Honoring shared work toward transformation." },
];

export default function JeorgetteWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [lightboxItem, setLightboxItem] = useState(null);

  // Scroll spy
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id && SECTION_IDS.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

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
    `relative cursor-pointer text-[11px] tracking-wide uppercase ${
      activeSection === id
        ? "text-indigo-700 font-semibold"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900 antialiased"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      {/* TOP BAR */}
      <motion.header
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-600 to-rose-500 flex items-center justify-center text-white text-xs font-semibold">
              JC
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold tracking-wide">
                Jeorgette Cuellar{" "}
                <span className="text-[10px] font-normal text-slate-500">
                  (she/her)
                </span>
              </p>
              <p className="text-[11px] text-slate-500">
                Sociologist • Educator • Advocate for displaced youth
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5">
            {["about", "offerings", "portfolio", "speaking", "gallery", "contact"].map(
              (id) => (
                <span
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={navLinkClasses(id)}
                >
                  {id === "gallery"
                    ? "Photos"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
              )
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-indigo-700"
            >
              Book Jeorgette
            </button>
          </nav>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-5 py-10 space-y-16">
        {/* HERO / ABOUT */}
        <section
          id="about"
          className="grid lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-center"
        >
          <div>
            <motion.p
              className="text-[11px] uppercase tracking-[0.2em] text-indigo-700 font-semibold"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Speaker • Educator • Systems Transformer
            </motion.p>

            <motion.h1
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              Helping displaced youth move from survival to possibility.
            </motion.h1>

            <motion.p
              className="mt-4 text-sm md:text-base text-slate-700 max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              I partner with schools, nonprofits, and justice-impacted communities
              to build practical pathways toward education, stability, and healing.
              My work centers young people navigating homelessness, foster care, and
              incarceration—alongside the families and systems around them.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Book Jeorgette to speak
              </button>
              <button
                onClick={() => scrollToSection("offerings")}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[11px] md:text-xs font-semibold tracking-wide text-slate-700 hover:bg-slate-50"
              >
                View programs & workshops
              </button>
            </motion.div>

            <div className="mt-5 text-[11px] text-slate-600 space-y-1">
              <p>
                <strong className="font-semibold">Email:</strong>{" "}
                <a
                  href="mailto:c.jorgette@yahoo.com"
                  className="underline decoration-slate-400 hover:decoration-indigo-600"
                >
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p>
                <strong className="font-semibold">Based in:</strong> Los Angeles,
                California
              </p>
            </div>

            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-[11px] md:text-xs font-semibold uppercase tracking-wide text-white shadow hover:bg-emerald-700"
              >
                Download résumé (PDF)
              </a>
            </div>
          </div>

          {/* Hero image / collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900/95">
              <img
                src="/photo5.jpg"
                alt="Jeorgette speaking and sharing her story."
                className="w-full h-64 md:h-80 object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-white shadow-xl rounded-2xl px-4 py-3 border border-slate-100 max-w-xs">
              <p className="text-[11px] font-semibold text-slate-900">
                “Jeorgette’s story moved the room and gave our youth real,
                tangible hope.”
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                – Program partner feedback
              </p>
            </div>
          </motion.div>
        </section>

        {/* OFFERINGS */}
        <section id="offerings" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Programs & offerings
              </h2>
              <p className="mt-2 text-sm text-slate-700 max-w-xl">
                I work with schools, nonprofits, campuses, and community partners to
                design programming that is honest about harm and serious about
                possibility.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Keynotes & Storytelling",
                body:
                  "Talks that weave lived experience, research, and practical hope for audiences of students, staff, and community.",
              },
              {
                title: "Workshops & Curriculum",
                body:
                  "Multi-session or one-time workshops on resilience, re-entry, navigating systems, and building structure for change.",
              },
              {
                title: "Consulting & Partnerships",
                body:
                  "Thought partnership with organizations designing programming for system-impacted youth and families.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group h-full rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-indigo-700 font-semibold">
                UCLA
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold">
                B.A. Sociology
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">2023 – 2025 • Senior</p>
              <p className="mt-2 text-xs text-slate-600">
                Leadership Academy 2025 Cohort • Underground Scholars Policy
                Fellowship.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700 font-semibold">
                Barstow Community College
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold">
                A.A. English
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">
                2020 – 2022 • Summa Cum Laude
              </p>
              <p className="mt-2 text-xs text-slate-600">
                All California Academic Awardee • All USA Academic Nominee • 2023
                Commencement Speaker.
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO HUB */}
        <section id="portfolio" className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Areas of work
              </h2>
              <p className="mt-2 text-sm text-slate-700 max-w-xl">
                My work spans speaking, curriculum, advocacy, and international
                collaboration around justice and education.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                id: "speaking",
                title: "Speaking & Media",
                body:
                  "Keynotes, panels, interviews, and storytelling that connect lived experience with policy and practice.",
              },
              {
                id: "teaching",
                title: "Teaching & Curriculum",
                body:
                  "Designing and delivering courses and workshops for youth and adults in carceral and community settings.",
              },
              {
                id: "advocacy",
                title: "Advocacy & Policy",
                body:
                  "Collaborating with organizations and agencies on systems change centered on youth and families.",
              },
              {
                id: "international",
                title: "International Work",
                body:
                  "Participating in global delegations to learn from justice and education models abroad.",
              },
            ].map((card) => (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <h3 className="text-sm md:text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{card.body}</p>
                <span className="mt-3 inline-flex text-[11px] font-semibold text-indigo-700">
                  View this focus area →
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* SPEAKING – with YouTube only here */}
        <section id="speaking" className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Speaking & media
          </h2>
          <p className="text-sm text-slate-700 max-w-2xl">
            From intimate rooms to large events, I speak about the realities of
            displacement, incarceration, and resilience—and the structures that
            make change possible.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-sm md:text-base">
                Featured testimonial film
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                A short film capturing my story, my work, and the communities I
                serve.
              </p>
              <div className="mt-3 aspect-video w-full rounded-lg overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nDHfURsqDWs"
                  title="Featured testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-sm md:text-base">
                Commencement address
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Speaking to graduates about possibility, responsibility, and
                building new futures.
              </p>
              <div className="mt-3 aspect-video w-full rounded-lg overflow-hidden shadow">
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Teaching & curriculum
          </h2>
          <p className="text-sm text-slate-700 max-w-2xl">
            I facilitate learning spaces in community colleges, youth programs,
            and correctional facilities that center dignity, agency, and academic
            possibility.
          </p>
        </section>

        {/* ADVOCACY */}
        <section id="advocacy" className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Advocacy & policy work
          </h2>
          <p className="text-sm text-slate-700 max-w-2xl">
            My advocacy includes work with nonprofits, state and county partners,
            and national organizations focused on decarceration, youth justice,
            and educational access.
          </p>
        </section>

        {/* INTERNATIONAL */}
        <section id="international" className="space-y-3">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            International work
          </h2>
          <p className="text-sm text-slate-700 max-w-2xl">
            Through global delegations, I&apos;ve visited correctional and
            educational systems abroad to learn what it means to prioritize
            rehabilitation, relationship, and re-entry.
          </p>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Photo highlights
          </h2>
          <p className="text-sm text-slate-700 max-w-2xl">
            A glimpse into some of the rooms, communities, and partners I have had
            the honor to work alongside.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {photoHighlights.map((item, index) => (
              <figure
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition"
                onClick={() => setLightboxItem(item)}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-3 text-[11px] text-slate-700 leading-snug">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 space-y-5"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Let&apos;s work together
              </h2>
              <p className="mt-2 text-sm text-slate-700 max-w-xl">
                Share a bit about your event, classroom, or program. I&apos;ll
                follow up with next steps and possibilities.
              </p>
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-semibold text-slate-900">Direct contact</p>
              <p className="mt-1">
                <a
                  href="mailto:c.jorgette@yahoo.com"
                  className="underline decoration-slate-400 hover:decoration-indigo-600"
                >
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p className="mt-1">Los Angeles, California</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-3">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-xs text-slate-700 space-y-2">
              <p className="font-semibold text-slate-900">
                Ideal for organizations who:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Serve youth in foster care, re-entry, or housing instability.</li>
                <li>Support system-impacted students or families.</li>
                <li>Are designing programming around justice, healing, or access.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 className="font-semibold text-sm text-slate-900">
                Quick inquiry form
              </h3>
              <form className="mt-3 grid gap-3 text-xs">
                <input
                  className="border border-slate-300 rounded-md px-3 py-2"
                  placeholder="Your name"
                />
                <input
                  className="border border-slate-300 rounded-md px-3 py-2"
                  placeholder="Email"
                />
                <input
                  className="border border-slate-300 rounded-md px-3 py-2"
                  placeholder="Organization / school (optional)"
                />
                <textarea
                  className="border border-slate-300 rounded-md px-3 py-2"
                  rows={4}
                  placeholder="What kind of support or collaboration are you looking for?"
                />
                <button
                  type="button"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-[11px] font-semibold text-white hover:bg-indigo-700"
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
                <p className="text-sm text-slate-800">
                  {lightboxItem.caption}
                </p>
                <button
                  type="button"
                  className="text-[11px] px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                  onClick={() => setLightboxItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-10 border-t border-slate-200 pt-4 pb-6 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Jeorgette Cuellar · Site for speaking,
          teaching, and community work.
        </footer>
      </main>
    </div>
  );
}
