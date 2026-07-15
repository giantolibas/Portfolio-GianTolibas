import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-border py-4'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="font-mono text-xl font-bold text-primary cursor-pointer tracking-tighter"
          onClick={() => scrollTo('hero')}
        >
          GT<span className="text-foreground">_</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <span className="text-primary/50 mr-1">//</span>
              {item.name}
            </button>
          ))}
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="md:hidden font-mono"
          onClick={() => scrollTo('contact')}
        >
          Connect
        </Button>
      </div>
    </nav>
  );
};
