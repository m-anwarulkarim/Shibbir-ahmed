// src/components/PortfolioCard.tsx
import { motion } from "framer-motion";

interface PortfolioCardProps {
  image: string;
  title: string;
  link: string;
}

const PortfolioCard = ({ image, title, link }: PortfolioCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block overflow-hidden rounded-lg shadow-md group"
    >
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </motion.a>
  );
};

export default PortfolioCard;
