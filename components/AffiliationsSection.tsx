'use client';

import { Users, ExternalLink, Heart, Globe } from 'lucide-react';

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
          Affiliations & Volunteering
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Active involvement in professional communities advancing GIS and supporting women in geospatial technology.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Women in GIS Card */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Heart className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Women in GIS
                </h3>
                <p className="text-accent text-sm font-medium mb-3">Member</p>
                <p className="text-muted-foreground text-sm mb-4">
                  A global community empowering women in the geospatial industry through networking, mentorship, and professional development opportunities.
                </p>
                <a
                  href="https://womeningis.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  Visit Organization
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Community Values Card */}
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
