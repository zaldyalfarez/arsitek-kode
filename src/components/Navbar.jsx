import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "hero", label: "Beranda", offset: 0 },
  { id: "layanan", label: "Layanan", offset: 80 },
  { id: "keuntungan", label: "Keuntungan", offset: 165 },
  { id: "proses", label: "Proses", offset: 175 },
  { id: "teknologi", label: "Teknologi", offset: 250 },
  { id: "portofolio", label: "Portofolio", offset: 85 },
  { id: "kontak", label: "Kontak", offset: 65 },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const isClickingRef = useRef(false);

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const handleScroll = () => {
      if (isClickingRef.current) return;

      const scrollPosition = window.scrollY + 90;
      let current = sections[0].label;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop = el.offsetTop - (section.offset || 0);
          if (scrollPosition >= sectionTop) {
            current = section.label;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (label, id) => {
    if (window.location.pathname !== "/") return;

    isClickingRef.current = true;
    setActive(label);

    const section = sections.find((s) => s.id === id);
    const el = document.getElementById(id);
    if (el && section) {
      window.scrollTo({
        top: el.offsetTop - (section.offset || 0),
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 500);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f1f4] bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          {window.location.pathname === "/" ? (
            <Link
              to="/"
              className="text-black text-xl font-bold leading-tight tracking-tight"
              id="software-house"
            >
              Arsitek Kode
            </Link>
          ) : (
            <Link
              to="/"
              className="text-black text-xl font-bold leading-tight tracking-tight"
              id="software-house"
            >
              Arsitek Kode
            </Link>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((section) => {
            if (window.location.pathname !== "/") {
              return (
                <Link
                  key={section.id}
                  to={`/#${section.id}`}
                  className="relative text-sm text-gray-600 pb-1 hover:text-primary"
                >
                  {section.label}
                </Link>
              );
            }

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.label, section.id)}
                className={`relative text-sm transition-colors pb-1 ${
                  active === section.label
                    ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full after:transition-all after:duration-300"
                    : "text-gray-600"
                } hover:text-primary`}
              >
                {section.label}
              </button>
            );
          })}
        </nav>

        <a
          href="https://wa.me/6287825327175?text=Halo%2C%20saya%20ingin%20konsultasi%20proyek."
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-21 items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
        >
          Konsultasi
        </a>
      </div>
    </header>
  );
};

export default Navbar;
