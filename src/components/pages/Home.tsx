import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-24 container mx-auto px-6 overflow-hidden bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-foreground"
    >
      {/* Background Gradient */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] z-[-1] transition-all duration-1000"
      />

      {/* Decorative Glow */}
      <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse z-[-1]" />
      <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl animate-pulse z-[-1]" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Grow Your Brand <br />
          with <span className="text-emerald-600">Digital Strategy</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-700 text-lg"
        >
          I’m <strong>Shibbir Islam</strong>, a results-driven digital marketer
          helping businesses grow through SEO, paid ads, and conversion funnels.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            onClick={() => window.open("https://wa.me/8801602867954", "_blank")}
            className="px-6 py-2 text-base bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            className="px-6 py-2 text-base border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            View Portfolio
          </Button>
        </div>
      </motion.div>

      {/* Image with Hover Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ rotate: 1, scale: 1.03 }}
        className="relative"
      >
        <img
          src="./images/hero.jpg"
          alt="Anwarul Karim - Digital Marketer"
          className="w-80 md:w-[400px] rounded-xl shadow-xl transition-transform duration-500"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm text-gray-700"
        >
          Let’s grow your business 🚀
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
