const Value = () => {
  return (
    <section className="relative overflow-hidden" id="keuntungan">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Mengapa Memilih Layanan Utama Kami
          </h2>
          <p className="text-[#616889] max-w-2xl mx-auto leading-relaxed">
            Kami tidak sekadar menulis kode; kami membangun aset bisnis. Tim
            engineering kami menempatkan kinerja, keamanan, dan maintainability
            jangka panjang sebagai prioritas utama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "lock",
              title: "Arsitektur Berfokus Keamanan",
              desc: "Perlindungan setara level enterprise diterapkan pada setiap lapisan solusi kami sejak hari pertama, menjaga data dan operasional Anda tetap aman.",
            },
            {
              icon: "trending_up",
              title: "Sistem yang Skalabel",
              desc: "Arsitektur kami dirancang secara teliti agar dapat dengan mudah menyesuaikan skala, mendukung pertumbuhan dari ratusan hingga jutaan pengguna.",
            },
            {
              icon: "handshake",
              title: "Kemitraan Pasca Peluncuran",
              desc: "Kami menyediakan layanan pemeliharaan khusus dan optimisasi berkelanjutan, memastikan perangkat lunak Anda berkembang sesuai kebutuhan bisnis.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-[#dbdde6] shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="size-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#616889] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
