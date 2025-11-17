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
  "media",
  "contact",
];

const photoHighlights = [
  {
    src: "/images/pick-a-purse-press.jpg",
    alt: "News headline about more than $100,000 raised at Olive Crest's Pick-A-Purse luncheon.",
    caption:
      "Press coverage of Olive Crest's Pick-A-Purse Luncheon, where my story helped raise over $100,000.",
    section: "speaking",
  },
  {
    src: "/images/pick-a-purse-selfie.jpg",
    alt: "Jeorgette smiling and taking a selfie with an event host in a sequin jacket.",
    caption: "Celebrating community and generosity at Pick-A-Purse.",
    section: "speaking",
  },
  {
    src: "/images/iam-youth-group.jpg",
    alt: "Large group of youth and mentors posing with certificates outside a building.",
    caption: "Life skills and empowerment with youth participants.",
    section: "teaching",
  },
  {
    src: "/images/iam-volunteers.jpg",
    alt: "Group of women wearing I AM t-shirts in front of a balloon backdrop.",
    caption: "Community of mentors and volunteers showing up for young people.",
    section: "teaching",
  },
  {
    src: "/images/iam-duo.jpg",
    alt: "Two young women in I AM shirts standing in front of a colorful balloon arch.",
    caption: "Celebrating growth and identity with program participants.",
    section: "teaching",
  },
  {
    src: "/images/evening-speaking.jpg",
    alt: "Jeorgette speaking into a microphone at an outdoor evening event.",
    caption: "Sharing my story at an outdoor Olive Crest fundraiser.",
    section: "speaking",
  },
  {
    src: "/images/olive-crest-table.jpg",
    alt: "Group photo around a dinner table at a formal event.",
    caption: "Gathering with supporters and community partners.",
    section: "advocacy",
  },
  {
    src: "/images/fundraiser-crowd.jpg",
    alt: "Wide shot of an outdoor fundraiser under string lights.",
    caption: "A full room of supporters investing in youth and families.",
    section: "speaking",
  },
  {
    src: "/images/nfl-visit-1.jpg",
    alt: "Jeorgette standing in front of the NFL shield logo.",
    caption: "Collaborating with the NFL on opportunities for foster youth.",
    section: "advocacy",
  },
  {
    src: "/images/nfl-visit-2.jpg",
    alt: "Full-body photo of Jeorgette in front of the NFL building.",
    caption: "Bringing lived experience into professional spaces.",
    section: "advocacy",
  },
  {
    src: "/images/olive-crest-panel-group.jpg",
    alt: "Group of panelists, including Jeorgette, standing in front of an Olive Crest step-and-repeat.",
    caption: "Sharing pathways from foster care to higher education.",
    section: "speaking",
  },
  {
    src: "/images/olive-crest-panel-stage.jpg",
    alt: "Panel of speakers on stage with an audience listening.",
    caption: "Speaking on stage about resilience, policy, and youth support.",
    section: "speaking",
  },
];

export default function JeorgetteWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [lightboxItem, setLightboxItem] = useState(null);

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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinkClasses = (id) =>
    `hover:underline cursor-pointer ${
      activeSection === id ? "font-semibold text-indigo-700" : "text-gray-700"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <motion.header
        className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-40"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
              JC
            </div>
            <div>
              <p className="text-sm font-semibold">
                Jeorgette Cuellar <span className="text-xs font-normal ml-1">(she/her)</span>
              </p>
              <p className="text-xs text-gray-600">
                Sociologist • Educator • Advocate for displaced youth
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-5 text-xs">
            <span
              onClick={() => scrollToSection("about")}
              className={navLinkClasses("about")}
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("offerings")}
              className={navLinkClasses("offerings")}
            >
              Offerings
            </span>
            <span
              onClick={() => scrollToSection("education")}
              className={navLinkClasses("education")}
            >
              Education
            </span>
            <span
              onClick={() => scrollToSection("portfolio")}
              className={navLinkClasses("portfolio")}
            >
              Portfolio
            </span>
            <span
              onClick={() => scrollToSection("media")}
              className={navLinkClasses("media")}
            >
              Media
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className={navLinkClasses("contact")}
            >
              Contact
            </span>
          </nav>
        </div>
      </motion.header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        <section id="about" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold leading-tight"
            >
              Build the life you want — from where you are now.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-700 text-base md:text-lg"
            >
              I teach the tools, habits, and community practices that help people transform a
              life they don’t want into a life they do. My work centers displaced youth,
              including those experiencing homelessness and transitions into or out of foster
              care, as well as people and families impacted by incarceration across Los Angeles
              County and beyond.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm font-medium shadow hover:opacity-95"
              >
                Book a consultation
              </button>
              <button
                onClick={() => scrollToSection("offerings")}
                className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-lg text-xs md:text-sm text-gray-800 bg-white hover:bg-gray-50"
              >
                See offerings
              </button>
            </motion.div>

            <div className="mt-5 text-xs text-gray-700 space-y-1">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:c.jorgette@yahoo.com" className="underline">
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Los Angeles, California, United States
              </p>
            </div>

            <div className="mt-4">
              <a
                href="/resume.pdf"
                className="inline-block px-5 py-3 bg-green-600 text-white rounded-lg font-medium shadow hover:opacity-95 text-sm"
                download
              >
                Download My Résumé
              </a>
            </div>
          </div>

          <motion.aside
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold">Snapshot</h3>
            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li>
                Advocate for displaced youth, especially those experiencing homelessness and
                foster care transitions.
              </li>
              <li>
                Aspiring educator dedicated to rehabilitation resources for incarcerated people
                across LA County and internationally.
              </li>
              <li>
                Passionate about community-driven academic advancement, emotional growth, and
                systems-level change.
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Core strengths
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Student Activism",
                  "Curriculum Development",
                  "Public Speaking",
                  "Community Engagement",
                  "Workshop Facilitation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        {/* Offerings */}
        <section id="offerings" className="pt-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-semibold">What I offer</h2>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              Practical, research-informed programming and one-on-one coaching that help
              people build tangible structures for life change: academically, emotionally,
              and in community.
            </p>
          </motion.div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Workshops & Curriculum",
                body:
                  "Interactive curricula centered on resilience, goal-setting, navigating social services, and academic re-entry.",
              },
              {
                title: "One-on-one Coaching",
                body:
                  "Personalized planning for education, housing pathways, employment readiness, and wellness routines.",
              },
              {
                title: "Community Partnerships",
                body:
                  "Collaborations with schools, nonprofits, and county programs to expand access and support.",
              },
            ].map((card) => (
              <motion.article
                key={card.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(15,23,42,0.08)" }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <h3 className="font-semibold text-sm md:text-base">{card.title}</h3>
                <p className="mt-2 text-xs md:text-sm text-gray-600">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* The rest of sections omitted in this snippet for brevity */}
      </main>
    </div>
  );
}
