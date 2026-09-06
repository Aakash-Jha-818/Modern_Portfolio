import { MoveUpRight, CornerDownRight } from "lucide-react";
import React from "react";

const ContactMe = ({ social }) => {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-[#070B18] text-white px-4 py-20 md:px-8 lg:px-12 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="uppercase text-sm md:text-base tracking-[0.25em] text-violet-400 font-semibold">
            Contact Me
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
              great together
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-sm md:text-base">
            Have an idea or project in mind? Feel free to reach out. I&apos;m
            always open to new opportunities and interesting ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Start a project
              </span>
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <MoveUpRight size={20} />
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Have a project in mind?
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              I&apos;m always open to discussing new projects and opportunities.
              Let&apos;s create something amazing together!
            </p>

            <button className="mt-7 flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-violet-500 hover:gap-3">
              Get in Touch
              <MoveUpRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Testimonial
            </span>

            <div className="mt-7 flex gap-3">
              <CornerDownRight
                size={34}
                className="shrink-0 text-violet-400"
              />
              <p className="text-sm md:text-base leading-7 text-slate-300">
                Aakash is an exceptional developer who delivers high-quality
                work on time. His attention to detail and problem-solving
                skills are outstanding.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                alt="Floyed Wagner"
                className="h-11 w-11 rounded-full object-cover border border-white/10"
              />

              <div>
                <h3 className="text-sm font-semibold">Floyed Wagner</h3>
                <p className="text-xs text-slate-500">CEO, TechStart</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Socials
            </span>

            <h3 className="mt-7 text-2xl font-bold">
              Follow me
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Connect with me and check out what I&apos;m building.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {social.map((ac) => (
                <a
                  href={ac.link}
                  key={ac.id}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  {ac.icon}
                </a>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 group-hover:w-full" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;
