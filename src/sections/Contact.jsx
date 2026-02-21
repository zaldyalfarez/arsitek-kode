import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Halo, saya ingin konsultasi proyek.\n\nNama: ${name}\nEmail: ${email}\nJenis Proyek: ${projectType}\nPesan: ${message}`;
    const encodedText = encodeURIComponent(text);

    window.open(`https://wa.me/6287825327175?text=${encodedText}`, "_blank");
  };

  return (
    <section id="kontak">
      <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-w-7xl flex-1">
          <h1 className="text-[#111218] tracking-light text-[36px] md:text-[48px] font-bold leading-tight px-4 text-left pb-3 pt-6">
            Ceritakan masalah Anda, <br className="hidden md:block" />
            kami akan membangun solusinya.
          </h1>
          <p className="text-[#616889] text-lg md:text-xl font-normal leading-normal pb-3 pt-1 px-4 max-w-2xl">
            Siap memodernisasi bisnis Anda? Dapatkan konsultasi gratis dari
            pengembang perangkat lunak dan arsitek cloud ahli kami.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col md:flex-row gap-12 max-w-7xl flex-1 px-4">
          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-[#dbdde6]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-end gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111218] text-base font-medium leading-normal pb-2">
                    Nama Lengkap
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111218] focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dbdde6] bg-white focus:border-primary h-14 placeholder:text-[#616889] p-3.75 text-base font-normal leading-normal"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111218] text-base font-medium leading-normal pb-2">
                    Email
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111218] focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dbdde6] bg-white focus:border-primary h-14 placeholder:text-[#616889] p-3.75 text-base font-normal leading-normal"
                    placeholder="mail@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111218] text-base font-medium leading-normal pb-2">
                    Jenis Proyek
                  </p>
                  <div className="relative">
                    <select
                      className="form-input w-full rounded-lg border border-[#dbdde6] bg-white px-4 py-3 pr-10 text-[#111218] text-base font-normal appearance-none focus:outline-0 focus:ring-2 focus:ring-primary focus:border-primary"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <option value="">Pilih Jenis Proyek</option>
                      <option value="Aplikasi Web">Aplikasi Web</option>
                      <option value="Backend & API">Backend & API</option>
                      <option value="Desain UI & UX">Desain UI & UX</option>
                      <option value="Integrasi Sistem">Integrasi Sistem</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        className="h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111218] text-base font-medium leading-normal pb-2">
                    Bagaimana kami bisa membantu?
                  </p>
                  <textarea
                    rows={4}
                    className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111218] focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dbdde6] bg-white focus:border-primary placeholder:text-[#616889] p-3.75 text-base font-normal leading-normal"
                    placeholder="Jelaskan tujuan atau tantangan proyek Anda..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
              >
                <span className="truncate">Kirim Pesan</span>
              </button>

              <p className="text-xs text-center text-[#616889]">
                Kami menghargai privasi Anda. Tidak ada spam, hanya solusi.
              </p>
            </form>
          </div>

          <div className="flex-none w-full md:w-80 flex flex-col gap-8 py-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#111218] text-xl font-bold">Info Kontak</h3>
              <p className="text-[#616889] text-sm">
                Ingin chat langsung? Hubungi kami melalui salah satu kanal
                berikut.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                className="flex items-center gap-4 group p-4 rounded-xl bg-white border border-[#dbdde6] hover:border-primary transition-all"
                href="https://wa.me/6287825327175?text=Halo%2C%20saya%20ingin%20konsultasi%20proyek."
                target="_blank"
              >
                <div className="size-12 flex items-center justify-center rounded-full bg-green-500/10 text-green-600">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "28px" }}
                  >
                    chat
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616889] uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-[#111218] font-semibold group-hover:text-primary transition-colors">
                    087825327175
                  </p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 group p-4 rounded-xl bg-white border border-[#dbdde6] hover:border-primary transition-all"
                href="mailto:business@arsitek-kode.com"
              >
                <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "28px" }}
                  >
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616889] uppercase tracking-wider">
                    Email Kami
                  </p>
                  <p className="text-[#111218] font-semibold group-hover:text-primary transition-colors">
                    business@arsitek-kode.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#dbdde6]">
                <div className="size-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "28px" }}
                  >
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#616889] uppercase tracking-wider">
                    Lokasi Kantor
                  </p>
                  <p className="text-[#111218] font-semibold">
                    Bandung, Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  bolt
                </span>
                Respons Cepat
              </h4>
              <p className="text-sm text-[#111218]">
                Konsultan kami biasanya merespons dalam{" "}
                <span className="font-bold">2 jam kerja</span> untuk pertanyaan
                proyek baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
