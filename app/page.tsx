import { Mail, Phone, MapPin, Linkedin, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AwardSection from '@/components/AwardSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AffiliationsSection from '@/components/AffiliationsSection';
import GallerySection from '@/components/GallerySection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <HeroSection />
        <AwardSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ResearchSection />
        <PublicationsSection />
        <ProjectsSection />

        {/* Certifications Section */}
        <CertificationsSection />
        <AffiliationsSection />

        <GallerySection />

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-foreground">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      I'm always open to collaboration and new opportunities. Whether you need GIS analysis, remote sensing expertise, 
                      or want to discuss geospatial research, feel free to reach out.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Contact Information</h3>
                    
                    <a
                      href="mailto:belbase.priyanka@gmail.com"
                      className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-accent/50 transition-colors group bg-card"
                    >
                      <Mail className="text-accent" size={24} />
                      <div>
                        <p className="text-muted-foreground text-sm">Email</p>
                        <p className="text-foreground font-medium">belbase.priyanka@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:+16825325155"
                      className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-accent/50 transition-colors group bg-card"
                    >
                      <Phone className="text-accent" size={24} />
                      <div>
                        <p className="text-muted-foreground text-sm">Phone</p>
                        <p className="text-foreground font-medium">+1 (682) 532-5155</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
                      <MapPin className="text-accent" size={24} />
                      <div>
                        <p className="text-muted-foreground text-sm">Location</p>
                        <p className="text-foreground font-medium">Miami, Florida</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Connect With Me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/in/priyanka-belbase-72833023b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors bg-card"
                        title="LinkedIn"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors bg-card"
                        title="Google Scholar"
                      >
                        <GraduationCap size={24} />
                      </a>
                    </div>
                  </div>
                </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground">
              <p className="text-sm sm:text-base">© 2026 Priyanka Belbase. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-2">Built with passion for geospatial science 🌍</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
