'use client';

import { useState } from 'react';
import { Building2, CalendarDays, ChevronDown, Circle, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

type ProjectCard = {
  id: string;
  badge: string;
  title: string;
  meta: Array<{
    label: string;
    kind: 'date' | 'institution';
  }>;
  description: string;
  tags: string[];
  preview: {
    src: string;
    alt: string;
    label: string;
  };
};

const PROJECT_CARDS: ProjectCard[] = [
  {
    id: 'proj-df',
    badge: 'Ongoing',
    title: 'Dragon Fruit Mapping & Growth Assessment Using Remote Sensing',
    meta: [
      { label: '2022 – Present', kind: 'date' },
      { label: 'FIU', kind: 'institution' },
    ],
    description:
      'Multi-year comparative research on dragon fruit production integrating hyperspectral imaging, Planet/NAIP satellite data, XRF/ICP-MS soil analysis, and disease detection via spectral reflectance. Primary dissertation research funded by USDA-NRCS.',
    tags: ['Hyperspectral', 'USDA-NRCS', 'Remote Sensing', 'Python'],
    preview: {
      src: '/project-previews/dragon-fruit.png',
      alt: 'Precision agriculture presentation preview',
      label: 'Document preview',
    },
  },
  {
    id: 'proj-geo',
    badge: 'Completed',
    title: 'City Infrastructure Geodatabase & Utility Mapping',
    meta: [{ label: '2022 – 2023', kind: 'date' }],
    description:
      'Municipal geodatabases integrating water, sewer, stormwater, roads, and parcels with subtypes, domains, and topology rules for infrastructure planning.',
    tags: ['ArcGIS', 'Geodatabase', 'SQL'],
    preview: {
      src: '/project-previews/geodatabase.png',
      alt: 'GIS presentation preview',
      label: 'Document preview',
    },
  },
  {
    id: 'proj-lulc',
    badge: 'Completed',
    title: 'Land-Use Change Detection & Urban Growth Analysis',
    meta: [{ label: '2021 – 2022', kind: 'date' }],
    description:
      'Multi-temporal Landsat/Sentinel classification for urban planning in Nepal — supervised classification and spectral indices for LULC mapping.',
    tags: ['Landsat', 'Sentinel', 'Python', 'Change Detection'],
    preview: {
      src: '/project-previews/lulc.png',
      alt: 'Land use and temperature presentation preview',
      label: 'Document preview',
    },
  },
  {
    id: 'proj-flood',
    badge: 'Completed',
    title: 'Flood Risk Assessment & Emergency Response Mapping',
    meta: [{ label: '2020 – 2021', kind: 'date' }],
    description:
      'Hydrologic and terrain modeling using DEMs for flood-prone area maps, evacuation routes, and ArcGIS dashboards for disaster preparedness in Nepal.',
    tags: ['HEC-RAS', 'ArcGIS', 'Hydrology', 'DEM'],
    preview: {
      src: '/project-previews/flood.png',
      alt: 'GIS and land use presentation preview',
      label: 'Document preview',
    },
  },
  {
    id: 'proj-nlup',
    badge: 'Completed',
    title: 'National Land Use Planning Project',
    meta: [{ label: '2018 – 2022', kind: 'date' }],
    description:
      'Led spatial data collection for national land-use classification in Nepal — zoning analysis, suitability modeling, and policy-supporting maps for government planning.',
    tags: ['Land Use', 'Zoning', 'Policy Analysis'],
    preview: {
      src: '/project-previews/land-use.png',
      alt: 'Land use thesis presentation preview',
      label: 'Document preview',
    },
  },
];

export default function ProjectsSection() {
  const [openIds, setOpenIds] = useState<string[]>(
    PROJECT_CARDS.map((card) => card.id),
  );

  const toggleCard = (id: string) => {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <section className="sec" id="projects">
      <div className="con">
        <div className="sh">
          <div className="stag">
            <Circle fill="currentColor" size={8} />
            <span>Projects</span>
          </div>
          <h2 className="stitle">Major Research Projects</h2>
        </div>

        <div>
          {PROJECT_CARDS.map((card) => {
            const isOpen = openIds.includes(card.id);

            return (
              <div className={`rc${isOpen ? ' open' : ''}`} key={card.id}>
                <button
                  className="rc-h"
                  onClick={() => toggleCard(card.id)}
                  type="button"
                >
                  <span className="badge b-proj">{card.badge}</span>

                  <div className="rc-info">
                    <h3>{card.title}</h3>
                    <div className="rmeta">
                      {card.meta.map((item) => (
                        <span key={item.label}>
                          {item.kind === 'institution' ? (
                            <Building2 size={14} />
                          ) : (
                            <CalendarDays size={14} />
                          )}
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rc-tog">
                    <ChevronDown size={14} />
                  </div>
                </button>

                <div className="rc-det">
                  <div className="rc-inner">
                    <div className="ds">
                      <h4>Description</h4>
                      <p>{card.description}</p>
                    </div>

                    <div className="rtags">
                      {card.tags.map((tag) => (
                        <span className="rtag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="ds research-detail">
                      <h4 className="research-label">
                        <ImageIcon size={16} />
                        <span>Project Visuals</span>
                      </h4>
                      <div className="proj-preview-card">
                        <div className="rc-media">
                          <Image
                            alt={card.preview.alt}
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, 900px"
                            src={card.preview.src}
                          />
                        </div>
                        <span className="proj-media-label">{card.preview.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
