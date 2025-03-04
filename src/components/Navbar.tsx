
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-display text-xl sm:text-2xl font-bold text-primary transition-all hover:opacity-80"
        >
          SivaSai<span className="text-gray-400">.</span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link, i) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-xl font-medium hover:text-primary transition-colors animate-slide-up opacity-0`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-gray-700 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100 origin-bottom-right group-hover:origin-bottom-left"></span>
              </Link>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 transition-all transform hover:translate-y-[-2px]"
              size="sm"
              asChild
            >
              <a href="https://drive.google.com/file/d/1XLNCgccNqrqqTBbuTwlEFLu1QM6CzXt4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
