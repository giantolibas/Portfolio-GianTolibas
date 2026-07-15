import React from 'react';
import { Target, Lock } from 'lucide-react';

export const AboutSection = () => {
  const aboutImageSrc = `${import.meta.env.BASE_URL}about-photo.jpg`;

  return (
    <section id="about" className="py-24 relative border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <Lock className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">System.Identify()</h2>
          <div className="h-px bg-border flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card flex items-center justify-center">
              <img 
                src={aboutImageSrc} 
                alt="Gian Tolibas - About" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-[50%]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 hidden flex-col items-center justify-center bg-secondary">
                <Target className="w-16 h-16 text-primary/40 mb-4" />
                <span className="text-sm font-mono text-muted-foreground">ASSET_NOT_FOUND</span>
              </div>
              
              {/* Overlay lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px)', backgroundSize: '100% 4px' }}
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-primary font-mono text-xl mr-2"> {'>'} </span>
              Aspiring Security Analyst and Web Developer with a strong background in IT support, troubleshooting, and quality assurance. 
            </p>
            <p>
              Passionate about cybersecurity, network security, and data protection, eager to gain hands-on experience in threat detection, vulnerability management, and security compliance.
            </p>
            <p>
              Seeking an opportunity to apply my technical knowledge, problem-solving skills, and analytical mindset to contribute to an organization's security posture.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-border/50">
              <div>
                <span className="block text-xs font-mono text-primary/70 mb-1">LOCATION</span>
                <span className="text-foreground">Angeles City, Pampanga</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-primary/70 mb-1">STATUS</span>
                <span className="text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
