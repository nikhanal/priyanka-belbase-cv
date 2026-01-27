'use client';

import { useState } from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  publisher?: string;
  citations: number;
  type: 'journal' | 'conference';
  url?: string;
}

interface PublicationsSectionProps {
  publications: Publication[];
}

export default function PublicationsSection({ publications }: PublicationsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-8 sm:mt-12 md:mt-16 border border-border rounded-lg p-4 sm:p-6 md:p-8 bg-card">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">Research & Publications</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Actively publishing research in peer-reviewed journals and presenting at international conferences.
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap ml-4"
        >
          {isExpanded ? 'Hide' : 'View All'}
          <span>{isExpanded ? '−' : '+'}</span>
        </button>
      </div>

      {!isExpanded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <p className="font-semibold text-foreground mb-2">Journal Publications</p>
            <p className="text-accent text-2xl font-bold">{publications.filter(p => p.type === 'journal').length}</p>
            <p className="text-muted-foreground text-sm">Peer-reviewed articles</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Conference Presentations</p>
            <p className="text-accent text-2xl font-bold">{publications.filter(p => p.type === 'conference').length}</p>
            <p className="text-muted-foreground text-sm">Research presentations</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Total Citations</p>
            <p className="text-accent text-2xl font-bold">{publications.reduce((sum, p) => sum + p.citations, 0)}</p>
            <p className="text-muted-foreground text-sm">Google Scholar</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Research Focus</p>
            <p className="text-muted-foreground text-sm">Dragon fruit cultivation, soil-plant dynamics, spectral analysis</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-sm sm:text-base font-semibold text-foreground flex-1">
                  {pub.title}
                </h4>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">{pub.authors}</p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-accent">{pub.journal}</span>
                {pub.volume && <span>• Vol. {pub.volume}</span>}
                {pub.pages && <span>• pp. {pub.pages}</span>}
                <span>• {pub.year}</span>
                {pub.publisher && <span>• {pub.publisher}</span>}
              </div>
              {pub.citations > 0 && (
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-accent">
                  <span className="font-semibold">Cited by {pub.citations}</span>
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-border">
            <a
              href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              <GraduationCap size={16} />
              View full publication list on Google Scholar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
