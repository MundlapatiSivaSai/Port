
import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Search, BarChart, Mail, Lightbulb, 
  Workflow, Database, Bot, BookOpen 
} from "lucide-react";

const skillsData = [
  {
    category: "Tools",
    icon: <Search className="w-5 h-5" />,
    skills: ["Google Search Console", "Google Analytics", "Google Adsense", "Semrush", "Ahrefs", "Canva"]
  },
  {
    category: "Digital Marketing",
    icon: <BarChart className="w-5 h-5" />,
    skills: ["SEO", "Social Media Management", "Content Strategy", "Analytics", "Email Marketing"]
  },
  {
    category: "AI Tools",
    icon: <Bot className="w-5 h-5" />,
    skills: ["ChatGPT", "Jasper", "Ideogram", "Veed.io", "Submagic", "DALL-E 3"]
  },
  {
    category: "Lead Generation",
    icon: <Workflow className="w-5 h-5" />,
    skills: ["Apollo", "Keyword Research", "Content Optimization"]
  }
];

const certificationsData = [
  { name: "Digital Marketing", provider: "PCube" },
  { name: "Attract and Engage Customers with Digital Marketing", provider: "Google" },
  { name: "Scrape the Web with Python", provider: "Le Wagon" },
  { name: "SQL", provider: "HackerRank" }
];

const Skills = () => {
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
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 reveal">Skills & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 reveal">
            <h3 className="text-xl font-display font-semibold mb-6">Technical Proficiencies</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {skillsData.map((category, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                      {category.icon}
                    </div>
                    <h4 className="font-medium">{category.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <Badge 
                        key={j} 
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal" data-delay="2">
            <h3 className="text-xl font-display font-semibold mb-6">Certifications</h3>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="space-y-5">
                {certificationsData.map((cert, i) => (
                  <div 
                    key={i}
                    className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-md mr-4 mt-0.5">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{cert.name}</h4>
                        <p className="text-sm text-gray-500">{cert.provider}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-primary/5 rounded-lg p-6">
              <h3 className="font-display font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="font-medium">Rajiv Gandhi University of Knowledge and Technology (IIIT)</h4>
                <p className="text-gray-600">B.Tech in Computer Science Engineering</p>
                <p className="text-gray-600">June 2019 - May 2023</p>
                <p className="font-medium mt-1">GPA: 8.95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
