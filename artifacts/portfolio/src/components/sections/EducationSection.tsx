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
          {/* Degrees */}
          <div className="flex flex-col gap-8">
            <div className="bg-card border border-border p-8 relative overflow-hidden group hover:border-primary/30 transition-colors flex-1">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="flex items-start justify-between mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-xs font-mono uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 px-2 py-1">
                  In Progress
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Professional Science Master's in Cybersecurity
              </h3>
              <p className="text-foreground/80 mb-1">Holy Angel University — Graduate School</p>
              <p className="text-sm font-mono text-muted-foreground">June 2024 – Present</p>
            </div>

            <div className="bg-card border border-border p-8 relative overflow-hidden group hover:border-primary/30 transition-colors flex-1">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <GraduationCap className="w-8 h-8 text-primary mb-6" />

              <h3 className="text-xl font-bold mb-2">BS Computer Science</h3>
              <p className="text-foreground/80 mb-1">Holy Angel University</p>
              <p className="text-sm font-mono text-muted-foreground">2010 – 2015</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <Award className="w-8 h-8 text-primary mb-6" />
            
            <h3 className="text-xl font-bold mb-4">Certifications & Training</h3>
            <ul className="space-y-3">
              {[
                {
                  label: 'COPC High Performance Management Techniques',
                  href: 'https://certificates.copc.com/b66ff345-70e4-44b0-92ee-0c99099fa05f#acc.H3Zvpcwd'
                },
                {
                  label: 'AI Fundamentals with IBM SkillsBuild',
                  href: 'https://www.credly.com/badges/73477ba7-f3b0-4acc-9d1b-02697e338721/public_url'
                },
                {
                  label: 'Cisco Certificate in Ethical Hacking',
                  href: 'https://www.credly.com/badges/ba408b96-51cc-447f-8958-c57b9718ca1b/public_url'
                },
                {
                  label: 'Offensive Security Capture the Flag - Operation SMB Exploit',
                  href: 'https://www.credly.com/badges/0c297a7f-5dc6-490b-a45c-65fbdc54af64/public_url'
                },
                {
                  label: 'CompTIA IT Fundamentals+ (ITF+)',
                  href: 'https://www.credly.com/badges/d26fde77-f9c8-4d3b-bb1d-dfde12846aad/public_url'
                }
              ].map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-primary font-mono mt-1">{'>'}</span>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                  >
                    {cert.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
