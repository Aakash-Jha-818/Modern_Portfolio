import React, { useState, useRef, useCallback } from "react";

const DotIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

const coderData = {
  name: "Aakash Jha",
  role: "Full Stack Developer",
  seniority: "Junior Dev",
  location: "India",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "GitHub",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Docker",
    "Kubernatives",
  ],
};

const CoderProfileCard = () => {
  const cardRef = useRef(null);

  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    shadowX: 0,
    shadowY: 20,
    isHovered: false,
  });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    const maxRotation = 10;

    const rotateX = yPct * -1 * maxRotation;
    const rotateY = xPct * maxRotation;

    setTransform((prev) => ({
      ...prev,
      rotateX,
      rotateY,
      glowX: (mouseX / rect.width) * 100,
      glowY: (mouseY / rect.height) * 100,
      shadowX: rotateY * 0.8,
      shadowY: 20 - rotateX * 0.6,
    }));
  }, []);

  const handleMouseEnter = useCallback(() => {
    setTransform((prev) => ({
      ...prev,
      isHovered: true,
    }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glowX: 50,
      glowY: 50,
      shadowX: 0,
      shadowY: 20,
      isHovered: false,
    });
  }, []);

  return (
    <div
      className="w-full"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        tabIndex={0}
        style={{
          transform: `
            perspective(1000px)
            rotateX(${transform.rotateX}deg)
            rotateY(${transform.rotateY}deg)
            scale3d(1, 1, 1)
          `,
          boxShadow: `
            ${transform.shadowX}px
            ${transform.shadowY}px
            35px
            rgba(0, 0, 0, 0.4)
          `,
          transition:
            "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full mx-auto drop-shadow-2xl bg-linear-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] rounded-lg border shadow-lg overflow-hidden"
      >
        {/* Glow */}
        <div
          className="absolute inset-0 z-0 rounded-lg pointer-events-none"
          style={{
            background: `
              radial-gradient(
                circle at ${transform.glowX}% ${transform.glowY}%,
                rgba(255, 255, 255, 0.12),
                transparent
              )
            `,
            opacity: transform.isHovered ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          aria-hidden="true"
        />

        {/* Conent of Our card.. */}
        <div
          className="relative z-10"
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Top gradient */}
          <div className="flex flex-row">
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600" />

            <div className="h-0.5 w-full bg-linear-to-r from-violet-600 to-transparent" />
          </div>

          {/* Header */}
          <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-[#000000]">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">
              coder.js
            </div>
          </div>

          {/* Code */}
          <div className="overflow-hidden border-t-2 border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 blur-3xl" />

            <div className="relative flex">
              {/* Line numbers */}
              <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="leading-relaxed select-none opacity-70"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code content */}
              <code className="font-mono text-xs md:text-sm lg:text-base w-full">
                <div>
                  <span className="mr-2 text-pink-500 dark:text-pink-400">
                    const
                  </span>

                  <span className="mr-2 text-violet-500 dark:text-violet-400">
                    coder
                  </span>

                  <span className="mr-2 text-pink-500 dark:text-pink-400">
                    =
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    {"{"}
                  </span>
                </div>

                <div className="pl-6">
                  <span className="text-zinc-800 dark:text-white">
                    name:
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    '
                  </span>

                  <span className="text-green-600 dark:text-green-400">
                    {coderData.name}
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    ',
                  </span>
                </div>

                <div className="pl-6">
                  <span className="text-zinc-800 dark:text-white">
                    role:
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    '
                  </span>

                  <span className="text-green-600 dark:text-green-400">
                    {coderData.role}
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    ',
                  </span>
                </div>

                <div className="pl-6">
                  <span className="text-zinc-800 dark:text-white">
                    seniority:
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    '
                  </span>

                  <span className="text-green-600 dark:text-green-400">
                    {coderData.seniority}
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    ',
                  </span>
                </div>

                <div className="pl-6">
                  <span className="text-zinc-800 dark:text-white">
                    location:
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    '
                  </span>

                  <span className="text-green-600 dark:text-green-400">
                    {coderData.location}
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    ',
                  </span>
                </div>

                <div className="pl-6">
                  <span className="text-zinc-800 dark:text-white">
                    skills:
                  </span>

                  <span className="text-zinc-600 dark:text-gray-400">
                    [
                  </span>

                  <div className="pl-6 flex flex-wrap">
                    {coderData.skills.map((skill, index) => (
                      <span key={skill} className="mr-1">
                        <span className="text-zinc-600 dark:text-gray-400">
                          '
                        </span>

                        <span className="text-cyan-600 dark:text-cyan-400">
                          {skill}
                        </span>

                        <span className="text-zinc-600 dark:text-gray-400">
                          '
                        </span>

                        {index < coderData.skills.length - 1 && (
                          <span className="text-zinc-600 dark:text-gray-400">
                            ,{" "}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <span className="text-zinc-600 dark:text-gray-400">
                    ],
                  </span>
                </div>

                <div>
                  <span className="text-zinc-600 dark:text-gray-400">
                    {"};"}
                  </span>
                </div>
              </code>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-xs text-zinc-600 dark:text-gray-500 flex justify-between items-center">
            <span>UTF-8</span>
            <span>JavaScript</span>
            <span>Ln 12, Col 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      {/* Light background */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
        }}
      />

      {/* Dark background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          {/* Hero content */}
          <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
              <DotIcon />
              Welcome to my profile..
            </div>

            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Hello
                <br />
                I&apos;m{" "}
                <span className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Aakash Jha
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                Learning MERN Stack
              </span>

              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                Clean Code
              </span>

              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                Innovation
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
              Full Stack Developer | DevOps Basics | Crafting frameworks and
              coding the future
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
              <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Learn More
              </button>

              <button className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
                Get Resume
              </button>
            </div>
          </div>

          {/* Coder card */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <CoderProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Portfolio;
