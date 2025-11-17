import React, { useState } from "react";


function App() {
  const [lightboxItem, setLightboxItem] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
          
  const navLinkClasses =
    "hover:underline cursor-pointer text-gray-700 text-xs";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-40">
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
          <nav className="hidden md:flex gap-5">
            <span
              onClick={() => scrollToSection("about")}
              className={navLinkClasses}
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("offerings")}
              className={navLinkClasses}
            >
              Offerings
            </span>
            <span
              onClick={() => scrollToSection("education")}
              className={navLinkClasses}
            >
              Education
            </span>
            <span
              onClick={() => scrollToSection("portfolio")}
              className={navLinkClasses}
            >
              Portfolio
            </span>
            <span
              onClick={() => scrollToSection("media")}
              className={navLinkClasses}
            >
              Media
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className={navLinkClasses}
            >
              Contact
            </span>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Hero / About */}
        <section
          id="about"
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Build the life you want — from where you are now.
            </h1>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              I teach the tools, habits, and community practices that help
              people transform a life they don’t want into a life they do. My
              work centers displaced youth, including those experiencing
              homelessness and transitions into or out of foster care, as well
              as people and families impacted by incarceration across Los
              Angeles County and beyond.
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

          <aside className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold">Snapshot</h3>
            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li>
                Advocate for displaced youth, especially those experiencing
                homelessness and foster care transitions.
              </li>
              <li>
                Educator dedicated to rehabilitation resources for
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
          </aside>
        </section>

        {/* Offerings */}
        <section id="offerings" className="pt-4">
          <h2 className="text-2xl font-semibold">What I offer</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Practical, research-informed programming and one-on-one coaching
            that help people build tangible structures for life change:
            academically, emotionally, and in community.
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
            ].map((card) => (
              <article
                key={card.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-sm md:text-base">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="pt-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center font-semibold text-sm">
                  U
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    UCLA — B.A. Sociology
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    2023 - 2025 • Senior
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    UCLA Leadership Academy 2025 Cohort • Underground
                    Scholars Policy Fellowship
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-amber-100 flex items-center justify-center font-semibold text-sm">
                  B
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Barstow Community College — A.A. in English
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    2020 - 2022 • Summa Cum Laude
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    All California Academic Awardee • All USA Academic
                    Nominee • Commencement Speaker 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio hub */}
        <section id="portfolio" className="pt-4">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Explore my work across speaking, teaching, advocacy, and
            international engagement.
          </p>

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
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full hover:shadow-md"
              >
                <h3 className="text-sm md:text-base font-semibold">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  {card.body}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Media section with videos */}
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
              <div className="mt-3 aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/nDHfURsqDWs"
                  title="Testimonial film"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-sm md:text-base">
                College Commencement Speech
              </h3>
              <div className="mt-3 aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/TFAbGh3ZhkY"
                  title="Commencement speech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Simple photo highlight grid */}
          const photoHighlights = [
  {
    src: "/photo1.jpg",
    alt: "Press coverage of Olive Crest Pick-A-Purse Luncheon",
    caption: "Press coverage of Olive Crest’s Pick-A-Purse Luncheon, where over $100,000 was raised.",
  },
  {
    src: "/photo2.jpg",
    alt: "Large group of youth and mentors holding certificates",
    caption: "Celebrating youth leadership and empowerment with the I AM program community.",
  },
  {
    src: "/photo3.jpg",
    alt: "Olive Crest outdoor dinner event",
    caption: "Honoring community partnership and continued support for displaced youth.",
  },
  {
    src: "/photo4.jpg",
    alt: "Community luncheon group photo",
    caption: "Community members gathering at the Olive Crest summer luncheon.",
  },
  {
    src: "/photo5.jpg",
    alt: "Podcast interview recording",
    caption: "Sharing my story and lived experience during a filmed podcast interview.",
  },
  {
    src: "/photo6.jpg",
    alt: "I AM program celebration photo",
    caption: "Celebrating mentorship, growth, and community support with the I AM program.",
  },
  {
    src: "/photo7.jpg",
    alt: "Orange County event photo",
    caption: "Gathering with community members at an Olive Crest donor appreciation event.",
  },
  {
    src: "/photo8.jpg",
    alt: "State Capitol advocacy trip",
    caption: "Advocacy trip to the California State Capitol with Underground Scholars.",
  },
  {
    src: "/photo9.jpg",
    alt: "European correctional facility delegation trip",
    caption: "International education delegation visit in Denmark, collaborating on justice reform.",
  },
  {
    src: "/photo10.jpg",
    alt: "Group visiting correctional facility in Denmark",
    caption: "Observing rehabilitation-centered correctional models in Europe.",
  },
  {
    src: "/photo11.jpg",
    alt: "International education cohort gathering",
    caption: "Collaborating with educators and leaders during an international education workshop.",
  },
  {
    src: "/photo12.jpg",
    alt: "Delegation team at community center abroad",
    caption: "Meeting with community organizations abroad to explore education partnerships.",
  },
  {
    src: "/photo13.jpg",
    alt: "Group photo from international collaboration",
    caption: "Strengthening global partnerships in community education and justice reform.",
  },
  {
    src: "/photo14.jpg",
    alt: "Outdoor community celebration",
    caption: "Celebrating shared accomplishments with the international education team.",
  },
];

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
                    className="w-full h-40 object-cover"
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

export default App;
