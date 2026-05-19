import ScrollReveal from "@/components/motion/ScrollReveal";

const TrustIndicators = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#6c6f67]">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest lg:text-3xl">
            Quick Tour of Our Projects
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustIndicators;
