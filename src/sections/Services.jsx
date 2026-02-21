import { servicesData } from "../assets/data/servicesData";

const Services = () => {
  return (
    <>
      <section className="bg-white px-4 sm:px-6 lg:px-10" id="layanan">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Layanan Spesialis Kami
          </h2>
          <p className="text-[#616889] max-w-2xl mx-auto leading-relaxed">
            Kami menghadirkan solusi digital lengkap, mulai dari pengembangan
            web dan aplikasi, integrasi sistem, hingga desain UI/UX modern,
            untuk membantu bisnis Anda.
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-xl border border-[#dbdde6] shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-6">{service.title}</h3>

                  <div className="space-y-6 grow">
                    <div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${service.colors.problem}`}
                      >
                        Masalah
                      </span>
                      <p className="text-sm text-[#616889]">
                        {service.problem}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${service.colors.solution}`}
                      >
                        Solusi
                      </span>
                      <p className="text-sm text-[#111218] font-medium">
                        {service.solution}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${service.colors.benefit}`}
                      >
                        Manfaat
                      </span>
                      <p className="text-sm text-[#616889]">
                        {service.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
