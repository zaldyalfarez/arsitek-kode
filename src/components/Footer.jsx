const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#f0f1f4] py-16 lg:mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2
                className="text-black text-lg font-bold tracking-tight"
                id="software-house"
              >
                Arsitek Kode
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Software house terkemuka yang mengkhususkan diri dalam aplikasi
              web enterprise dan solusi cloud yang skalabel.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                className="size-10 rounded-lg bg-gray-100 flex items-center justify-center text-[#616889] hover:text-primary transition-colors"
                href="mailto:business@arsitek-kode.com"
              >
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>

              <a
                className="size-10 rounded-lg bg-gray-100 flex items-center justify-center text-[#616889] hover:text-primary transition-colors"
                href="https://instagram.com/arsitek.kode"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 1 }}
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>

              <a
                className="size-10 rounded-lg bg-gray-100 flex items-center justify-center text-[#616889] hover:text-primary transition-colors"
                href="https://wa.me/6287825327175"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-black mb-6 uppercase text-xs tracking-widest">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-600">
              <li>
                <a href="#layanan" className="hover:text-primary">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#proses" className="hover:text-primary">
                  Proses
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-primary">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-primary">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-6 uppercase text-xs tracking-widest">
              Solusi
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-600">
              <li>
                <button className="hover:text-primary">
                  Aplikasi Web Kustom
                </button>
              </li>
              <li>
                <button className="hover:text-primary">Backend & API</button>
              </li>
              <li>
                <button className="hover:text-primary">Desain UI/UX</button>
              </li>
              <li>
                <button className="hover:text-primary">Integrasi Sistem</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-6 uppercase text-xs tracking-widest">
              Newsletter
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Dapatkan wawasan teknologi terbaru langsung ke email Anda.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="bg-gray-100 rounded-lg text-sm h-11 px-3"
              />
              <button className="bg-primary text-white font-bold h-11 rounded-lg hover:bg-opacity-90 transition-all text-sm">
                Langganan
              </button>
            </form>
          </div>
        </div>

        <div className="pt-14 border-t border-[#f0f1f4] flex justify-center">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Arsitek Kode Systems. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
