import React from 'react';
import { Briefcase, Archive, HeartHandshake } from 'lucide-react';

const experiences = [
  {
    role: 'Cybersecurity Governance & Operations Lead',
    company: 'CForce IT Solution',
    companyHref: 'https://cforce.com.ph/',
    period: 'May 2025 – Present',
    description: 'Orchestrates a multi-layered security ecosystem anchored by QRadar SIEM, integrating telemetry from CrowdStrike, FortiEDR, and Cisco ETD for advanced incident response. Manages enterprise network security and virtualization (Panorama firewall management, Cisco Meraki, vSphere, PRTG monitoring). Leads ISMS audit/alignment with ISO 27001, NIST CSF 2.0, and TISAX; runs Vendor Risk Management program; drives Enterprise Risk Management and Security Performance Management with Bitsight Core and Tenable; conducts Web Application Security deep dives; secures the human element via Mimecast, ADAudit, and KnowBe4.',
    type: 'work'
  },
  {
    role: 'IT College Instructor',
    company: 'Holy Angel University',
    companyHref: 'https://www.hau.edu.ph/',
    period: 'July 2024 – 2025',
    description: 'Delivered lectures and hands-on labs in Web Development & Design, Python, Java, Interface Design, and Thesis Writing. Guided capstone projects and research theses; mentored students in collaborative coding and problem-solving; contributed to curriculum development.',
    type: 'work'
  },
  {
    role: 'Business Development Representative',
    company: 'Exergy Energy (Remote)',
    companyHref: 'https://exergyenergy.com/',
    period: 'Oct 2023 – June 2024',
    description: 'Remote BDR handling lead generation, prospect qualification, outbound calling, and appointment setting; supported sales with research, online marketing, and sales materials.',
    type: 'work'
  },
  {
    role: 'Quality Supervisor',
    company: 'Majorel',
    companyHref: 'https://www.linkedin.com/company/majorel-global/posts/?feedView=all',
    period: 'Sept 2021 – Sept 2023',
    description: 'Drove business Quality Performance and COPC compliance; led client meetings and audits; managed and trained the Quality Team; earned COPC High Performance Management Techniques certification; led analytical data gathering and reporting.',
    type: 'work'
  },
  {
    role: 'Quality Coach',
    company: 'Majorel',
    companyHref: 'https://www.linkedin.com/company/majorel-global/posts/?feedView=all',
    period: 'Feb 2021 – Sept 2021',
    description: 'Behavioral coaching, QA evaluations, DSAT analysis, calibration sessions; POC for the iOS+ Quality Team.',
    type: 'work'
  },
  {
    role: 'Technical Support / CSR IV',
    company: 'Majorel',
    companyHref: 'https://www.linkedin.com/company/majorel-global/posts/?feedView=all',
    period: 'May 2020 – Feb 2021',
    description: 'Premium IT technical support and account handling; Top Advisor of the Year 2020; promoted to Mentor for transitioning and new advisors.',
    type: 'work'
  }
];

const volunteerWork = [
  {
    role: 'Program Coordinator',
    company: 'Called to Rescue Philippines',
    companyHref: 'https://calledtorescue.ph/',
    period: 'Oct 2024 – Present',
    description: 'Plans and monitors anti-trafficking prevention, intervention, and survivor-support programs; collaborates with law enforcement, social workers, and community leaders; builds community awareness and resilience.'
  }
];

const earlyExperience = [
  { role: 'Sales Coordinator / Telemarketer', company: 'Bayt.com', companyHref: 'https://www.bayt.com/', period: 'Feb 2017 – Jan 2018', description: 'Lead generation averaging 6-8 clients/day, plus in-office IT support' },
  { role: 'Customer Service & Technical Associate', company: 'Convergys', companyHref: 'https://www.concentrix.com/', period: 'May 2015 – Oct 2016', description: 'Cricket Wireless support; twice recognized as top-performing agent' },
  { role: 'Computer Teacher / Trainer', company: "L'Altra Montessori School", companyHref: 'https://lamontessori.edu.ph/', period: 'June 2014 – Mar 2015', description: 'Taught computing, Visual Basic, Photoshop, graphic design; managed school IT infrastructure' },
  { role: 'Customer Service', company: 'Sutherland Global Services', companyHref: 'https://www.sutherlandglobal.com/', period: 'Mar 2013 – May 2013', description: 'Seasonal sales account' }
];

export const ExperienceSection = () => {
  const [showArchive, setShowArchive] = React.useState(false);

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
                  <h3 className="font-bold text-lg text-foreground mt-2 leading-tight">{exp.role}</h3>
                  <a
                    href={exp.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                  >
                    {exp.company}
                  </a>
                </div>
                
                {exp.description && (
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed border-l-2 border-primary/20 pl-3">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Volunteer Work */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="flex items-center gap-4 mb-8">
            <HeartHandshake className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight">Volunteer.Run()</h3>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          {volunteerWork.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border/50 rounded-sm hover:border-primary/40 transition-colors relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors" />
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-xs font-mono text-primary bg-primary/10 w-fit px-2 py-0.5 rounded-sm">
                  {exp.period}
                </span>
                <h4 className="font-bold text-lg text-foreground mt-2 leading-tight">{exp.role}</h4>
                <a
                  href={exp.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                >
                  {exp.company}
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed border-l-2 border-primary/20 pl-3">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Early Experience / Archive */}
        <div className="max-w-4xl mx-auto mt-16 bg-card/50 border border-border/50 rounded-sm overflow-hidden">
          <button 
            onClick={() => setShowArchive(!showArchive)}
            className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors font-mono text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              {showArchive ? 'CLOSE_ARCHIVE_LOG' : 'EXPAND_ARCHIVE_LOG'}
            </span>
            <span>{showArchive ? '[-]' : '[+]'}</span>
          </button>
          
          {showArchive && (
            <div className="p-6 border-t border-border/50 space-y-4">
              {earlyExperience.map((exp, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4 text-sm group">
                  <div className="shrink-0 font-mono text-xs text-primary/60 md:w-36 pt-0.5 group-hover:text-primary transition-colors">
                    {exp.period}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground/90">
                      {exp.role}{' '}
                      <span className="text-muted-foreground font-normal">|</span>{' '}
                      <a
                        href={exp.companyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <div className="text-muted-foreground mt-1 leading-relaxed">{exp.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};
