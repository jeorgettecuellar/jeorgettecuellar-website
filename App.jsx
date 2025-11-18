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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinkClasses = id =>
    `hover:underline cursor-pointer ${
      activeSection === id ? "font-semibold text-indigo-700" : "text-gray-700"
    }`;

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900 antialiased"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      {/* HEADER */}
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
            {["about", "offerings", "education", "portfolio", "contact"].map(id => (
              <span key={id} onClick={() => scrollToSection(id)} className={navLinkClasses(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* ABOUT */}
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

            <p className="mt-4 text-gray-700 text-base md:text-lg">
              I teach the tools, habits, and community practices that help people transform a life they don’t want into a life they do.
              My work centers displaced youth, including those experiencing homelessness, foster care transitions, and
              communities impacted by incarceration across Los Angeles County and internationally.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
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
            </div>

            <div className="mt-5 text-xs text-gray-700 space-y-1">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:c.jorgette@yahoo.com" className="underline">
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Los Angeles, California
              </p>
            </div>

            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block px-5 py-3 bg-green-600 text-white rounded-lg font-medium shadow hover:opacity-95 text-sm"
              >
                Download My Résumé
              </a>
            </div>
          </div>

          <motion.aside
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-lg font-semibold">Snapshot</h3>
            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li>Advocate for displaced youth and system-impacted communities.</li>
              <li>Educator focused on rehabilitation and international programming.</li>
              <li>Passionate about community-driven academic advancement.</li>
            </ul>
          </motion.aside>
        </section>

        {/* OFFERINGS */}
        <section id="offerings">
          <h2 className="text-2xl font-semibold">What I offer</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Practical programming and coaching that help people build tangible structures for academic, emotional, and community growth.
          </p>

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
            ].map(card => (
              <div key={card.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-xs text-gray-600">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 className="text-2xl font-semibold">Education</h2>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold">UCLA — B.A. Sociology</h3>
              <p className="text-xs text-gray-600 mt-1">2023–2025 • Senior</p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold">Barstow Community College — A.A. English</h3>
              <p className="text-xs text-gray-600 mt-1">2020–2022 • Summa Cum Laude</p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Explore my work across speaking, teaching, advocacy, and international engagement.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                id: "speaking",
                title: "Speaking & Media",
                body:
                  "Keynotes, interviews, and press appearances.",
              },
              {
                id: "teaching",
                title: "Teaching & Curriculum",
                body:
                  "Community education and program leadership.",
              },
              {
                id: "advocacy",
                title: "Advocacy & Policy Work",
                body:
                  "Legislative action and nonprofit partnerships.",
              },
              {
                id: "international",
                title: "International Work",
                body:
                  "Global correctional education collaborations.",
              },
            ].map(card => (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-xs text-gray-600 mt-2">{card.body}</p>
              </button>
            ))}
          </div>
        </section>

        {/* SPEAKING — includes YouTube videos */}
        <section id="speaking">
          <h2 className="text-xl md:text-2xl font-semibold">Speaking & Media</h2>
          <p className="mt-2 text-gray-700 text-sm">
            Select talks and moments from my speaking work.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-sm md:text-base">Featured Testimonial</h3>
              <div className="mt-3 aspect-video rounded-lg overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nDHfURsqDWs"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-sm md:text-base">Commencement Speech</h3>
              <div className="mt-3 aspect-video rounded-lg overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TFAbGh3ZhkY"
                  title="YouTube video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* TEACHING */}
        <section id="teaching">
          <h2 className="text-xl md:text-2xl font-semibold">Teaching & Curriculum</h2>
          <p className="mt-2 text-gray-700 text-sm">
            Classroom instruction, curriculum development, and international education experience.
          </p>
        </section>

        {/* ADVOCACY */}
        <section id="advocacy">
          <h2 className="text-xl md:text-2xl font-semibold">Advocacy & Policy Work</h2>
          <p className="mt-2 text-gray-700 text-sm">
            Systems reform and community-based advocacy efforts.
          </p>
        </section>

        {/* INTERNATIONAL */}
        <section id="international">
          <h2 className="text-xl md:text-2xl font-semibold">International Work</h2>
          <p className="mt-2 text-gray-700 text-sm">
            Educational and correctional partnerships across Europe.
          </p>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="pt-4">
          <h3 className="text-xl font-semibold">Photo Highlights</h3>
          <p className="mt-2 text-gray-700 text-xs md:text-sm">
            A snapshot of the rooms, communities, and organizations I've had the honor to work with.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photoHighlights.map((item, index) => (
              <figure
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-md transition"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <figcaption className="p-3 text-xs text-gray-700">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-gray-700 text-sm">
            Interested in workshops, coaching, speaking engagements, or partnerships? I’d love to connect.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-sm md:text-base">Contact</h3>
              <p className="mt-3 text-xs text-gray-600">
                Email:{" "}
                <a href="mailto:c.jorgette@yahoo.com" className="underline">
                  c.jorgette@yahoo.com
                </a>
              </p>
              <p className="mt-2 text-xs text-gray-600">Location: Los Angeles, CA</p>
            </div>

            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-sm md:text-base">Quick inquiry</h3>
              <form className="mt-3 grid gap-3">
                <input className="border rounded-md px-3 py-2 text-xs" placeholder="Your name" />
                <input className="border rounded-md px-3 py-2 text-xs" placeholder="Email" />
                <textarea className="border rounded-md px-3 py-2 text-xs" rows={4} placeholder="How can I help?" />
                <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-xs">Send message</button>
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
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-black">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                />
              </div>

              <div className="p-4 flex justify-between gap-4">
                <p className="text-sm text-gray-800">{lightboxItem.caption}</p>
                <button
                  className="text-xs px-2 py-1 border border-gray-200 rounded-md hover:bg-gray-50"
                  onClick={() => setLightboxItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-8 text-center text-xs text-gray-500 border-t pt-4">
          © {new Date().getFullYear()} Jeorgette Cuellar — Built with care
        </footer>
      </main>
    </div>
  );
}
