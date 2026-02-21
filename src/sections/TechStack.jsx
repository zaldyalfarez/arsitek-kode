import { techStackData } from "../assets/data/techStackData";

const TechStack = () => {
  return (
    <section className="flex flex-col items-center" id="teknologi">
      <div className="max-w-240 w-full px-4 sm:px-6 lg:px-10 mb-10">
        <h1 className="text-black tracking-tight text-[40px] font-extrabold leading-tight text-center pb-3">
          Teknologi Pilihan Kami
        </h1>
        <p className="text-[#616889] text-lg font-normal leading-normal text-center max-w-2xl mx-auto">
          Kami memanfaatkan framework terdepan dan solusi database handal untuk
          membangun sistem web yang cepat, skalabel, dan siap mendukung
          pertumbuhan bisnis Anda.
        </p>
      </div>

      <div className="max-w-240 w-full px-4">
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {techStackData.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-2xl bg-soft-gray-light px-4 py-2 shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <div
                className="w-6 h-6"
                dangerouslySetInnerHTML={{ __html: tech.icon }}
              />
              <p className="text-text-soft-light text-sm font-medium leading-normal">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
