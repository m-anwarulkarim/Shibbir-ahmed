import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24 max-w-3xl text-center bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-foreground">
      {/* Profile Image */}
      <motion.img
        src="/images/hero.jpg"
        alt="Anwarul Karim"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
      />

      {/* Heading */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mt-6 text-lg leading-relaxed"
      >
        I’m <span className="font-semibold text-blue-600">Shibbir Ahmad</span>,
        a passionate digital marketer with over <strong>3 years</strong> of
        experience in SEO, Google Ads, and conversion strategy. I help brands
        grow through <strong>data-driven campaigns</strong>, ethical marketing,
        and smart funnel design.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {[
          "SEO",
          "Google Ads",
          "Conversion Strategy",
          "Meta Ads",
          "Email Marketing",
        ].map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
