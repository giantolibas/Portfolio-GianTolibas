import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Cpu, Code, ShieldAlert, LineChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cybersecurity & Network',
    icon: ShieldAlert,
    skills: [
      'Risk Management', 'Security Compliance', 'Firewalls', 'IDS/IPS', 
      'ISO 27001', 'NIST', 'CIS Controls', 'Vulnerability Assessment', 
      'Incident Response', 'Penetration Testing'
    ]
  },
  {
    title: 'Programming & Tech',
    icon: Code,
    skills: [
      'SQL', 'Python', 'Java', 'C#', 'HTML', 'CSS', 'WordPress'
    ]
  },
  {
    title: 'IT & Systems',
    icon: Cpu,
    skills: [
      'System Administration (Windows, Linux, macOS)', 
      'Hardware/Network Troubleshooting', 
      'QRadar SIEM', 'CrowdStrike', 'Cisco Meraki', 'vSphere'
    ]
  },
  {
    title: 'Management & Quality',
    icon: LineChart,
    skills: [
      'COPC High Performance Management', 
      'Lean & Quality Fundamentals', 
      'Project Management', 'CRM Tools'
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <Cpu className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Analyze.Capabilities()</h2>
          <div className="h-px bg-border flex-1 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="group relative bg-card border border-border p-8 hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-bl-3xl flex items-start justify-end p-4">
                <cat.icon className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold mb-6 flex items-center font-mono">
                <span className="text-primary mr-2">0{idx + 1}.</span> {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="cyber">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
