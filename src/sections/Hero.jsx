import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center lg:min-h-screen lg:-mt-10 max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-10"
      id="hero"
    >
      <div className="space-y-6 md:space-y-8">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
          Teknologi untuk Bisnis Anda
        </span>

        <h1 className="text-4xl md:text-6xl font-black leading-[1.2] tracking-tight">
          Menciptakan <span className="text-gray-400">Sistem Web</span> <br />
          Efisien dan juga Berkualitas
        </h1>

        <p className="text-lg md:text-xl text-[#616889] max-w-2xl leading-relaxed mx-auto">
          Kami membangun aplikasi web kustom yang skalabel, aman, dan
          disesuaikan dengan kebutuhan bisnis Anda. Dari ide hingga
          implementasi, kami pastikan setiap proyek memberikan hasil optimal.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <a
            href="https://wa.me/6287825327175?text=Halo%2C%20saya%20ingin%20konsultasi%20proyek."
            className="flex min-w-40 items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30"
          >
            Mulai Proyek Anda
          </a>

          <Link
            to="/portofolio"
            className="flex min-w-40 items-center justify-center rounded-lg h-14 px-8 bg-white border border-gray-200 text-[#111218] text-base font-bold hover:bg-gray-50 transition-colors"
          >
            Lihat Hasil Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
