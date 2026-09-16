import { motion } from "motion/react";
import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const text = mobile
    ? { opacity: 0, y: -60 }
    : { opacity: 0, x: -80 };

  const photo = mobile
    ? { opacity: 0, y: -60 }
    : { opacity: 0, x: 80 };

  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={text}
            animate={visible}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:col-span-7"
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={photo}
            animate={visible}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;