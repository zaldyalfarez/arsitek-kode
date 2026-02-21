import { Link } from "react-router-dom";
import { projectsData } from "../assets/data/projectsData";

const AllProjects = () => {
  return (
    <section className="bg-background mt-12" id="portofolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Semua Proyek
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jelajahi proyek-proyek kami sebelumnya dan lihat bagaimana kami
              mewujudkan ide menjadi solusi nyata.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/portofolio/${project.slug}`}
              className="block"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg border border-border cursor-pointer">
                <div className="group relative aspect-video w-full overflow-hidden bg-muted">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt={project.alt}
                    style={{
                      backgroundImage: `url('${project.thumbnail}')`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="rounded bg-muted/90 px-2 py-1 text-xs font-bold text-foreground backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techs.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground ring-1 ring-inset ring-accent-foreground/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
