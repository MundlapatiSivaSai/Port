
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ScrollToReveal from "@/utils/ScrollToReveal";

const ContactPage = () => {
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
              Let's Connect
            </h1>
          </ScrollToReveal>
          
          <ScrollToReveal delay={200}>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </ScrollToReveal>
        </div>
      </section>
      
      <Contact />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <h2 className="text-2xl font-display font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollToReveal>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <ScrollToReveal delay={100} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
              <p className="text-gray-600">
                I specialize in content marketing, SEO optimization, social media management, email marketing campaigns, 
                and content creation. I also leverage AI tools to enhance content effectiveness and analytics to measure performance.
              </p>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">How do you measure the success of your marketing efforts?</h3>
              <p className="text-gray-600">
                I establish clear KPIs at the beginning of each project and track performance using analytics tools. 
                Typical metrics include organic traffic growth, engagement rates, conversion rates, page load times, 
                and search ranking improvements.
              </p>
            </ScrollToReveal>
            
            <ScrollToReveal delay={300} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">What industries have you worked with?</h3>
              <p className="text-gray-600">
                I've worked across various industries including technology, e-commerce, education, and professional services. 
                My adaptable approach allows me to quickly understand different sectors and tailor strategies accordingly.
              </p>
            </ScrollToReveal>
            
            <ScrollToReveal delay={400} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">Do you offer consulting services?</h3>
              <p className="text-gray-600">
                Yes, I provide digital marketing consulting services, helping businesses analyze their current strategies, 
                identify opportunities for improvement, and develop comprehensive plans to achieve their marketing goals.
              </p>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
