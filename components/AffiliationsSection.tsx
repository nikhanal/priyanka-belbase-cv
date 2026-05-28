'use client';

import { Users, ExternalLink, Heart, Globe } from 'lucide-react';

const COMMUNITY_ITEMS = [
  {
    title: 'Women in GIS',
    role: 'Member',
    description:
      'A global community empowering women in the geospatial industry through networking, mentorship, and professional development opportunities.',
    href: 'https://womeningis.org/',
    cta: 'Visit Organization',
    icon: Heart,
  },
  {
    title: 'Nepalese Student Association, FIU',
    role: 'Secretary · Jul 2024 – Jun 2025',
    description:
      'Supported student programming, community coordination, and peer connection for the Nepalese student community at Florida International University.',
    href: 'https://dasa.fiu.edu/all-departments/student-organizations-council/',
    cta: 'Student organizations',
    icon: Users,
  },
] as const;

export default function AffiliationsSection() {
  return (
    <section id="affiliations" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-accent" size={24} />
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Community</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
          Community & Leadership
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Community involvement carried over from the previous site version and expanded with CV-based leadership roles.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {COMMUNITY_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{item.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      {item.cta}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="text-accent" size={20} />
              <h3 className="font-semibold text-foreground">Why Community Matters</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">🌍</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Advancing Geospatial Science</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Contributing to GIS accessibility for environmental solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">👩‍💻</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Empowering Women in Tech</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Supporting women representation in geospatial and STEM.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🤝</span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Knowledge Sharing</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Mentoring in GIS workflows and remote sensing techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
