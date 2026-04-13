const stats = [
  { value: "500+", label: "Installations Completed" },
  { value: "₦2B+", label: "Energy Bills Saved" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "5yr", label: "Warranty Guarantee" },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#111] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-6 md:py-4 px-4 text-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-teal-400 font-bricolage">
              {stat.value}
            </span>
            <span className="text-sm text-white/50 mt-2 uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
