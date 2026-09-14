import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
    >
      {/* Halo d'ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Conteneur */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Présentation */}
          <div className="w-full lg:col-span-7">
            <HeroContent />
          </div>

          {/* Photo */}
          <div className="w-full lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;