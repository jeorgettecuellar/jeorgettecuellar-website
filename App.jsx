import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTION_IDS = [
  "about",
  "offerings",
  "speaking",
  "contact",
  "portfolio",
  "teaching",
  "advocacy",
  "international",
  "education",
  "gallery",
];

const photoHighlights = [
  {
    src: "/photo1.jpg",
    alt: "Community gathering at a fundraising or program event.",
    caption:
      "Over $100,000 fundraised in a day for youth transitioning out of foster care at Olive Crest's Pick-A-Purse event—proof of what a shared testimony can spark.",
    focus: "center 35%",
  },
  {
    src: "/photo2.jpg",
    alt: "Smiling group photo with youth and mentors.",
    caption:
      "Celebrating youth leadership, milestones, and the work they’ve done at the annual ‘I am’ empowerment workshop.",
    focus: "center 35%",
  },
  {
    src: "/photo3.jpg",
    alt: "Group standing together at a community or school event.",
    caption: "Building rooms where young people can be seen, heard, and supported.",
    focus: "center 35%",
  },
  {
    src: "/photo4.jpg",
    alt: "Participants seated or gathered during a live event.",
    caption:
      "Facilitating conversations about resilience, systems, and possibility as a keynote speaker in Riverside County at the annual Southern Nights fundraising event.",
    focus: "center 30%",
  },
  {
    src: "/photo5.jpg",
    alt: "Jeorgette speaking or being filmed while sharing her story.",
    caption: "Using lived experience as a catalyst for healing and structural change.",
    focus: "center 30%",
  },
  {
    src: "/photo6.jpg",
    alt: "Smiling with program participants or community partners.",
    caption:
      "Advocating for access to resources after youth incarceration as a panelist speaker with the Prison Education Project at the California Youth Justice Summit.",
    focus: "center 35%",
  },
  {
    src: "/photo7.jpg",
    alt: "Formal or semi-formal dinner with supporters at a table.",
    caption:
      "Alongside Olive Crest’s CEO after another keynote in Palm Springs to fundraise for foster youth in every stage of state custody placement.",
    focus: "center 35%",
  },
  {
    src: "/photo8.jpg",
    alt: "Community or campus-based event setting.",
    caption:
      "Radio interview on the leaps made in education and professional life after the hardships of placement in the foster care system.",
    focus: "center 35%",
  },
  {
    src: "/photo9.jpg",
    alt: "International or delegation-style photo abroad.",
    caption:
      "Learning from global models of justice, education, and rehabilitation at the California state capital in partnership with UCLA and UC Berkeley.",
    focus: "center 35%",
  },
  {
    src: "/photo10.jpg",
    alt: "Group visiting a correctional or institutional facility.",
    caption:
      "Advocating for bills that prioritize rehabilitative tools during incarceration and rapid access to education after release.",
    focus: "center 35%",
  },
  {
    src: "/photo11.jpg",
    alt: "Group of educators or advocates standing together.",
    caption:
      "Collaborating with leaders at Café Exit in Denmark after a day of workshops focused on forgiveness, healing, and positive change.",
    focus: "center 40%",
  },
  {
    src: "/photo12.jpg",
    alt: "Community gathering in an international setting.",
    caption:
      "Connecting community work in California to transformative movements taking place across Northern Europe.",
    focus: "center 35%",
  },
  {
    src: "/photo13.jpg",
    alt: "Smiling delegation or cohort photo.",
    caption: "At Nyborg Prison in Denmark with others who believe in transformation at scale.",
    focus: "center 40%",
  },
  {
    src: "/photo14.jpg",
    alt: "Outdoor celebration or group gathering.",
    caption:
      "Honoring the joy, repair, and relationships this work creates at a rehabilitative home in Copenhagen.",
    focus: "center 40%",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  }),
};

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  const currentPhoto = photoHighlights[currentPhotoIndex];

  const advancePhoto = (direction) => {
    setCurrentPhotoIndex((prev) => {
      if (direction === "next") return (prev + 1) % photoHighlights.length;
      return (prev - 1 + photoHighlights.length) % photoHighlights.length;
    });
  };

  // Auto-rotate slideshow (slower)
  useEffect(() => {
    if (sliderPaused) return undefined;
    const intervalId = setInterval(() => advancePhoto("next"), 4500);
    return () => clearInterval(intervalId);
  }, [sliderPaused]);

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
          if (id && SECTION_IDS.includes(id)) setActiveSection(id);
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

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Correct embeds
  const YT_TESTIMONIAL = "https://www.youtube.com/embed/nDHfURsqDWs";
  const YT_COMMENCEMENT = "https://www.youtube.com/embed/TFAbGh3ZhkY";

  return (
    <div className="min-h-screen bg-[#F6F3EA] text-[#122019]">
      {/* Top nav */}
      <div className="sticky top-0 z-40 backdrop-blur bg-[#F6F3EA]/85 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => scrollToId("about")}
            className="font-semibold tracking-wide"
          >
            Jeorgette Cuellar
          </button>

          <div className="hidden md:flex items-center gap-2 flex-wrap justify-end">
            {SECTION_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                className={`text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 border transition ${
                  activeSection === id
                    ? "bg-[#1F4E37] text-white border-[#1F4E37]"
                    : "bg-white/60 border-slate-200 text-[#304139] hover:bg-white"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-14">
        {/* ABOUT / HERO */}
        <motion.section
          id="about"
          className="border border-white/70 bg-white/70 shadow-sm overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sectionFade}
        >
          <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left */}
            <div>
              <motion.p
                className="text-[11px] uppercase tracking-[0.2em] text-[#1F4E37] font-semibold"
                variants={fadeUp}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                Speaking · Teaching · Advocacy
              </motion.p>

              <motion.h1
                className="mt-3 text-3xl md:text-4xl font-bold leading-tight"
                variants={fadeUp}
                custom={0.08}
                initial="hidden"
                animate="visible"
              >
                People Don&apos;t Need Saving—They Need Support.
              </motion.h1>

              <motion.p
                className="mt-4 text-sm md:text-[15px] text-[#4C5A52] leading-relaxed max-w-xl"
                variants={fadeUp}
                custom={0.18}
                initial="hidden"
                animate="visible"
              >
                I collaborate with campuses, nonprofits, and community programs to design
                trauma-informed structures for stability, re-entry, and academic possibility.
              </motion.p>

              <motion.div
                className="mt-5 flex items-center gap-3 flex-wrap"
                variants={fadeUp}
                custom={0.28}
                initial="hidden"
                animate="visible"
              >
                <button
                  type="button"
                  onClick={() => scrollToId("contact")}
                  className="inline-flex items-center bg-[#1F4E37] px-5 py-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#173A29]"
                >
                  Contact
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center bg-[#F4D27A] px-5 py-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#4A3C21] shadow hover:bg-[#E7C661]"
                >
                  Download résumé (PDF)
                </a>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
            >
              <div className="overflow-hidden shadow-2xl border border-white/60 bg-[#0F1713]">
                <img
                  src="/hero.png"
                  alt="Jeorgette speaking on a panel with community members."
                  className="w-full h-64 md:h-80 lg:h-96 object-cover opacity-90"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 bg-white shadow-xl px-4 py-3 border border-slate-100 max-w-xs">
                <p className="text-[11px] font-semibold text-[#122019]">
                  “Jeorgette&apos;s story moved the room and gave our youth real, tangible hope.”
                </p>
                <p className="mt-1 text-[10px] text-slate-500">– Program partner feedback</p>
              </div>

              <div className="absolute -top-4 right-2 bg-[#1F4E37] text-white text-[10px] px-3 py-2 shadow-lg">
                Trusted by campuses & community programs
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* OFFERINGS */}
        <motion.section
          id="offerings"
          className="space-y-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Programs & partnerships</h2>
              <p className="mt-2 text-sm md:text-[15px] text-[#4C5A52] max-w-xl leading-relaxed">
                I collaborate with campuses, nonprofits, and community programs to design
                spaces where system-impacted youth and families can practice new structures
                for stability and growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Keynotes & Storytelling",
                body:
                  "Talks that blend lived experience, research, and practical hope for students, staff, and community partners.",
              },
              {
                title: "Workshops & Curriculum",
                body:
                  "Multi-session or one-time workshops focused on resilience, re-entry, systems navigation, and academic re-engagement.",
              },
              {
                title: "Program Collaboration",
                body:
                  "Support for teams building trauma-informed structures: facilitation, training, and partnership strategy.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="group h-full border border-slate-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
              >
                <h3 className="text-sm md:text-base font-semibold">{card.title}</h3>
                <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52] leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SPEAKING */}
        <motion.section
          id="speaking"
          className="space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Speaking & media</h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            From intimate rooms to large audiences, I speak about displacement,
            incarceration, and possibility—and the structures that help people move from
            surviving to building a life they want.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4">
            <motion.div
              className="bg-white border border-[#CFE7D4] p-4 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="font-semibold text-sm md:text-base">Featured testimonial film</h3>
              <p className="mt-1 text-xs md:text-[13px] text-[#4C5A52]">
                A short film sharing my story, my work, and the communities I am accountable to.
              </p>
              <div className="mt-3 aspect-video w-full overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src={YT_TESTIMONIAL}
                  title="Featured testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-white border border-[#CFE7D4] p-4 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <h3 className="font-semibold text-sm md:text-base">Commencement speech</h3>
              <p className="mt-1 text-xs md:text-[13px] text-[#4C5A52]">
                Speaking to graduates about responsibility, repair, and claiming joy—even when the odds were not built for you.
              </p>
              <div className="mt-3 aspect-video w-full overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src={YT_COMMENCEMENT}
                  title="Commencement speech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT (moved above Areas of Work) */}
        <motion.section
          id="contact"
          className="border border-[#CFE7D4] bg-white shadow-sm p-6 md:p-8 space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Let&apos;s work together</h2>
              <p className="mt-2 text-sm md:text-[15px] text-[#4C5A52] max-w-xl leading-relaxed">
                Share a bit about your event, classroom, or program. I&apos;ll follow up with
                next steps and possibilities.
              </p>
            </div>
            <div className="text-xs text-[#4C5A52]">
              <p className="font-semibold text-[#122019]">Direct contact</p>
              <p className="mt-1">
                <a
                  href="mailto:c.jorgette@yahoo.com"
                  className="underline decoration-[#8FD0A8] underline-offset-2 hover:decoration-[#1F4E37]"
                >
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p className="mt-1">Los Angeles, California</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 bg-[#F6F3EA] p-5">
              <p className="text-sm font-semibold">Quick note</p>
              <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52] leading-relaxed">
                If you include a date, audience size, and what you want people to leave with,
                I can respond faster with options.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5">
              <form className="grid gap-3">
                <input className="border border-slate-300 px-3 py-2" placeholder="Your name" />
                <input className="border border-slate-300 px-3 py-2" placeholder="Email" />
                <input
                  className="border border-slate-300 px-3 py-2"
                  placeholder="Organization / school (optional)"
                />
                <textarea
                  className="border border-slate-300 px-3 py-2"
                  rows={4}
                  placeholder="What kind of support or collaboration are you looking for?"
                />
                <button
                  type="button"
                  className="mt-1 inline-flex items-center justify-center bg-[#1F4E37] px-4 py-2 text-[11px] font-semibold text-white hover:bg-[#173A29]"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </motion.section>

        {/* PORTFOLIO */}
        <motion.section
          id="portfolio"
          className="space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Areas of work</h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            My practice spans teaching, advocacy, and international collaboration around justice,
            education, and re-entry.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                id: "teaching",
                title: "Teaching & curriculum",
                body: "Course and workshop design in community colleges, youth programs, and carceral settings.",
              },
              {
                id: "advocacy",
                title: "Advocacy & policy",
                body: "Public speaking, research translation, and partnerships that support decarceration and access to education.",
              },
              {
                id: "international",
                title: "International collaboration",
                body: "Learning across systems and bringing back practical lessons for local programs and policy work.",
              },
            ].map((card, i) => (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => scrollToId(card.id)}
                className="text-left group h-full border border-slate-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
              >
                <h3 className="text-sm md:text-base font-semibold">{card.title}</h3>
                <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52] leading-relaxed">
                  {card.body}
                </p>
                <span className="mt-3 inline-flex text-[11px] font-semibold text-[#1F4E37]">
                  Learn more →
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* TEACHING */}
        <motion.section
          id="teaching"
          className="space-y-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">Teaching & curriculum</h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            I facilitate classrooms and workshops that center dignity, agency, and academic possibility
            for youth and adults—including inside carceral facilities. My approach blends lived experience,
            trauma-informed practice, and research-backed structure.
          </p>
        </motion.section>

        {/* ADVOCACY */}
        <motion.section
          id="advocacy"
          className="space-y-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">Advocacy & policy work</h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            My advocacy includes work with nonprofits, county and state partners, and national organizations
            committed to transforming youth justice, decarceration, and access to education and housing.
          </p>
        </motion.section>

        {/* INTERNATIONAL */}
        <motion.section
          id="international"
          className="space-y-3"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">International work</h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            Through global delegations, I&apos;ve visited correctional and educational systems abroad to learn how
            countries prioritize rehabilitation, relationship, and re-entry—and bring those lessons back to local work.
          </p>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          className="space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Education</h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#1F4E37] font-semibold">
                UCLA
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold">B.A. Sociology</h3>
              <p className="text-[11px] text-slate-500 mt-1">2023 – 2025 · Senior</p>
              <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52]">
                Leadership Academy 2025 Cohort · Underground Scholars Policy Fellowship.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#4BAF7A] font-semibold">
                Barstow Community College
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold">A.A. English</h3>
              <p className="text-[11px] text-slate-500 mt-1">2020 – 2022 · Summa Cum Laude</p>
              <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52]">
                All California Academic Awardee · All USA Academic Nominee · 2023 Commencement Speaker.
              </p>
            </div>
          </div>
        </motion.section>

        {/* GALLERY (CAMPUSSPEAK-STYLE HERO SLIDER) */}
        <motion.section
          id="gallery"
          className="-mx-4 md:-mx-6 lg:-mx-8"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="relative w-full border-y border-slate-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            onMouseEnter={() => setSliderPaused(true)}
            onMouseLeave={() => setSliderPaused(false)}
          >
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] bg-slate-200">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: currentPhoto.focus || "center 35%" }}
                onClick={() => setLightboxItem(currentPhoto)}
              />

              <div className="absolute inset-0 bg-black/45" />

              {/* ✅ Option A overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-5xl w-full">
                  <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
                    People Build Their Own Futures—We Help Clear the Path.
                  </h2>
                  <p className="mt-3 text-white/90 text-sm sm:text-base md:text-lg tracking-wide">
                    Leadership guidance, education, and structure that empower individuals to shape lives they’re proud of.
                  </p>

                  <div className="mt-6 hidden md:flex items-center gap-8">
                    <div className="h-px bg-white/35 flex-1" />
                    <div className="h-px bg-white/35 flex-1" />
                  </div>
                </div>
              </div>

              {/* LEFT ARROW */}
              <button
                type="button"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10"
                onClick={() => advancePhoto("prev")}
                aria-label="Previous photo"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center bg-black/35 text-white text-3xl leading-none hover:bg-black/55 transition">
                  ‹
                </span>
              </button>

              {/* RIGHT ARROW */}
              <button
                type="button"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10"
                onClick={() => advancePhoto("next")}
                aria-label="Next photo"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center bg-black/35 text-white text-3xl leading-none hover:bg-black/55 transition">
                  ›
                </span>
              </button>

              {/* DOTS */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {photoHighlights.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to photo ${i + 1}`}
                    onClick={() => setCurrentPhotoIndex(i)}
                    className={`h-2.5 transition-all duration-300 ${
                      i === currentPhotoIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/60 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Optional caption strip under slider (remove if you don’t want it) */}
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="mt-3 text-center text-xs md:text-sm text-[#4C5A52]">
              {currentPhoto.caption}
            </p>
          </div>
        </motion.section>

        {/* LIGHTBOX */}
        {lightboxItem && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-white max-w-4xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="w-full h-80 md:h-[520px] object-cover"
                style={{ objectPosition: lightboxItem.focus || "center 35%" }}
              />

              <div className="p-4 flex items-start justify-between gap-4">
                <p className="text-sm text-slate-800">{lightboxItem.caption}</p>
                <button
                  type="button"
                  className="text-[11px] px-3 py-1 border border-slate-200 text-slate-600 hover:bg-slate-50"
                  onClick={() => setLightboxItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-10 border-t border-slate-200 pt-4 pb-6 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Jeorgette Cuellar · Speaking, teaching, and community work.
        </footer>
      </main>
    </div>
  );
}
