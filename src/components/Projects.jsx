import React from "react";
import { MoveRight } from "lucide-react";
// Make sure to format or pretteir the document other I do write messy codes.

const Projects = ({ project }) => {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-[#070B18] text-white px-4 py-20 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-12">
          <span className="flex justify-center items-center gap-2 text-sm md:text-base uppercase tracking-[0.25em] text-violet-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_12px_#8b5cf6]" />
            Featured Projects
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Things I&apos;ve{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
              Built
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-slate-400">
            Some of the projects I&apos;ve built while learning, experimenting
            and improving my development skills.
          </p>
        </div>

        {/* Projects Container... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((item) => (
            <article
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/8
                bg-white/3
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
                hover:bg-white/5
              "
            >
              {/* Image wala part */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />


                <div className="absolute inset-0 bg-linear-to-t from-[#070B18] via-transparent to-transparent opacity-80" />


                <div className="absolute top-4 left-4">
                  <span className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/10 bg-black/50 px-2 font-mono text-xs font-semibold text-slate-200 backdrop-blur-md">
                    #{String(item.id).padStart(2, "0")}
                  </span>
                </div>


              </div>

              {/* Project ki details */}
              <div className="p-5">

                {/* Project name */}
                <h3 className="text-left text-xl font-semibold text-white">
                  {item.name}
                </h3>

                {/* Project description */}
                <p className="mt-2 min-h-12 text-left text-sm leading-6 text-slate-400">
                  {item.description}.
                </p>

                {/* View project btn */}
                <div className="mt-5">
                  <a
                    href="https://github.com/Aakash-Jha-818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-violet-500/30
                      bg-violet-500/10
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-violet-300
                      transition-all
                      duration-300
                      hover:bg-violet-500
                      hover:text-white
                      hover:border-violet-500
                    "
                  >
                    View Project
                    <MoveRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

            
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
