const Workflow = () => {
  return (
    <>
      <section className="bg-white" id="proses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Proses Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 mt-2">
              Alur Kerja Pengembangan
            </h2>
            <p className="text-[#616889] mt-4 max-w-xl mx-auto">
              Dari konsep awal hingga pemeliharaan berkelanjutan, kami mengikuti
              metodologi agile yang ketat untuk memastikan keberhasilan proyek.
            </p>
          </div>

          <div className="relative flex flex-wrap lg:flex-nowrap justify-between gap-8 py-12">
            <div className="absolute top-2/6 left-0 w-full h-0.5 bg-gray-200 z-0 hidden lg:block"></div>

            <div className="relative flex flex-col items-center flex-1 min-w-40 group z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 mb-4 shadow-xl border-2 border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">search</span>
              </div>
              <h3 className="font-bold text-[#111218] mb-2">Analisis</h3>
              <p className="text-xs text-center text-[#616889] px-2">
                Mengumpulkan kebutuhan proyek dan menentukan ruang lingkup.
              </p>
            </div>

            <div className="relative flex flex-col items-center flex-1 min-w-40 group z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 mb-4 shadow-xl border-2 border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">brush</span>
              </div>
              <h3 className="font-bold text-[#111218] mb-2">Desain</h3>
              <p className="text-xs text-center text-[#616889] px-2">
                Prototipe UI/UX dan desain arsitektur sistem.
              </p>
            </div>

            <div className="relative flex flex-col items-center flex-1 min-w-40 group z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 mb-4 shadow-xl border-2 border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="font-bold text-[#111218] mb-2">Pengembangan</h3>
              <p className="text-xs text-center text-[#616889] px-2">
                Sprint coding agile dengan siklus umpan balik rutin.
              </p>
            </div>

            <div className="relative flex flex-col items-center flex-1 min-w-40 group z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 mb-4 shadow-xl border-2 border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-bold text-[#111218] mb-2">Pengujian</h3>
              <p className="text-xs text-center text-[#616889] px-2">
                QA yang ketat, perbaikan bug, dan penyetelan performa.
              </p>
            </div>

            <div className="relative flex flex-col items-center flex-1 min-w-40 group z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 mb-4 shadow-xl border-2 border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h3 className="font-bold text-[#111218] mb-2">Deployment</h3>
              <p className="text-xs text-center text-[#616889] px-2">
                Peluncuran aman ke lingkungan produksi.
              </p>
            </div>

            <div className="relative flex flex-col items-center flex-1 min-w-40 group z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 mb-4 shadow-xl border-2 border-primary bg-white text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h3 className="font-bold text-[#111218] mb-2">Pemeliharaan</h3>
              <p className="text-xs text-center text-[#616889] px-2">
                Dukungan berkelanjutan dan peningkatan iteratif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workflow;
