import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Zap, TrendingUp, Calendar, Filter } from "lucide-react";
import { getCitiesList, PROJECT_LOCATIONS } from "../data/projects-data-alt";

gsap.registerPlugin(ScrollTrigger);

type FilterType = "all" | "residential" | "commercial" | "industrial";

const ProjectsPage = ({ handleChat }: { handleChat: () => void }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeCity, setActiveCity] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECT_LOCATIONS)[0] | null
  >(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const cities = getCitiesList();

  const filteredProjects = PROJECT_LOCATIONS.filter((project) => {
    const typeMatch = activeFilter === "all" || project.type === activeFilter;
    const cityMatch =
      activeCity === "all" ||
      project.city.toLowerCase() === activeCity.toLowerCase();
    return typeMatch && cityMatch;
  });

  // Animate cards on filter change
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".project-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
        },
      );
    }
  }, [activeFilter, activeCity]);

  // Animate stats on load
  useEffect(() => {
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll(".stat-item"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const WhatsappMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=2347019155892&text=I+will+like+a+free+Consultation+with+your+brand`,
      "_blank",
    );
  };

  //   const totalSavings = filteredProjects.reduce((acc) => acc + 1, 0);
  const avgMonthSavings = Math.floor(
    filteredProjects.reduce((acc, proj) => {
      const num = parseInt(proj.savingsPerMonth.replace(/[₦,+]/g, ""));
      return acc + num;
    }, 0) / (filteredProjects.length || 1),
  );

  return (
    <div className="min-h-screen w-full bg-white pt-28 md:pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-light text-black/90 font-bricolage mb-4 leading-tight">
            Our{" "}
            <span className="text-teal-600 font-normal">Project Portfolio</span>
          </h1>
          <p className="text-black/60 text-lg max-w-2xl leading-relaxed">
            See where we've successfully installed solar systems across Nigeria.
            From residential homes to large commercial operations, our portfolio
            speaks to our commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="stat-item bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {PROJECT_LOCATIONS.length}+
            </div>
            <p className="text-black/60 font-medium">Successful Projects</p>
          </div>

          <div className="stat-item bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {cities.length}
            </div>
            <p className="text-black/60 font-medium">Cities Covered</p>
          </div>

          <div className="stat-item bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="text-2xl font-bold text-green-600 mb-2">
              ₦{Math.round(avgMonthSavings / 1000)}K/mo
            </div>
            <p className="text-black/60 font-medium">Avg Monthly Savings</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 mb-12">
        <div className="space-y-6">
          {/* Type Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter size={18} className="text-teal-600" />
              <h3 className="text-sm font-semibold text-black/80 uppercase tracking-widest">
                Filter by Type
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "all" as FilterType, label: "All Projects" },
                { value: "residential" as FilterType, label: "Residential" },
                { value: "commercial" as FilterType, label: "Commercial" },
                { value: "industrial" as FilterType, label: "Industrial" },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                    activeFilter === filter.value
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-white text-black border-black/10 hover:border-black/30"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* City Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={18} className="text-teal-600" />
              <h3 className="text-sm font-semibold text-black/80 uppercase tracking-widest">
                Filter by Location
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCity("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                  activeCity === "all"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-black border-black/10 hover:border-black/30"
                }`}
              >
                All Cities
              </button>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                    activeCity === city
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-white text-black border-black/10 hover:border-black/30"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 mb-8">
        <p className="text-sm text-black/50">
          Showing {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""}
          {activeFilter !== "all" && ` in ${activeFilter}`}
          {activeCity !== "all" && ` from ${activeCity}`}
        </p>
      </div>

      {/* Projects Grid */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 mb-20"
      >
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-xl hover:border-teal-600/20 transition duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-300"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold text-black group-hover:text-teal-600 transition mb-2 line-clamp-2">
                    {project.name}
                  </h4>

                  {/* Location */}
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin
                      size={16}
                      className="text-teal-600 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-sm text-black/70">{project.city}</p>
                      <p className="text-xs text-black/40">{project.state}</p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="space-y-3 mb-4 flex-1">
                    {/* System Size */}
                    <div className="flex items-start gap-2">
                      <Zap
                        size={14}
                        className="text-teal-600 flex-shrink-0 mt-1"
                      />
                      <div>
                        <p className="text-xs text-black/40">System Size</p>
                        <p className="text-sm font-semibold text-black">
                          {project.systemSize}
                        </p>
                      </div>
                    </div>

                    {/* Monthly Savings */}
                    <div className="flex items-start gap-2">
                      <TrendingUp
                        size={14}
                        className="text-green-600 flex-shrink-0 mt-1"
                      />
                      <div>
                        <p className="text-xs text-black/40">Monthly Savings</p>
                        <p className="text-sm font-semibold text-green-600">
                          {project.savingsPerMonth}
                        </p>
                      </div>
                    </div>

                    {/* Completion */}
                    <div className="flex items-start gap-2">
                      <Calendar
                        size={14}
                        className="text-blue-600 flex-shrink-0 mt-1"
                      />
                      <div>
                        <p className="text-xs text-black/40">Completed</p>
                        <p className="text-sm font-semibold text-black">
                          {project.completionDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full px-4 py-2 bg-teal-600 text-white text-sm rounded-full font-medium hover:bg-teal-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-black/60 text-lg">
              No projects found matching your filters.
            </p>
          </div>
        )}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="h-64 overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${selectedProject.image}')`,
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-600/10 text-teal-600 text-xs font-semibold uppercase rounded-full mb-2">
                    {selectedProject.type}
                  </span>
                  <h2 className="text-3xl font-bold text-black">
                    {selectedProject.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-black/50 hover:text-black transition"
                >
                  ✕
                </button>
              </div>

              <p className="text-black/60 text-lg mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest mb-2">
                    Location
                  </p>
                  <p className="font-semibold text-black">
                    {selectedProject.city}, {selectedProject.state}
                  </p>
                  <p className="text-sm text-black/50">
                    {selectedProject.address}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest mb-2">
                    System Size
                  </p>
                  <p className="font-semibold text-black">
                    {selectedProject.systemSize}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest mb-2">
                    Monthly Savings
                  </p>
                  <p className="font-semibold text-green-600">
                    {selectedProject.savingsPerMonth}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest mb-2">
                    Completed
                  </p>
                  <p className="font-semibold text-black">
                    {selectedProject.completionDate}
                  </p>
                </div>
              </div>

              {/* Gallery Preview */}
              {selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-semibold text-black mb-4">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="h-24 rounded-lg overflow-hidden bg-teal-50"
                        >
                          <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* CTA */}
              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 text-xs md:text-sm bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition">
                  Get Similar Solution
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 px-6 py-3 text-xs md:text-sm border border-black/20 text-black rounded-full font-semibold hover:border-black/40 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 md:mt-20 text-center bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-3xl p-10 md:p-16 border border-teal-200/50">
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Start Your Journey?
        </h3>
        <p className="text-black/60 text-lg mb-8 max-w-2xl mx-auto">
          Join 500+ homes and businesses in Nigeria already enjoying the
          benefits of solar energy. Your free consultation is just one click
          away.
        </p>
        <div className="space-y-3 md:space-x-3 ">
          <button
            onClick={WhatsappMessage}
            className="px-6 py-3 md:px-8 md:py-4 cursor-pointer text-xs md:text-base bg-teal-600 text-white rounded-full font-normal hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation
          </button>
          <button
            onClick={handleChat}
            className="px-6 py-3 md:px-8 md:py-4 text-xs md:text-base cursor-pointer bg-teal-600 text-white rounded-full font-normal hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Ask Voltbot
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
