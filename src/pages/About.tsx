
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToReveal from "@/utils/ScrollToReveal";

const About = () => {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">
              About Me
            </h1>
          </ScrollToReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollToReveal className="order-2 md:order-1" delay={200}>
              <h2 className="text-2xl font-display font-semibold mb-4">
                Digital Marketing Professional with a Technical Edge
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm SivaSai Mundlapati, a Digital Marketing and Product Engineering professional with a solid Computer Science background. My expertise lies at the intersection of technical knowledge and marketing acumen, allowing me to drive measurable business results.
                </p>
                
                <p>
                  With experience in SEO, content strategy, and web development, I focus on optimizing user engagement and digital presence. I'm passionate about leveraging data and analytics to inform strategy and create impact.
                </p>
                
                <p>
                  My technical background gives me a unique advantage in understanding the underlying mechanics of digital platforms, while my marketing expertise helps me craft strategies that resonate with audiences and drive meaningful results.
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal className="order-1 md:order-2" delay={400}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-xl transform -rotate-3 transition-all duration-500 hover:rotate-0">
                  <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                    <img 
                      src="https://mundlapatisivasai.netlify.app/static/media/profile-img.e329503063acc7c0d4c4.png" 
                      alt="SivaSai Mundlapati" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollToReveal>
          </div>
          
          <ScrollToReveal delay={600}>
            <div className="bg-secondary/50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-display font-semibold mb-6 text-center">
                My Approach
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Data-Driven Strategy</h3>
                  <p className="text-gray-600">
                    I believe in letting data guide decision-making, constantly analyzing metrics to optimize performance and drive results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-primary">User-Centered Design</h3>
                  <p className="text-gray-600">
                    I prioritize understanding user needs and behavior to create engaging experiences that convert and retain customers.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Technical Excellence</h3>
                  <p className="text-gray-600">
                    My computer science background allows me to implement advanced solutions and optimize technical performance.
                  </p>
                </div>
              </div>
            </div>
          </ScrollToReveal>
          
          <ScrollToReveal delay={800}>
            <h2 className="text-2xl font-display font-semibold mb-6 text-center">
              Education & Background
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-primary mb-2">Academic Foundation</h3>
                <p className="text-gray-700 mb-4">
                  I graduated from Rajiv Gandhi University of Knowledge and Technology (IIIT) with a B.Tech in Computer Science Engineering, achieving a GPA of 8.95. This rigorous program gave me strong analytical skills and technical knowledge that differentiates me in the marketing field.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-2">Professional Development</h3>
                <p className="text-gray-700 mb-4">
                  Beyond my formal education, I've pursued continuous professional development through certifications from industry leaders like Google and specialized training in digital marketing, SEO, and data analysis.
                </p>
              </div>
            </div>
          </ScrollToReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
