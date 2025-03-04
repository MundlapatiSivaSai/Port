
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link 
              to="/" 
              className="font-display text-xl font-bold text-primary transition-all hover:opacity-80"
            >
              SivaSai<span className="text-gray-400">.</span>
            </Link>
            <p className="text-gray-500 text-sm mt-2">
              Content Marketing & SEO Specialist
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                to="/experience" 
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link 
                to="/skills" 
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
            
            <button
              onClick={scrollToTop}
              className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SivaSai Mundlapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
