import { useParams, Navigate } from "react-router-dom";
import { projectsData } from "../assets/data/projectsData";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-background-light text-[#111218] transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <section className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
                {project.category}
              </div>
              <h1 className="text-[#111218] text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {project.heroDescription}
              </p>
              <div className="flex gap-4">
                <button className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-all shadow-lg hover:translate-y-0.5">
                  Lihat Demo Langsung
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
              <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                  src={project.heroImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-4 gap-8">
              {Object.entries(project.stats).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 p-6 rounded-xl bg-background-light border border-gray-100"
                >
                  <span className="material-symbols-outlined text-accent-cyan mb-2">
                    {key === "industri"
                      ? "business"
                      : key === "waktu"
                        ? "schedule"
                        : key === "teknologi"
                          ? "code"
                          : "groups"}
                  </span>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="text-[#111218] font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 flex flex-col gap-16">
              <article>
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  01. Tantangan
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  {project.challenge.title}
                </h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>{project.challenge.description}</p>
                  <ul className="list-none space-y-3">
                    {project.challenge.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-red-500 mt-1">
                          error
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article>
                <h2 className="text-accent-cyan text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  02. Solusi
                </h2>
                <h3 className="text-3xl font-bold mb-6">
                  {project.solution.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.solution.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  {project.solution.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm"
                    >
                      <h4 className="font-bold mb-2 text-primary">
                        {feature.title}
                      </h4>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </article>

              <section className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden border border-gray-200 aspect-video bg-gray-200"
                  >
                    <img
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                      src={img}
                    />
                  </div>
                ))}
              </section>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl sticky top-28">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined">analytics</span>
                  Dampak Proyek
                </h3>
                <div className="space-y-8">
                  {project.impact.map((impact, idx) => (
                    <div key={idx}>
                      <p className="text-4xl font-black mb-1">
                        {impact.value}%
                      </p>
                      <p className="text-white/70 text-sm font-medium">
                        {impact.title}
                      </p>
                      <div className="w-full bg-white/20 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div
                          className="bg-white h-full transition-all duration-700"
                          style={{ width: `${impact.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>

        <section className="bg-primary py-24 px-4 sm:px-6 lg:px-10 text-center text-white">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Siap membangun proyek Anda berikutnya?
            </h2>
            <p className="text-gray-400 text-lg">
              Kami membantu perusahaan seperti milik Anda membangun perangkat
              lunak kustom kelas dunia. Diskusikan roadmap Anda hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://wa.me/628123456789?text=Halo%2C%20saya%20ingin%20konsultasi%20proyek."
                target="_blank"
                className="flex cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white text-primary text-lg font-bold transition-all shadow-lg hover:bg-opacity-90"
              >
                Mulai Proyek Anda
              </a>
              <Link
                to="/portofolio"
                className="flex cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/10 text-white text-lg font-bold transition-all hover:bg-white/20 border border-white/20"
              >
                Jelajahi Layanan Kami
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
