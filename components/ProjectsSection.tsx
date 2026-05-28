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
  preview?: {
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
    id: 'proj-precision-ag',
    badge: 'Research',
    title: 'Precision Agriculture & Crop Health Monitoring',
    meta: [
      { label: '2019 – Present', kind: 'date' },
      { label: 'FIU', kind: 'institution' },
    ],
    description:
      'Integrated soil chemistry, plant physiology, hyperspectral data, and geospatial analysis to support nutrient management, crop vigor assessment, and climate-resilient dragon fruit production.',
    tags: ['Precision Agriculture', 'Spectral Analysis', 'Soil-Plant Dynamics', 'R'],
  },
  {
    id: 'proj-nlup',
    badge: 'Professional',
    title: 'National Land Use Planning Project',
    meta: [
      { label: '2018 – 2022', kind: 'date' },
      { label: 'Bhugol Engineering Consultant', kind: 'institution' },
    ],
    description:
      'Led national-scale GIS support for land-use classification, zoning analysis, suitability modeling, hazard mapping, and multi-user geodatabase development for Nepal government planning workflows.',
    tags: ['Land Use', 'Zoning', 'Suitability Modeling', 'Geodatabase Design'],
    preview: {
      src: '/project-previews/land-use.png',
      alt: 'National land use planning preview',
      label: 'Project preview',
    },
  },
  {
    id: 'proj-geo',
    badge: 'Professional',
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
    badge: 'Academic',
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
    badge: 'Professional',
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
    id: 'proj-sagarmatha',
    badge: 'Academic',
    title: 'Sagarmatha National Park Landcover Change & Imja Glacier Lake Impact Analysis',
    meta: [
      { label: 'Graduate Project', kind: 'date' },
      { label: 'FIU', kind: 'institution' },
    ],
    description:
      'Analyzed landcover transitions in Sagarmatha National Park and evaluated downstream implications for the Imja Glacier Lake system using ArcGIS-based change analysis.',
    tags: ['Glacier Lake', 'Landcover Change', 'ArcGIS', 'Mountain Environments'],
  },
  {
    id: 'proj-treeline',
    badge: 'Academic',
    title: 'Spatial Pattern and Factors Controlling Treeline in the Nepal Himalayas',
    meta: [
      { label: 'Seminar Project', kind: 'date' },
      { label: 'FIU', kind: 'institution' },
    ],
    description:
      'Explored elevation, aspect, and climate controls on treeline dynamics in the Nepal Himalayas to understand mountain ecosystem responses to environmental change.',
    tags: ['Treeline', 'Nepal Himalayas', 'Mountain Ecology', 'Spatial Statistics'],
  },
  {
    id: 'proj-urban-lst',
    badge: 'Academic',
    title: 'Urban Land Surface Temperature Change Across Two Ecological Zones of Nepal',
    meta: [
      { label: '2022', kind: 'date' },
      { label: 'EVR 5044', kind: 'institution' },
    ],
    description:
      'Examined links between land surface temperature and land-use/land-cover change across two Nepali cities to quantify urban heat signatures and landscape drivers.',
    tags: ['LST', 'LULC', 'Urban Climate', 'Remote Sensing'],
  },
  {
    id: 'proj-ml',
    badge: 'Academic',
    title: 'Crop Analysis and Prediction Using Machine Learning',
    meta: [
      { label: '2024', kind: 'date' },
      { label: 'Machine Learning', kind: 'institution' },
    ],
    description:
      'Compared machine learning approaches for crop analysis and prediction workflows, focusing on model performance, feature behavior, and agricultural decision support.',
    tags: ['Machine Learning', 'Python', 'Crop Prediction', 'Classification'],
  },
  {
    id: 'proj-drone',
    badge: 'Academic',
    title: 'Drones in Agriculture',
    meta: [
      { label: '2024', kind: 'date' },
      { label: 'Special Topics', kind: 'institution' },
    ],
    description:
      'Surveyed drone-enabled precision agriculture methods for crop scouting, herbicide targeting, and variable-rate management using high-resolution imagery.',
    tags: ['UAV', 'Precision Agriculture', 'Drone Mapping', 'VRT'],
  },
  {
    id: 'proj-okeechobee',
    badge: 'Academic',
    title: 'Assessing the Trophic Status of Lake Okeechobee Using Remote Sensing and GIS',
    meta: [
      { label: 'Academic Project', kind: 'date' },
      { label: 'FIU', kind: 'institution' },
    ],
    description:
      'Assessed eutrophication indicators and lake condition patterns using remote sensing and GIS-derived water quality proxies for a major South Florida water body.',
    tags: ['Lake Okeechobee', 'Water Quality', 'GIS', 'Remote Sensing'],
  },
  {
    id: 'proj-terra-preta',
    badge: 'Academic',
    title: 'Black Carbon and Microplastics Impacts on Terra Preta',
    meta: [
      { label: 'Graduate Final Project', kind: 'date' },
      { label: 'Applied Soil Biology', kind: 'institution' },
    ],
    description:
      'Co-developed a literature-based graduate project examining black carbon behavior, Terra Preta soil properties, and the emerging impacts of microplastics on soil systems.',
    tags: ['Soil Biology', 'Black Carbon', 'Microplastics', 'Literature Review'],
  },
  {
    id: 'proj-utc',
    badge: 'Academic',
    title: 'Urban Tree Canopy Assessment Using LiDAR Point Cloud & Multispectral Remote Sensing',
    meta: [
      { label: '2026', kind: 'date' },
      { label: 'FIU MMC + Tamiami Park', kind: 'institution' },
    ],
    description:
      'Mapped tree canopy, impervious cover, and planting opportunity zones using LiDAR and NAIP imagery to support campus-scale cooling and green infrastructure planning.',
    tags: ['LiDAR', 'NAIP', 'Urban Tree Canopy', 'Random Forest'],
  },
  {
    id: 'proj-bike',
    badge: 'Academic',
    title: 'Gendered Bicycle Commuting Patterns and Land Use Relationships',
    meta: [
      { label: 'Presentation Study', kind: 'date' },
      { label: 'GIS', kind: 'institution' },
    ],
    description:
      'Investigated bicycle commuting patterns and their spatial relationship with land use across two counties, with emphasis on gendered accessibility and mobility outcomes.',
    tags: ['Transportation GIS', 'Land Use', 'Accessibility', 'Spatial Analysis'],
  },
];

export default function ProjectsSection() {
  const [openIds, setOpenIds] = useState<string[]>(
    PROJECT_CARDS.slice(0, 4).map((card) => card.id),
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
          <h2 className="stitle">Professional &amp; Academic Projects</h2>
          <p className="ssub">Expanded using the latest CV set and the project files stored in Downloads.</p>
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

                    {card.preview ? (
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
                    ) : null}
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
