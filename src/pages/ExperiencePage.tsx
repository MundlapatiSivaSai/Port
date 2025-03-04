
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import ScrollToReveal from "@/utils/ScrollToReveal";

const ExperiencePage = () => {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
              Work Experience
            </h1>
          </ScrollToReveal>
          
          <ScrollToReveal delay={200}>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              My professional journey showcases a blend of technical expertise and creative marketing strategies, 
              consistently delivering measurable improvements in key performance metrics.
            </p>
          </ScrollToReveal>
        </div>
      </section>
      
      <Experience />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <h2 className="text-2xl font-display font-semibold mb-8 text-center">
              Key Achievements
            </h2>
          </ScrollToReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollToReveal delay={100} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-gray-700">Increase in organic traffic through targeted SEO content strategies</p>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-gray-700">Growth in social media engagement across multiple platforms</p>
            </ScrollToReveal>
            
            <ScrollToReveal delay={300} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <p className="text-gray-700">Reduction in page load times, enhancing user experience</p>
            </ScrollToReveal>
            
            <ScrollToReveal delay={400} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">33%</div>
              <p className="text-gray-700">Improvement in user engagement through AI-driven content creation</p>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
