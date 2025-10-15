import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  MousePointerClick,
  Mail,
  FileText,
  ShoppingCart,
} from "lucide-react";
import ServiceCard from "../comp/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your website’s visibility and rank higher on Google with technical and content-driven SEO.",
    },
    {
      icon: BarChart3,
      title: "PPC Advertising",
      description:
        "Run high-converting Google & Meta Ads to drive targeted traffic and maximize ROI.",
    },
    {
      icon: MousePointerClick,
      title: "Conversion Strategy",
      description:
        "Design smart funnels and landing pages that turn visitors into loyal customers.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Build relationships and boost retention with automated, segmented email campaigns.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Create engaging blog and ad content that educates, ranks, and converts.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Growth",
      description:
        "Optimize your online store for better UX, SEO, and sales performance.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-foreground">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800"
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
