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

  // ✅ MOVED HERE — OUTSIDE JSX
  const photoHighlights = [
    {
      src: "/photo1.jpg",
      alt: "Press coverage of Olive Crest Pick-A-Purse Luncheon",
      caption:
        "Press coverage of Olive Crest’s Pick-A-Purse Luncheon, where over $100,000 was raised.",
    },
    {
      src: "/photo2.jpg",
      alt: "Large group of youth and mentors presenting certificates",
      caption:
        "Celebrating youth leadership and empowerment with the I AM program community.",
    },
    {
      src: "/photo3.jpg",
      alt: "Olive Crest outdoor dinner event",
      caption:
        "Honoring community partnership and continued support for displaced youth.",
    },
    {
      src: "/photo4.jpg",
      alt: "Community luncheon group photo",
      caption:
        "Community members gathering at the Olive Crest summer luncheon.",
    },
    {
      src: "/photo5.jpg",
      alt: "Podcast interview recording",
      caption:
        "Sharing my story and lived experience during a filmed podcast interview.",
    },
    {
      src: "/photo6.jpg",
      alt: "I AM program celebration photo",
      caption:
        "Celebrating mentorship, growth, and community support with the I AM program.",
    },
    {
      src: "/photo7.jpg",
      alt: "Orange County event photo",
      caption:
        "Gathering with community members at an Olive Crest donor appreciation event.",
    },
    {
      src: "/photo8.jpg",
      alt: "State Capitol advocacy trip",
      caption:
        "Advocacy trip to the California State Capitol with Underground Scholars.",
    },
    {
      src: "/photo9.jpg",
      alt: "European correctional facility delegation trip",
      caption:
        "International education delegation visit in Denmark, collaborating on justice reform.",
    },
    {
      src: "/photo10.jpg",
      alt: "Group visiting correctional facility in Denmark",
      caption:
        "Observing rehabilitation-centered correctional models in Europe.",
    },
    {
      src: "/photo11.jpg",
      alt: "International education cohort gathering",
      caption:
        "Collaborating with educators and leaders during an international education workshop.",
    },
    {
      src: "/photo12.jpg",
      alt: "Delegation team at community center abroad",
      caption:
        "Meeting with community organizations abroad to explore education partnerships.",
    },
    {
      src: "/photo13.jpg",
      alt: "Group photo from international collaboration",
      caption:
        "Strengthening global partnerships in community education and justice reform.",
    },
    {
      src: "/photo14.jpg",
      alt: "Outdoor community celebration",
      caption:
        "Celebrating shared accomplishments with the international education team.",
    },
  ];

  // ✅ RETURN STARTS HERE
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
            <span onClick={() => scrollToSection("about")} className={navLinkClasses}>
              About
            </span>
            <span onClick={() => scrollToSection("offerings")} className={navLinkClasses}>
              Offerings
            </span>
            <span onClick={() => scrollToSection("education")} className={navLinkClasses}>
              Education
            </span>
            <span onClick={() => scrollToSection("portfolio")} className={navLinkClasses}>
              Portfolio
            </span>
            <span onClick={() => scrollToSection("media")} className={navLinkClasses}>
              Media
            </span>
            <span onClick={() => scrollToSection("contact")} className={navLinkClasses}>
              Contact
            </span>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* About Section */}
        {/* (YOUR ORIGINAL ABOUT, OFFERINGS, EDUCATION, PORTFOLIO, MEDIA, CONTACT SECTIONS REMAIN EXACTLY AS YOU POSTED) */}

        {/* ---------------- PHOTO HIGHLIGHTS SECTION ---------------- */}
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

        {/* Lightbox */}
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
                <p className="text-sm text-gray-800">{lightboxItem.caption}</p>
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
