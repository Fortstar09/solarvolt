import { useState, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const [currentSlide] = useState(0);

  const categories = [
    "Landscape",
    "Wildlife",
    "Architectural",
    "Travel",
    "Portrait",
  ];

  const projects = [
    // {
    //   id: 1,
    //   title: "Lonely Life at the Baltimore",
    //   subtitle: "Shout with angry sloon",
    //   image: "/hero/hero-img.jpg",
    // },
    {
      id: 2,
      title: "Lonely Life at the Lagos Nigeria",
      subtitle: "clean energy",
      image: "/hero/hero-img.jpg",
    },
    {
      id: 3,
      title: "Silent Inverter that help to keep business",
      subtitle: "No Sound pollution",
      image: "/hero/hero-img.jpg",
    },
  ];

  useEffect(() => {
    const headingEl = document.querySelector(".hero-heading");
    const tagsEl = document.querySelector(".hero-tags");
    const carouselEl = document.querySelector(".hero-carousel");

    if (headingEl) {
      gsap.fromTo(
        headingEl,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
      );
    }

    if (tagsEl) {
      gsap.fromTo(
        tagsEl,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 },
      );
    }

    if (carouselEl) {
      gsap.fromTo(
        carouselEl,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 },
      );
    }
  }, []);

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % projects.length);
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  //   };

  return (
    <main className="relative h-dvh w-full pt-24 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/hero/hero-img.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full h-full relative z-10 flex flex-col justify-between pt-30">
        {/* Main Heading */}
        <div className="hero-heading max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-normal text-white font-bricolage">
            Capturing beautiful moment lens shutter
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex gap-8 justify-between items-end pb-10 scroll-">
          {/* Categories */}
          <div className="hero-tags flex items-start justify-start flex-wrap gap-3 max-w-md">
            {categories.map((category) => (
              <button
                key={category}
                className="
                  px-4 py-2
                  bg-white/20
                  text-white text-sm
                  rounded-full
                  border border-white/30
                  hover:bg-white/30
                  transition
                  backdrop-blur-xs
                "
              >
                {category}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="no-scrollbar max-w-150">
            <div className="flex items-center gap-4 max-w-112.5">
              {/* Carousel Controls */}
              <span className="text-white text-sm font-medium whitespace-nowrap">
                0{currentSlide + 1}
              </span>

              {/* Progress Bar */}
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / projects.length) * 100}%`,
                  }}
                />
              </div>

              {/* Slide Counter */}
              <span className="text-white text-sm font-medium whitespace-nowrap">
                0{projects.length}
              </span>
            </div>

            {/* Carousel Cards */}
            <div className="flex gap-6 mt-6 overflow-x-auto scroll-smooth no-scrollbar hero-carousel">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`
                    shrink-0 w-full md:w-fit
                    rounded-2xl overflow-hidden
                    transition transform duration-300
                    p-2
                     bg-white/20
                  border border-white/30
                  hover:bg-white/30
                  backdrop-blur-xs
                    ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-60 scale-95"
                    }
                  `}
                >
                  {/* <div
                    className="h-48 relative group cursor-pointer"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white font-semibold text-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div> */}
                  <div className="flex gap-3 justify-between">
                    <img
                      src={project.image}
                      alt="image"
                      className="size-30 rounded-lg"
                    />

                    <div className=" flex flex-col justify-between py-1 max-w-[220px]">
                      <h3 className="text-white  font-medium text-xl">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
