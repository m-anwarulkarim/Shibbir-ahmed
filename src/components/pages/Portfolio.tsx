import { motion } from "framer-motion";

const projects = [
  {
    title: "SEO for Local Business",
    image: "/images/pr-1.webp",
    link: "https://example.com/project1",
  },
  {
    title: "Google Ads Campaign",
    image: "/images/pr-1.webp",
    link: "https://example.com/project2",
  },
  {
    title: "Conversion Funnel Design",
    image: "/images/pr-1.webp",
    link: "https://example.com/project3",
  },
  {
    title: "Email Automation Setup",
    image: "/images/pr-1.webp",
    link: "https://example.com/project4",
  },
  {
    title: "Content Strategy for SaaS",
    image: "/images/pr-1.webp",
    link: "https://example.com/project5",
  },
  {
    title: "E-commerce Growth Plan",
    image: "/images/pr-1.webp",
    link: "https://example.com/project6",
  },
];

const Portfolio = () => {
  return (
    <section className="container mx-auto px-6 py-24 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-foreground">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800"
      >
        My Portfolio
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 px-4 pb-4">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
