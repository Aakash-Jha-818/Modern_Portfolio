import React from "react";
import { Calendar } from "lucide-react";

const About = ({ data }) => {
  return (
    <section
      id="About"
      className="min-h-screen bg-[#070B18] text-white px-4 py-20 md:px-8 lg:px-12 flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="flex flex-col">
          <span className="uppercase text-sm md:text-base tracking-[0.25em] text-violet-400 font-semibold">
            About Me
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            I&apos;m passionate about creating{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
              digital solutions
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm md:text-base lg:text-lg leading-7 text-slate-400">
            With 1.5 years of experience in web development, I help businesses
            and individuals bring their ideas to life through clean, efficient,
            and user-friendly code.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-violet-400">
              <Calendar size={19} />
            </div>

            <div>
              <p className="text-xs text-slate-500">Experience</p>
              <p className="font-medium text-slate-200">1.5+ Years</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
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
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-xl
                    border border-violet-500/20
                    bg-violet-500/10
                    text-violet-400
                    transition-all duration-300
                    group-hover:bg-violet-500/20
                    group-hover:border-violet-500/40
                  "
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    {item.no}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.title}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
