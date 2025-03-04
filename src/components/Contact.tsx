import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Github
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4 reveal">Get In Touch</h2>
        <p className="text-center text-gray-600 max-w-lg mx-auto mb-12 reveal">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 reveal">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                <a 
                  href="mailto:sivaaliassai1435@gmail.com" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  sivaaliassai1435@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                <a 
                  href="tel:+919640702408" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +91 9640702408
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">Rayachoty-516269, India</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium text-gray-900 mb-3">Connect with me</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/sivasai-mundlapati/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/MundlapatiSivaSai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal" data-delay="2">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-medium text-xl mb-4">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
