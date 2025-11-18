import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Section IDs used by the scroll spy
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
  // You can append more photo entries here if needed
];

export default function JeorgetteWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [lightboxItem, setLightboxItem] = useState(null);

  // Scroll spy to highlight active nav link
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
    <div
      className="min-h-screen bg-gray-50 text-gray-900 antialiased"
      style={{ fontFamily: '"Times New Roman", serif' }} // ✅ Global Times New Roman
    >
      {/* Header */}
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
                Jeorgette Cuellar{" "}
                <span className="text-xs font-normal ml-1">(she/her)</span>
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
        {/* Hero / About */}
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
              I teach the tools, habits, and community practices that help
              people transform a life they don’t want into a life they do. My
              work centers displaced youth, including those experiencing
              homelessness and transitions into or out of foster care, as well
              as people and families impacted by incarceration across Los
              Angeles County and beyond.
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
                <a
                  href="mailto:c.jorgette@yahoo.com"
                  className="underline"
                >
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Los Angeles, California, United
                States
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
                Advocate for displaced youth, especially those experiencing
                homelessness and foster care transitions.
              </li>
              <li>
                Aspiring educator dedicated to rehabilitation resources for
                incarcerated people across LA County and internationally.
              </li>
              <li>
                Passionate about community-driven academic advancement,
                emotional growth, and systems-level change.
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
              Practical, research-informed programming and one-on-one coaching
              that help people build tangible structures for life change:
              academically, emotionally, and in community.
            </p>

            {/* Featured video banner */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-pink-50 p-5 border border-indigo-100 flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-semibold">
                  Featured Video
                </h3>
                <p className="mt-1 text-xs md:text-sm text-gray-700">
                  A short look into my story, my work with displaced youth, and
                  why I believe in building pathways from survival to
                  stability.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/nDHfURsqDWs"
                    title="Featured testimonial video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {[
                {
                  id: "speaking",
                  title: "Speaking & Media",
                  body:
                    "Keynotes, interviews, podcast features, and press appearances.",
                },
                {
                  id: "teaching",
                  title: "Teaching & Curriculum",
                  body:
                    "Domestic and international education, curriculum development, and youth instruction.",
                },
                {
                  id: "advocacy",
                  title: "Advocacy & Policy Work",
                  body:
                    "Community leadership, legislative work, and nonprofit advocacy.",
                },
                {
                  id: "international",
                  title: "International Work",
                  body:
                    "Global education initiatives and correctional facility collaboration across Europe.",
                },
              ].map((card) => (
                <motion.button
                  key={card.id}
                  onClick={() => scrollToSection(card.id)}
                  className="text-left bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full hover:shadow-md"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 18px 45px rgba(15,23,42,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <h3 className="text-sm md:text-base font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    {card.body}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Speaking & Media */}
        <section id="speaking" className="pt-4">
          {/* Added YouTube Videos */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">
                Featured Testimonial
              </h3>
              <div className="mt-3 aspect-video w-full rounded-lg overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nDHfURsqDWs"
                  title="YouTube testimonial video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">
                Commencement Speech
              </h3>
              <div className="mt-3 aspect-video w-full rounded-lg overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TFAbGh3ZhkY"
                  title="YouTube commencement speech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching & Curriculum */}
        <section id="teaching" className="pt-4">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 p-5 border border-emerald-100">
            <h2 className="text-xl md:text-2xl font-semibold">
              Teaching & Curriculum
            </h2>
            <p className="mt-2 text-gray-700 text-xs md:text-sm">
              Classroom instruction, curriculum development, and international
              education through the Prison Education Project, Wrap Around, and
              partner organizations.
            </p>
          </div>
        </section>

        {/* Advocacy & Policy */}
        <section id="advocacy" className="pt-4">
          <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 p-5 border border-amber-100">
            <h2 className="text-xl md:text-2xl font-semibold">
              Advocacy & Policy Work
            </h2>
            <p className="mt-2 text-gray-700 text-xs md:text-sm">
              Community action, legislative advocacy, and systems reform work in
              partnership with nonprofits, state offices, and national
              organizations.
            </p>
          </div>
        </section>

        {/* International Work */}
        <section id="international" className="pt-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5 border border-blue-100">
            <h2 className="text-xl md:text-2xl font-semibold">
              International Work
            </h2>
            <p className="mt-2 text-gray-700 text-xs md:text-sm">
              Collaboration in correctional reform and educational programming
              across Scotland, Denmark, and other international sites through
              global Prison Education Project delegations.
            </p>
          </div>
        </section>

        {/* Media */}
        <section id="media" className="pt-4">
          <h2 className="text-2xl font-semibold">Media & Videos</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Watch and explore select talks, testimonials, and moments from my
            advocacy and teaching work.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">
                Testimonial Film
              </h3>
              <video controls className="mt-3 w-full rounded-lg shadow">
                <source
                  src="https://www.youtube.com/embed/nDHfURsqDWs"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <a
                href="https://www.dropbox.com/scl/fi/x8bxhm2enl3blt8bhz809/Jorgette-Final.mp4?rlkey=etyt1tt27uiosf9h26b3lh10o&e=1&st=2dwzavip&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs md:text-sm text-indigo-600 hover:underline"
              >
                Open testimonial in a new tab
              </a>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">
                College Commencement Speech
              </h3>
              <video controls className="mt-3 w-full rounded-lg shadow">
                <source
                  src="https://www.youtube.com/embed/TFAbGh3ZhkY"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <a
                href="https://drive.google.com/file/d/1EqShqoIxXdywlg-Uaph3Yp7qD1RSTVX7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs md:text-sm text-indigo-600 hover:underline"
              >
                Open commencement speech in a new tab
              </a>
            </div>
          </div>

          {/* Latest media carousel */}
          <div className="mt-10">
            <h3 className="text-lg md:text-xl font-semibold">Latest Media</h3>
            <p className="mt-2 text-gray-700 text-xs md:text-sm">
              A quick scroll through some of my most recent talks, interviews,
              and collaborations.
            </p>

            <div className="mt-4 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {[
                {
                  title: "Testimonial – My Story",
                  url: "https://www.youtube.com/watch?v=nDHfURsqDWs",
                  label: "Watch on YouTube",
                },
                {
                  title: "Barstow Commencement Speech",
                  url: "https://www.youtube.com/watch?v=TFAbGh3ZhkY",
                  label: "Watch on YouTube",
                },
                {
                  title: "Olive Crest Fundraising Moments",
                  url:
                    "https://www.linkedin.com/posts/jeorgette-cuellar-2bb293191_wonderful-time-at-olive-crests-annual-southern-activity-7240162282293358594-uhP9",
                  label: "View LinkedIn post",
                },
                {
                  title: "Policy & Youth Advocacy",
                  url:
                    "https://www.linkedin.com/posts/jeorgette-cuellar-2bb293191_the-oycr-office-of-youth-and-community-restoration-activity-7260493607910965249-1hGY",
                  label: "View LinkedIn post",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-center min-w-[220px] max-w-xs bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-3 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  <span className="text-xs font-semibold text-gray-900">
                    {item.title}
                  </span>
                  <span className="mt-2 inline-flex text-[11px] text-indigo-600 underline">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Image gallery with lightbox */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Photo Highlights</h3>
            <p className="mt-2 text-gray-700 text-xs md:text-sm">
              A snapshot of some of the rooms, communities, and organizations I
              have had the honor to work with.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {photoHighlights.map((item, index) => (
                <figure
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-md transition"
                  onClick={() => setLightboxItem(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105" // ✅ hover zoom
                  />
                  <figcaption className="p-3 text-xs text-gray-700">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-4 bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl border border-gray-100"
        >
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Interested in workshops, coaching, speaking engagements, or
            partnerships? Share a bit about what you&apos;re looking for, and
            I&apos;ll be in touch.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">Contact</h3>
              <p className="mt-3 text-xs md:text-sm text-gray-600">
                Email:{" "}
                <a
                  className="underline"
                  href="mailto:c.jorgette@yahoo.com"
                >
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                Location: Los Angeles, California, United States
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">
                Quick inquiry
              </h3>
              <form className="mt-3 grid gap-3">
                <input
                  className="border rounded-md px-3 py-2 text-xs md:text-sm"
                  placeholder="Your name"
                />
                <input
                  className="border rounded-md px-3 py-2 text-xs md:text-sm"
                  placeholder="Email"
                />
                <textarea
                  className="border rounded-md px-3 py-2 text-xs md:text-sm"
                  rows={4}
                  placeholder="How can I help?"
                />
                <button className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md text-xs md:text-sm">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Lightbox overlay */}
        {lightboxItem && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
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
                <p className="text-sm text-gray-800">
                  {lightboxItem.caption}
                </p>
                <button
                  type="button"
                  className="text-xs px-2 py-1 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
                  onClick={() => setLightboxItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-8 text-center text-xs md:text-sm text-gray-500 border-t border-gray-100 pt-4">
          © {new Date().getFullYear()} Jeorgette Cuellar — Built with care
        </footer>
      </main>
    </div>
  );
}

