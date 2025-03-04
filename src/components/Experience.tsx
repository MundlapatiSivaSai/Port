
import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "Content Marketing and SEO Specialist",
    company: "Spenza",
    period: "Feb 2025 – Present",
    achievements: [
      "Craft compelling, SEO-optimized blog content designed to attract target audience and rank highly in search results.",
      "Develop engaging social media content, particularly for LinkedIn, expanding brand reach and fostering a vibrant online community.",
      "Produce high-impact email marketing campaigns that nurture leads, promote products/services, and drive conversions.",
      "Design eye-catching thumbnails and create innovative AI-powered videos to enhance visual appeal and content effectiveness.",
      "Support marketing and lead generation efforts using Apollo to identify and target qualified prospects.",
      "Conduct comprehensive keyword research using Semrush to inform content strategy and optimize for search engine visibility."
    ]
  },
  {
    role: "Digital Marketer",
    company: "Zenka Europe",
    period: "Feb 2024 – Jan 2025",
    achievements: [
      "Reduced page load times by 30% and enhanced user experience through website error audits and optimizations using Semrush, Pagespeed Insights, and Ahrefs.",
      "Increased organic traffic by 45% by creating high-quality SEO content and boosting page rankings with targeted content strategies.",
      "Enhanced user engagement and grew organic traffic by 33% through AI-driven blog and video content creation using VEED.io and other tools.",
      "Expanded follower engagement by 80% across social media platforms (Facebook, X, Instagram, LinkedIn, and YouTube) through consistent brand-focused content.",
      "Achieved a 25% increase in website traffic through strategic backlinking and targeted marketing materials, improving brand visibility.",
      "Improved SEO performance by 15% by optimizing meta titles and descriptions, conducting competitor analysis, and executing link-building initiatives."
    ]
  },
  {
    role: "Product Engineering Intern",
    company: "Whitecarrot.io",
    period: "Feb - Aug, 2023",
    achievements: [
      "Boosted application scalability and user accessibility by designing and implementing core features using Vue.js, Node.js, and PostgreSQL.",
      "Reduced bug resolution time by 40% by automating testing processes with Cypress, improving product quality.",
      "Drove a measurable increase in product visibility and engagement by formulating data-driven GTM strategies for digital initiatives.",
      "Streamlined customer support by creating help articles, reducing inbound inquiries by 20%.",
      "Collaborated with marketing and engineering teams to refine tactics, boosting campaign effectiveness and user reach."
    ]
  }
];

const Experience = () => {
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
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-secondary/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 reveal">Work Experience</h2>
        
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>
          
          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 relative reveal ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <div className={`w-full ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-display font-semibold text-xl text-primary">{job.role}</h3>
                        <span className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </span>
                      </div>
                      <div className="mb-4 flex items-center">
                        <span className="text-gray-700 font-medium">{job.company}</span>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2 mt-1.5">•</span>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`absolute left-0 md:left-1/2 top-0 transform md:translate-x-[-50%] flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg z-10`}
                >
                  <Briefcase size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
