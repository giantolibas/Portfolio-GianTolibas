import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    role: 'Cybersecurity Governance & Operations Lead',
    company: 'CForce IT Solution',
    period: 'May 2025 – Present',
    type: 'work'
  },
  {
    role: 'IT College Instructor',
    company: 'Holy Angel University',
    period: 'July 2024 – 2025',
    type: 'work'
  },
  {
    role: 'Business Development Representative',
    company: 'Exergy Energy',
    period: 'Oct 2023 – June 2024',
    type: 'work'
  },
  {
    role: 'Quality Supervisor / Quality Coach / Tech Support',
    company: 'Majorel',
    period: 'May 2020 – Sept 2023',
    type: 'work'
  },
  {
    role: 'Program Coordinator',
    company: 'Called to Rescue Philippines',
    period: 'Volunteer',
    description: 'Combating human trafficking, community resilience, and survivor support',
    type: 'volunteer'
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-border/50 bg-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Execute.Log()</h2>
          <div className="h-px bg-border flex-1 ml-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-150 transition-transform" />
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card border border-border/50 rounded-sm hover:border-primary/40 transition-colors">
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-xs font-mono text-primary bg-primary/10 w-fit px-2 py-0.5 rounded-sm">
                    {exp.period}
                  </span>
                  <h3 className="font-bold text-lg text-foreground mt-2">{exp.role}</h3>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    {exp.company}
                    {exp.type === 'volunteer' && (
                      <span className="text-xs italic border border-border px-1.5 rounded-sm ml-2">Volunteer</span>
                    )}
                  </span>
                </div>
                
                {exp.description && (
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="font-mono group">
            Fetch Full History
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
