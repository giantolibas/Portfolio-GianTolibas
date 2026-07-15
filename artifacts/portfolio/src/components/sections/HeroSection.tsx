import React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Shield, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const profileImageSrc = `${import.meta.env.BASE_URL}profile-photo.jpg`;

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Gian <span className="text-primary">Tolibas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-lg leading-relaxed">
            Cybersecurity Governance & Operations Lead <br/> 
            <span className="text-foreground/80 text-lg md:text-xl font-mono mt-2 block">
              | Aspiring Security Analyst and Web Developer
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={handleContactClick} className="font-mono bg-primary text-background hover:bg-primary/80">
              <Terminal className="mr-2 h-4 w-4" />
              Init Contact
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})} className="font-mono">
              View Log
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/50 overflow-hidden bg-secondary flex items-center justify-center p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-background relative group">
                <img 
                  src={profileImageSrc} 
                  alt="Gian Tolibas" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center hidden bg-secondary/50 backdrop-blur-sm">
                  <span className="text-6xl font-bold text-primary font-mono tracking-tighter">GT</span>
                </div>
              </div>
            </div>
            
            {/* Cyber decorations */}
            <div className="absolute top-0 right-10 bg-background border border-primary/30 p-2 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute bottom-10 left-0 bg-background border border-primary/30 px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="text-xs font-mono text-primary">SEC_OP: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
