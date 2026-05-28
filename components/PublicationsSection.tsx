'use client';

import { useState } from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: string;
  category: 'journal' | 'conference';
  doi?: string;
  url?: string;
};

const PUBLICATIONS: Publication[] = [
  {
    title:
      'Assessment of Soil and Plant Nutrient Status, Spectral Reflectance, and Growth Performance of Various Dragon Fruit (Pitaya) Species Cultivated Under High Tunnel Systems',
    authors:
      'Priyanka Belbase, Krishnaswamy Jayachandran, and Maruthi Sridhar Balaji Bhaskar',
    venue: 'Soil Systems',
    year: '2025',
    status: 'Published',
    category: 'journal',
    doi: '10.3390/soilsystems9030075',
    url: 'https://doi.org/10.3390/soilsystems9030075',
  },
  {
    title: 'Early Detection and Differentiation of Dragon Fruit Plant Diseases Using Optical Spectral Reflectance',
    authors: 'Priyanka Belbase and Maruthi Sridhar Balaji Bhaskar',
    venue: 'Applied Sciences',
    year: '2026',
    status: 'Published',
    category: 'journal',
    doi: '10.3390/app16073480',
    url: 'https://doi.org/10.3390/app16073480',
  },
  {
    title:
      'Sustainable Cultivation of Dragon Fruit: Integrated Nutrient and Pest Management Strategies for Enhanced Productivity and Environmental Stewardship',
    authors: 'Priyanka Belbase and Maruthi Sridhar Balaji Bhaskar',
    venue: 'Agronomy',
    year: '2025',
    status: 'Published',
    category: 'journal',
    doi: '10.3390/agronomy15112514',
    url: 'https://doi.org/10.3390/agronomy15112514',
  },
  {
    title:
      'Investigating the Relationship Between Soil MACRO Nutrient Concentrations Obtained by XRF and ICP-MS in Dragon Fruit Plants',
    authors: 'Priyanka Belbase and Maruthi Sridhar Balaji Bhaskar',
    venue: 'AGU Fall Meeting Abstracts',
    year: '2024',
    status: 'Conference abstract',
    category: 'conference',
    url: 'https://ui.adsabs.harvard.edu/abs/2024AGUFMGC21J0007B/abstract',
  },
  {
    title:
      'Comparative Evaluation of Dragon Fruit Performance in High Tunnel and Field Environments in South Florida',
    authors:
      'Priyanka Belbase, Maruthi Sridhar Balaji Bhaskar, Krishnaswamy Jayachandran, and Mahadev Bhat',
    venue: 'ASA, CSSA, SSSA International Annual Meeting',
    year: '2023',
    status: 'Conference proceeding',
    category: 'conference',
    url: 'https://scisoc.confex.com/scisoc/2023am/meetingapp.cgi/Paper/152286',
  },
];

const SUMMARY_CARDS = [
  {
    label: 'Peer-Reviewed Papers',
    value: '5',
    caption: 'Journal papers from the CVs',
  },
  {
    label: 'Conference Presentations',
    value: '10+',
    caption: 'Research talks and proceedings',
  },
  {
    label: 'Google Scholar Citations',
    value: '19',
    caption: 'Current citation highlight',
  },
  {
    label: 'Linked Highlights',
    value: PUBLICATIONS.length,
    caption: 'Selected records with links',
  },
] as const;

export default function PublicationsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="sec" id="publications" style={{ background: 'var(--pb-surface)' }}>
      <div className="con">
        <div className="sh">
          <div className="stag">
            <GraduationCap size={14} />
            <span>Publications</span>
          </div>
          <h2 className="stitle">Highlighted Publications</h2>
          <p className="ssub">
            Five peer-reviewed journal papers, 10+ conference presentations, and 19 Google Scholar citations.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 border border-border rounded-lg p-4 sm:p-6 md:p-8 bg-card">
          <div className="flex justify-between items-start gap-4 mb-4 sm:mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">Selected Scholarly Work</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Updated from the combined CV set and publication records, with the citation count highlighted for quick review.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded((current) => !current)}
              className="text-accent font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap"
              type="button"
            >
              {isExpanded ? 'Hide' : 'View All'}
              <span>{isExpanded ? '−' : '+'}</span>
            </button>
          </div>

          {!isExpanded ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {SUMMARY_CARDS.map((card) => (
                <div key={card.label}>
                  <p className="font-semibold text-foreground mb-2">{card.label}</p>
                  <p className="text-accent text-2xl font-bold">{card.value}</p>
                  <p className="text-muted-foreground text-sm">{card.caption}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {PUBLICATIONS.map((publication) => (
                <div
                  key={`${publication.title}-${publication.year}`}
                  className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="rtag">{publication.status}</span>
                        <span className="rtag">{publication.year}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-foreground">{publication.title}</h4>
                    </div>

                    {publication.url ? (
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors flex-shrink-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : null}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{publication.authors}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-accent">{publication.venue}</span>
                    {publication.doi ? <span>• DOI: {publication.doi}</span> : null}
                  </div>
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
                  View Google Scholar profile
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
