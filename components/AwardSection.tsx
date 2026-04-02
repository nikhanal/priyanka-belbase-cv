'use client';

import { useState } from 'react';
import { Trophy, Play, ChevronDown, ExternalLink, Users } from 'lucide-react';

interface AwardData {
  title: string;
  organization: string;
  date: string;
  description: string;
  teamMembers?: string[];
  highlights?: string[];
  mainVideoUrl: string;
  mainVideoTitle: string;
  fullVideoUrl?: string;
  fullVideoTitle?: string;
}

const award: AwardData = {
  title: 'VoLo VISTA Award',
  organization: 'VoLo Foundation',
  date: 'February 2024',
  description: 'The VISTA Award is the highest recognition from VoLo Foundation, bestowed upon students demonstrating exemplary leadership along with Vision, Innovation, Sustainability, Technology, and Action in climate solutions.',
  teamMembers: ['Ivan Oyege', 'Priyanka Belbase', 'Moses Kiwanuka', 'Jordan Prats'],
  highlights: [
    'Addresses urban heat island effects through green roof implementation',
    'Contributes to carbon sequestration in urban environments',
    'Aids in controlling stormwater runoff - a significant issue in Miami',
    'Research on plant varieties for green roofs in South Florida climate',
  ],
  mainVideoUrl: 'https://www.youtube.com/embed/No83qgJwkIg',
  mainVideoTitle: '2024 VISTA Award Winners Announcement',
  fullVideoUrl: 'https://www.youtube.com/embed/nXxkhjOdih4',
  fullVideoTitle: 'Full Project Presentation (13 min)',
};

export default function AwardSection() {
  const [showFullVideo, setShowFullVideo] = useState(false);

  return (
    <section id="award" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="text-accent" size={24} />
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Featured Achievement</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
          {award.title}
        </h2>
        <p className="text-muted-foreground mb-8">
          {award.organization} • {award.date} • Associated with Florida International University
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Video */}
          <div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border bg-card">
              <iframe
                src={award.mainVideoUrl}
                title={award.mainVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-3">
              🏆 {award.mainVideoTitle}
            </p>
          </div>

          {/* Award Details */}
          <div className="space-y-6">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {award.description}
            </p>

            {/* Team Members */}
            {award.teamMembers && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="text-accent" size={18} />
                  <h3 className="font-semibold text-foreground">Award-Winning Team</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {award.teamMembers.map((member, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        member === 'Priyanka Belbase'
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'bg-card text-muted-foreground border border-border'
                      }`}
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Highlights */}
            {award.highlights && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Project Impact</h3>
                <ul className="space-y-2">
                  {award.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Expandable Full Presentation */}
        {award.fullVideoUrl && (
          <div className="mt-8 border border-border rounded-xl bg-card overflow-hidden">
            <button
              onClick={() => setShowFullVideo(!showFullVideo)}
              className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Play className="text-accent" size={20} />
                <div className="text-left">
                  <p className="font-medium text-foreground">{award.fullVideoTitle}</p>
                  <p className="text-sm text-muted-foreground">Watch the complete project presentation</p>
                </div>
              </div>
              <ChevronDown 
                className={`text-muted-foreground transition-transform ${showFullVideo ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>

            {showFullVideo && (
              <div className="p-4 pt-0">
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <iframe
                    src={award.fullVideoUrl}
                    title={award.fullVideoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
