import React from "react";

const Skills = ({ skills }) => {
  return (
    <section
      id="Skills"
      className="min-h-screen bg-[#070B18] text-white px-4 py-20 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm md:text-base uppercase tracking-[0.25em] text-violet-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_12px_#8b5cf6]" />
            My Skills
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
              Work With
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-slate-400">
            A collection of technologies I use to build modern, scalable and
            production-ready applications.
          </p>
        </div>

        {/* Skills Grid.... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((d) => (
            <div
              key={d.id}
              className="
                group relative
                overflow-hidden
                rounded-2xl
                border border-white/8
                bg-white/3
                backdrop-blur-md
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-white/5
              "
            >
              {/* Hover effect glowed one*/}
              <div
                className="
                  absolute -right-12 -top-12
                  h-28 w-28
                  rounded-full
                  bg-violet-600/10
                  blur-3xl
                  transition-all duration-500
                  group-hover:bg-violet-500/20
                "
              />

              {/* Card Header.. */}
              <div className="relative flex items-center justify-between gap-4">

                <div className="flex items-center gap-3 min-w-0">

                  {/* Icons */}
                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-white/10
                      bg-slate-900/80
                      text-xl
                      transition-all duration-300
                      group-hover:border-violet-500/30
                      group-hover:scale-105
                    "
                  >
                    {d.icon}
                  </div>

                  {/* Name */}
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-semibold text-slate-100 truncate">
                      {d.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Technical Skill
                    </p>
                  </div>
                </div>

                {/* Percentages I learnt  */}
                <span className="shrink-0 font-mono text-sm font-medium text-violet-400">
                  {d.percent}
                </span>
              </div>

              {/* Progress Baar...*/}
              <div className="relative mt-5">

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-linear-to-r
                      from-violet-600
                      via-violet-500
                      to-blue-400
                      shadow-[0_0_10px_rgba(139,92,246,0.45)]
                      transition-all
                      duration-700
                      group-hover:shadow-[0_0_16px_rgba(139,92,246,0.7)]
                    "
                    style={{ width: d.percent }}
                  />
                </div>

                {/* Progress labels */}
                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-600">
                  <span>Learning</span>
                  <span>Proficiency</span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-px w-0
                  bg-linear-to-r from-transparent via-violet-500 to-transparent
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
