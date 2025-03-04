
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import ScrollToReveal from "@/utils/ScrollToReveal";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const SkillsPage = () => {
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
              Skills & Expertise
            </h1>
          </ScrollToReveal>
          
          <ScrollToReveal delay={200}>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              With a diverse skill set spanning technical and marketing domains, I bring a unique perspective 
              to digital marketing challenges. My expertise is constantly evolving through continuous learning 
              and practical application.
            </p>
          </ScrollToReveal>
        </div>
      </section>
      
      <Skills />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <h2 className="text-2xl font-display font-semibold mb-8 text-center">
              Technical Workflow
            </h2>
          </ScrollToReveal>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>
              
              <div className="space-y-12">
                <ScrollToReveal delay={100} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl relative z-10">
                    1
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 flex-1 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Research & Analysis</h3>
                    <p className="text-gray-600 mb-3">
                      I begin by conducting thorough keyword research and competitor analysis using tools like Semrush and Ahrefs to identify opportunities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Semrush</Badge>
                      <Badge variant="secondary">Ahrefs</Badge>
                      <Badge variant="secondary">Google Analytics</Badge>
                      <Badge variant="secondary">Competitor Analysis</Badge>
                    </div>
                  </div>
                </ScrollToReveal>
                
                <ScrollToReveal delay={200} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl relative z-10">
                    2
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 flex-1 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Content Creation</h3>
                    <p className="text-gray-600 mb-3">
                      I develop high-quality, SEO-optimized content leveraging AI tools while ensuring human creativity and strategic alignment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">ChatGPT</Badge>
                      <Badge variant="secondary">Jasper</Badge>
                      <Badge variant="secondary">Content Strategy</Badge>
                      <Badge variant="secondary">SEO Writing</Badge>
                    </div>
                  </div>
                </ScrollToReveal>
                
                <ScrollToReveal delay={300} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl relative z-10">
                    3
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 flex-1 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Technical Optimization</h3>
                    <p className="text-gray-600 mb-3">
                      I implement technical SEO best practices to improve site performance, focusing on page load speed and user experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Google Search Console</Badge>
                      <Badge variant="secondary">Technical SEO</Badge>
                      <Badge variant="secondary">Performance Optimization</Badge>
                      <Badge variant="secondary">User Experience</Badge>
                    </div>
                  </div>
                </ScrollToReveal>
                
                <ScrollToReveal delay={400} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl relative z-10">
                    4
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 flex-1 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Distribution & Engagement</h3>
                    <p className="text-gray-600 mb-3">
                      I develop strategic distribution plans across channels and create engaging social media content to maximize reach and engagement.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Social Media Management</Badge>
                      <Badge variant="secondary">Email Marketing</Badge>
                      <Badge variant="secondary">Content Distribution</Badge>
                      <Badge variant="secondary">Community Building</Badge>
                    </div>
                  </div>
                </ScrollToReveal>
                
                <ScrollToReveal delay={500} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl relative z-10">
                    5
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 flex-1 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-2">Measurement & Iteration</h3>
                    <p className="text-gray-600 mb-3">
                      I closely monitor performance metrics and use data insights to continuously refine strategies for optimal results.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Analytics</Badge>
                      <Badge variant="secondary">A/B Testing</Badge>
                      <Badge variant="secondary">Performance Tracking</Badge>
                      <Badge variant="secondary">Continuous Improvement</Badge>
                    </div>
                  </div>
                </ScrollToReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollToReveal className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <FileText size={24} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Want to see my detailed skill profile?</h3>
              <p className="text-gray-600">Download my resume for a comprehensive overview of my skills and experience.</p>
            </div>
            <a 
              href="https://drive.google.com/file/d/1XLNCgccNqrqqTBbuTwlEFLu1QM6CzXt4/view" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 md:ml-auto px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Download Resume
            </a>
          </ScrollToReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SkillsPage;
