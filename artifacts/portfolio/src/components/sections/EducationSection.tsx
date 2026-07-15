import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Load.KnowledgeBase()</h2>
          <div className="h-px bg-border flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="bg-card border border-border p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <GraduationCap className="w-8 h-8 text-primary mb-6" />
            
            <h3 className="text-xl font-bold mb-2">BS Computer Science</h3>
            <p className="text-foreground/80 mb-1">Holy Angel University</p>
            <p className="text-sm font-mono text-muted-foreground">2010 – 2015</p>
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <Award className="w-8 h-8 text-primary mb-6" />
            
            <h3 className="text-xl font-bold mb-4">Certifications & Training</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-primary font-mono mt-1">{'>'}</span>
                COPC High Performance Management Techniques
              </li>
              <li className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-primary font-mono mt-1">{'>'}</span>
                Lean & Quality Management
              </li>
              <li className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-primary font-mono mt-1">{'>'}</span>
                CompTIA ITF+
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
