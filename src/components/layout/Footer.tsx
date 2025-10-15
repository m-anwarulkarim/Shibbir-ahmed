import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-center md:text-left">
        {/* Left: Copyright */}
        <div>
          <p>© {new Date().getFullYear()}Web developer : Anwarul Karim</p>
          <p className="mt-1 text-gray-400"> Based in Dhaka, Bangladesh</p>
        </div>

        {/* Right: Links + Icons */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Quick Links */}
          <ul className="flex gap-4 flex-wrap justify-center md:justify-end">
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-blue-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
