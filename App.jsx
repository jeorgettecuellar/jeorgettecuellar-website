      import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTION_IDS = [
  "about",
  "offerings",
  "speaking",
  "portfolio",
  "teaching",
  "advocacy",
  "international",
  "education",
  "gallery",
  "contact",
];

const photoHighlights = [
  {
    src: "/photo1.jpg",
    alt: "Community gathering at a fundraising or program event.",
    caption: "Sharing my story in community spaces that invest in youth and families.",
    caption:
      "Over $100,000 fundraised in a day for youth transitioning out of foster care at Olive Crest's Pick-A-Purse event—proof of what a shared testimony can spark.",
  },
  {
    src: "/photo2.jpg",
    alt: "Smiling group photo with youth and mentors.",
    caption: "Celebrating youth leadership, milestones, and the work they’ve done.",
    caption:
      "Celebrating youth leadership, milestones, and the work they’ve done at the annual ‘I am’ empowerment workshop.",
  },
  {
    src: "/photo3.jpg",
    alt: "Group standing together at a community or school event.",
    caption: "Building rooms where young people can be seen, heard, and supported.",
  },
  {
    src: "/photo4.jpg",
    alt: "Participants seated or gathered during a live event.",
    caption: "Facilitating conversations about resilience, systems, and possibility.",
    caption:
      "Facilitating conversations about resilience, systems, and possibility as a keynote speaker in Riverside County at the annual Southern Nights fundraising event.",
  },
  {
    src: "/photo5.jpg",
    alt: "Jeorgette speaking or being filmed while sharing her story.",
    caption: "Using lived experience as a catalyst for healing and structural change.",
  },
  {
    src: "/photo6.jpg",
    alt: "Smiling with program participants or community partners.",
    caption: "Marking milestones with young people as they build new routines.",
    caption:
      "Advocating for access to resources after youth incarceration as a panelist speaker with the Prison Education Project at the California Youth Justice Summit.",
  },
  {
    src: "/photo7.jpg",
    alt: "Formal or semi-formal dinner with supporters at a table.",
    caption: "Gathering with supporters and partners who make this work possible.",
    caption:
      "Alongside Olive Crest’s CEO after another keynote in Palm Springs to fundraise for foster youth in every stage of state custody placement.",
  },
  {
    src: "/photo8.jpg",
    alt: "Community or campus-based event setting.",
    caption: "Connecting across campuses, nonprofits, and county programs.",
    caption:
      "Radio interview on the leaps made in education and professional life after the hardships of placement in the foster care system.",
  },
  {
    src: "/photo9.jpg",
    alt: "International or delegation-style photo abroad.",
    caption: "Learning from global models of justice, education, and rehabilitation.",
    caption:
      "Learning from global models of justice, education, and rehabilitation at the California state capital in partnership with UCLA and UC Berkeley.",
  },
  {
    src: "/photo10.jpg",
    alt: "Group visiting a correctional or institutional facility.",
    caption: "Seeing how other countries center rehabilitation and re-entry.",
    caption:
      "Advocating for bills that prioritize rehabilitative tools during incarceration and rapid access to education after release.",
  },
  {
    src: "/photo11.jpg",
    alt: "Group of educators or advocates standing together.",
    caption: "Collaborating with leaders committed to systems-level change.",
    caption:
      "Collaborating with leaders at Café Exit in Denmark after a day of workshops focused on forgiveness, healing, and positive change.",
  },
  {
    src: "/photo12.jpg",
    alt: "Community gathering in an international setting.",
    caption: "Connecting community work locally to movements happening abroad.",
    caption:
      "Connecting community work in California to transformative movements taking place across Northern Europe.",
  },
  {
    src: "/photo13.jpg",
    alt: "Smiling delegation or cohort photo.",
    caption: "Standing beside people who believe in transformation at scale.",
    caption: "At Nyborg Prison in Denmark with others who believe in transformation at scale.",
  },
  {
    src: "/photo14.jpg",
    alt: "Outdoor celebration or group gathering.",
    caption: "Honoring the joy, repair, and relationships this work creates.",
    caption:
      "Honoring the joy, repair, and relationships this work creates at a rehabilitative home in Copenhagen.",
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

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [hoverDirection, setHoverDirection] = useState(null);

  const currentPhoto = photoHighlights[currentPhotoIndex];

  const advancePhoto = (direction) => {
    setCurrentPhotoIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % photoHighlights.length;
      }
      return (prev - 1 + photoHighlights.length) % photoHighlights.length;
    });
  };

  useEffect(() => {
    if (!hoverDirection) return undefined;

    const intervalId = setInterval(() => advancePhoto(hoverDirection), 900);
    return () => clearInterval(intervalId);
  }, [hoverDirection]);

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
@@ -303,82 +334,80 @@ function App() {
                <motion.div
                  className="mt-4"
                  variants={fadeUp}
                  custom={0.4}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center rounded-full bg-[#F4D27A] px-5 py-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#4A3C21] shadow hover:bg-[#E7C661]"
                  >
                    Download résumé (PDF)
                  </a>
                </motion.div>
              </div>

              {/* Right: Image + badge */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.14 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-[#0F1713]">
<img
  src="/hero.png"
  alt="Jeorgette speaking on a panel with community members."
  className="w-full h-64 md:h-80 lg:h-96 object-cover opacity-90"
/>

                  <img
                    src="/hero.png"
                    alt="Jeorgette speaking on a panel with community members."
                    className="w-full h-64 md:h-80 lg:h-96 object-cover opacity-90"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 bg-white shadow-xl rounded-2xl px-4 py-3 border border-slate-100 max-w-xs">
                  <p className="text-[11px] font-semibold text-[#122019]">
                    “Jeorgette&apos;s story moved the room and gave our youth real,
                    tangible hope.”
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    – Program partner feedback
                  </p>
                </div>
                <div className="absolute -top-4 right-2 bg-[#1F4E37] text-white text-[10px] px-3 py-2 rounded-full shadow-lg">
                  Trusted by campuses & community programs
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* OFFERINGS */}
        <motion.section
          id="offerings"
          className="space-y-6"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          animate="visible"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122019]">
                Programs & partnerships
              </h2>
              <p className="mt-2 text-sm md:text-[15px] text-[#4C5A52] max-w-xl leading-relaxed">
                I collaborate with campuses, nonprofits, and community programs to
                design spaces where system-impacted youth and families can practice
                new structures for stability and growth.
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
@@ -392,52 +421,51 @@ function App() {
              <motion.div
                key={card.title}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
              >
                <h3 className="text-sm md:text-base font-semibold text-[#122019]">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52] leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SPEAKING (videos) */}
        <motion.section
          id="speaking"
          className="space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#122019]">
            Speaking & media
          </h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            From intimate rooms to large audiences, I speak about displacement,
            incarceration, and possibility—and the structures that help people move
            from surviving to building a life they want.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4">
            <motion.div
              className="bg-white border border-[#CFE7D4] rounded-2xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="font-semibold text-sm md:text-base text-[#122019]">
                Featured testimonial film
              </h3>
              <p className="mt-1 text-xs md:text-[13px] text-[#4C5A52]">
                A short film sharing my story, my work, and the communities I am
                accountable to.
              </p>
@@ -465,52 +493,51 @@ function App() {
              </h3>
              <p className="mt-1 text-xs md:text-[13px] text-[#4C5A52]">
                Speaking to graduates about responsibility, repair, and claiming
                joy—even when the odds were not built for you.
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
            </motion.div>
          </div>
        </motion.section>

        {/* PORTFOLIO HUB */}
        <motion.section
          id="portfolio"
          className="space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          animate="visible"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122019]">
                Areas of work
              </h2>
              <p className="mt-2 text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
                My practice spans teaching, advocacy, and international collaboration
                around justice, education, and re-entry.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                id: "teaching",
                title: "Teaching & curriculum",
                body:
                  "Course and workshop design in community colleges, youth programs, and carceral settings.",
              },
              {
                id: "advocacy",
                title: "Advocacy & policy",
                body:
@@ -530,201 +557,238 @@ function App() {
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
              >
                <h3 className="text-sm md:text-base font-semibold text-[#122019]">
                  {card.title}
                </h3>
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
          animate="visible"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#122019]">
            Teaching & curriculum
          </h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            I facilitate classrooms and workshops that center dignity, agency, and
            academic possibility for youth and adults—including inside carceral
            facilities. My approach blends lived experience, trauma-informed
            practice, and research-backed structure.
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
          animate="visible"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#122019]">
            Advocacy & policy work
          </h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            My advocacy includes work with nonprofits, county and state partners,
            and national organizations committed to transforming youth justice,
            decarceration, and access to education and housing.
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
          animate="visible"
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#122019]">
            International work
          </h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            Through global delegations, I&apos;ve visited correctional and
            educational systems abroad to learn how countries prioritize
            rehabilitation, relationship, and re-entry—and bring those lessons back
            to local work.
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
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#122019]">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#1F4E37] font-semibold">
                UCLA
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold text-[#122019]">
                B.A. Sociology
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">2023 – 2025 · Senior</p>
              <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52]">
                Leadership Academy 2025 Cohort · Underground Scholars Policy
                Fellowship.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#4BAF7A] font-semibold">
                Barstow Community College
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold text-[#122019]">
                A.A. English
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">
                2020 – 2022 · Summa Cum Laude
              </p>
              <p className="mt-2 text-xs md:text-[13px] text-[#4C5A52]">
                All California Academic Awardee · All USA Academic Nominee · 2023
                Commencement Speaker.
              </p>
            </div>
          </div>
        </motion.section>

        {/* GALLERY */}
        <motion.section
          id="gallery"
          className="space-y-4"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#122019]">
            Photo highlights
          </h2>
          <p className="text-sm md:text-[15px] text-[#4C5A52] max-w-2xl leading-relaxed">
            A glimpse into some of the rooms, communities, and partners I have had
            the honor to work alongside.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {photoHighlights.map((item, index) => (
              <motion.figure
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                onClick={() => setLightboxItem(item)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.03 * index }}
              >
                <div className="overflow-hidden">
  <img
    src={item.src}
    alt={item.alt}
    className="w-full h-40 sm:h-44 md:h-48 lg:h-56 min-h-[160px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
  />
</div>

                <figcaption className="p-3 text-[11px] md:text-[12px] text-[#4C5A52] leading-snug">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
            <motion.figure
              className="relative col-span-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="relative">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover"
                  onClick={() => setLightboxItem(currentPhoto)}
                />

                <button
                  type="button"
                  className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-start"
                  onMouseEnter={() => setHoverDirection("prev")}
                  onMouseLeave={() => setHoverDirection(null)}
                  onClick={() => advancePhoto("prev")}
                  aria-label="Show previous photo"
                >
                  <span className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white text-xl font-semibold opacity-0 transition-opacity hover:opacity-100">
                    ‹
                  </span>
                </button>

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-end"
                  onMouseEnter={() => setHoverDirection("next")}
                  onMouseLeave={() => setHoverDirection(null)}
                  onClick={() => advancePhoto("next")}
                  aria-label="Show next photo"
                >
                  <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white text-xl font-semibold opacity-0 transition-opacity hover:opacity-100">
                    ›
                  </span>
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/45 text-white text-[11px] px-3 py-1.5 rounded-full shadow">
                  Hover left or right to browse · Tap to open caption
                </div>
              </div>

              <figcaption className="px-4 py-3 text-[12px] md:text-sm text-[#304139] text-center">
                {currentPhoto.caption}
              </figcaption>

              <div className="flex items-center justify-center gap-2 pb-4">
                {photoHighlights.map((_, indicatorIndex) => (
                  <button
                    key={indicatorIndex}
                    type="button"
                    aria-label={`Go to photo ${indicatorIndex + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      indicatorIndex === currentPhotoIndex
                        ? "w-6 bg-[#1F4E37]"
                        : "w-2 bg-slate-200"
                    }`}
                    onClick={() => setCurrentPhotoIndex(indicatorIndex)}
                  />
                ))}
              </div>
            </motion.figure>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="rounded-3xl border border-[#CFE7D4] bg-white shadow-sm p-6 md:p-8 space-y-5"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          animate="visible"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122019]">
                Let&apos;s work together
              </h2>
              <p className="mt-2 text-sm md:text-[15px] text-[#4C5A52] max-w-xl leading-relaxed">
                Share a bit about your event, classroom, or program. I&apos;ll
                follow up with next steps and possibilities.
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

@@ -758,63 +822,61 @@ function App() {
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
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-[#1F4E37] px-4 py-2 text-[11px] font-semibold text-white hover:bg-[#173A29]"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </motion.section>

        {/* LIGHTBOX */}
        {lightboxItem && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setLightboxItem(item)}
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
             <div className="overflow-hidden">
  <img
    src={item.src}
    alt={item.alt}
    className="w-full h-40 sm:h-44 md:h-48 lg:h-56 min-h-[160px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
  />
</div>
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="w-full h-80 md:h-[420px] object-cover"
              />

              <div className="p-4 flex items-start justify-between gap-4">
                <p className="text-sm text-slate-800">{lightboxItem.caption}</p>
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
        <footer className="mt-10 border-top border-slate-200 pt-4 pb-6 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Jeorgette Cuellar · Speaking, teaching, and
          community work.
        </footer>
      </main>
    </div>
  );
}
