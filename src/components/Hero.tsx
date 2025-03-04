
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Linkedin, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = containerRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-24 pb-10 px-4 overflow-hidden"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 md:pr-10">
          <div className="reveal" data-delay="1">
            <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
              Content Marketing & SEO Specialist
            </span>
          </div>
          
          <h1 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm <span className="text-primary">SivaSai Mundlapati</span>
          </h1>
          
          <p className="reveal text-gray-600 text-lg md:text-xl" data-delay="2">
            Digital Marketing professional with a Computer Science background, focused on driving 
            organic growth, content strategy, and web development to achieve measurable results.
          </p>
          
          <div className="reveal flex flex-wrap gap-3" data-delay="3">
            <Button asChild className="group">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experience">View My Work</a>
            </Button>
          </div>
          
          <div className="reveal flex items-center gap-4 pt-2" data-delay="4">
            <a 
              href="mailto:sivaaliassai1435@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919640702408" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sivasai-mundlapati/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/MundlapatiSivaSai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
          <div className="reveal relative bg-white p-6 rounded-3xl shadow-xl transform -rotate-3 transition-all duration-500 hover:rotate-0">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-700">Featured Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-pill">SEO</span>
                  <span className="skill-pill">Content Strategy</span>
                  <span className="skill-pill">Analytics</span>
                  <span className="skill-pill">Social Media</span>
                  <span className="skill-pill">Email Marketing</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700">Key Results</h3>
                <p className="text-sm text-gray-600">⬆️ Increased organic traffic by 45%</p>
                <p className="text-sm text-gray-600">⬆️ Enhanced user engagement by 33%</p>
                <p className="text-sm text-gray-600">⬇️ Reduced page load times by 30%</p>
                <p className="text-sm text-gray-600">⬆️ Expanded social media engagement by 80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
