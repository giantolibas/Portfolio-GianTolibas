import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

export const FooterSection = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-border bg-background overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #00f0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ping<span className="text-primary">()</span></h2>
            <p className="text-muted-foreground font-mono">Initiate a secure connection.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold mb-6 font-mono text-primary uppercase text-sm tracking-widest border-b border-border/50 pb-2">Target Identifiers</h3>
              
              <div className="space-y-6">
                <a href="mailto:giantolibas@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono mb-1">EMAIL</p>
                    <p className="text-foreground font-medium">giantolibas@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono mb-1">PHONE</p>
                    <p className="text-foreground font-medium">+639-45-516-3247</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono mb-1">LOCATION</p>
                    <p className="text-foreground font-medium">Angeles City, Pampanga, PH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-mono text-primary uppercase text-sm tracking-widest border-b border-border/50 pb-2">External Nodes</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/gian-tolibas-981029143/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-secondary border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                  <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
                  <span className="font-mono text-sm text-foreground">LinkedIn</span>
                </a>
                <a href="https://github.com/giantolibas" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-secondary border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                  <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
                  <span className="font-mono text-sm text-foreground">GitHub</span>
                </a>
              </div>

              <div className="mt-8 bg-black/40 border border-primary/20 p-4 font-mono text-xs text-primary/70">
                <p className="mb-1">{'>'} SYSTEM STATUS: ONLINE</p>
                <p className="mb-1">{'>'} ACCEPTING_CONNECTIONS: TRUE</p>
                <p className="animate-pulse">{'>'} _</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Gian Tolibas. All rights reserved.</p>
          <p className="mt-2 md:mt-0">SECURE CONNECTION ESTABLISHED</p>
        </div>
      </div>
    </section>
  );
};
