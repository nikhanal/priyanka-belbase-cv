'use client';

import { useState } from 'react';
import {
  CalendarDays,
  ChevronDown,
  Circle,
  Image as ImageIcon,
  MapPin,
  Paperclip,
  User,
} from 'lucide-react';
import Image from 'next/image';

type ResearchCard = {
  id: string;
  badge?: string;
  badgeClass?: string;
  title: string;
  meta: [string, string, string];
  sections: Array<{
    heading: string;
    body?: string;
    bullets?: string[];
  }>;
  tags: string[];
  image: string;
  imageAlt: string;
  attachment?: {
    name: string;
    href: string;
  };
};

const RESEARCH_CARDS: ResearchCard[] = [
  {
    id: 'grs2026',
    badge: 'Poster',
    badgeClass: 'b-post',
    title: 'Linking Reflectance Signatures to Nutrient Deficiency in Dragon Fruit Using Spectral Analysis',
    meta: ['GRS 2026', 'Florida International University', 'Belbase & Bhaskar'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Develop a Nutrient Deficiency Scoring (NDS) framework integrating eleven macro- and micronutrient concentrations into a single composite index and evaluate correlation with full-range hyperspectral reflectance (350-2500 nm) across three growing seasons.',
      },
      {
        heading: 'Methods',
        bullets: [
          'Macronutrients standardized to ppm via x10,000 conversion for unified scale',
          'Weighted proximity-to-optimum NDS (range 0-100) with sign-inversion transformations',
          'Pearson correlation across full VIS-NIR-SWIR spectrum',
          'Vegetation index analysis (NDVI, GNDVI) vs. composite NDS',
        ],
      },
      {
        heading: 'Key Results',
        bullets: [
          'NDS achieved r = 0.794 (p < 0.001) at 816 nm within NIR plateau',
          '1,905 wavelengths with r > 0.60 identified as prediction-capable bands',
          'N: r = -0.738 at 811 nm; P: r = -0.712 at 1,997 nm',
          'NDS increased across seasons (2022: 28.3 -> 2025: 83.6; F = 91.03, p < 0.001)',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'NIR and SWIR spectral regions provide complementary windows for non-destructive multi-nutrient deficiency estimation. Full-spectrum data outperforms standard VIs for monitoring.',
      },
    ],
    tags: ['Hyperspectral', 'NDS', 'NIR/SWIR', 'Nutrient Deficiency'],
    image: '/research/grs2026.jpg',
    imageAlt: 'GRS 2026 poster',
    attachment: {
      name: 'GRS 2026.pdf',
      href: '/research/grs2026.pdf',
    },
  },
  {
    id: 'grs2025',
    badge: 'Poster',
    badgeClass: 'b-post',
    title: 'Assessing Early Detection of Diseases in Dragon Fruit Using Chlorophyll Peak Reflectance',
    meta: ['GRS 2025', 'FIU', 'Belbase & Bhaskar'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Investigate early disease detection in dragon fruit using chlorophyll peak reflectance at 120, 365, and 945 days after plantation.',
      },
      {
        heading: 'Methods',
        bullets: [
          'RCBD design at FIU organic farm - high tunnel + open field',
          'Three species (H. undatus, H. megalanthus, H. costaricenes), 4 treatments, 3 replicates',
          'Spectral reflectance 350-2500 nm at cladode and canopy levels',
        ],
      },
      {
        heading: 'Key Results',
        bullets: [
          'Healthy plants (120 days): strong chlorophyll peaks and high NIR reflectance',
          'Disease progression (365-945 days): diminished chlorophyll, decreased NIR',
          'Diseases identified: Stem Canker, Anthracnose, Bacterial Soft Rot, Botryosphaeria, Enterobacteria',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'Spectral analysis enables early disease detection before visible symptoms appear, supporting precision agriculture interventions.',
      },
    ],
    tags: ['Disease Detection', 'Chlorophyll', 'Spectroradiometer', 'Precision Ag'],
    image: '/research/grs2025.jpg',
    imageAlt: 'GRS 2025 poster',
  },
  {
    id: 'agu2024',
    badge: 'Conference',
    badgeClass: 'b-conf',
    title: 'Investigating the Relationship Between Soil Macro Nutrient Concentrations by XRF and ICP-MS',
    meta: ['AGU 2024', 'Washington, D.C.', 'Belbase & Bhaskar'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Evaluate XRF as a rapid, non-destructive alternative to ICP-MS for soil macro-nutrient analysis in dragon fruit cultivation.',
      },
      {
        heading: 'Methods',
        bullets: [
          'Soil samples from high tunnel and open environments at FIU organic garden',
          'Three dragon fruit species; XRF + ICP-MS analysis at 120 and 365 days',
          'Statistical correlation and regression analysis',
        ],
      },
      {
        heading: 'Key Results',
        bullets: [
          'K (potassium): R^2 = 0.852, p < 0.001 at 120 days',
          'P: moderate correlation at 120 days (R^2 = 0.198)',
          'Ca: no significant correlation at any time point',
          'All nutrients weakened significantly by 365 days',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'XRF accurately measures K at shorter intervals but shows poor agreement for Ca and P. Improved calibration needed for broader applicability.',
      },
    ],
    tags: ['XRF', 'ICP-MS', 'Soil Nutrients', 'Dragon Fruit'],
    image: '/research/agu2024.jpg',
    imageAlt: 'AGU 2024 presentation graphic',
  },
  {
    id: 'asa',
    badge: 'Poster',
    badgeClass: 'b-post',
    title: 'Comparative Evaluation of Dragon Fruit Performance in High Tunnel and Field Environments',
    meta: ['ASA/CSSA/SSSA', 'USA', 'Belbase, Bhaskar, Jayachandran, Bhat'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Assess high tunnel effects on dragon fruit physiology, nutrient concentrations, and spectral reflectance as a growth monitoring tool.',
      },
      {
        heading: 'Methods',
        bullets: [
          'RCBD: 3 species x 4 vermicompost treatments x 3 replicates; 72 total plants',
          'Soil + plant analysis via standard methods and XRF',
          'Spectral reflectance 350-2500 nm via spectroradiometer',
        ],
      },
      {
        heading: 'Key Results',
        bullets: [
          'High tunnel: higher K, Ca, Mg, Na, OM, CEC vs. open field',
          'Reduced nutrient leaching and runoff inside tunnels',
          'Spectral reflectance differentiated healthy from infected/sunburned plants',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'High tunnels provide an environmentally friendly approach for sustainable dragon fruit cultivation with enhanced soil conservation.',
      },
    ],
    tags: ['High Tunnel', 'RCBD', 'Vermicompost', 'Soil Conservation'],
    image: '/research/asa.jpg',
    imageAlt: 'ASA poster',
  },
  {
    id: 'semza',
    badge: 'Seminar',
    badgeClass: 'b-sem',
    title: 'Enhancing Soil Fertility Through High Tunnel Dragon Fruit Cultivation',
    meta: ['International Seminar', 'South Africa', 'Belbase, P.'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Present findings on high tunnel cultivation enhancing soil fertility and nutrient retention for sustainable soil management.',
      },
      {
        heading: 'Key Topics',
        bullets: [
          'Soil fertility concepts and nutrient retention mechanisms',
          'Multi-year nutrient dynamics across 3 dragon fruit species',
          'Crop performance: height, stem thickness, chlorophyll indicators',
          'Sustainability outcomes and precision agriculture integration',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'High tunnels improve nutrient retention and soil health. Recommendations include organic inputs, farmer training, and sustainable policy promotion.',
      },
    ],
    tags: ['Soil Fertility', 'Sustainability', 'Nutrient Retention'],
    image: '/research/semza.jpg',
    imageAlt: 'Seminar visual',
  },
  {
    id: 'volo',
    badge: 'Conference',
    badgeClass: 'b-conf',
    title: 'Evaluation of Plant Varieties for Green Roofs in South Florida',
    meta: ['VoLo Climate Correction 2024', 'Orlando, FL', 'Oyege, Prats, Kiwanuka, Belbase'],
    sections: [
      {
        heading: 'Objective',
        body:
          "Evaluate plant species suitability for green roofs in South Florida's subtropical climate.",
      },
      {
        heading: 'Methods',
        bullets: [
          'FIU Organic Garden setup mimicking rooftop design (4-6 inch depth)',
          '8 species tested: Buckwheat, Cowpea, Bahiagrass, Millet varieties, Velvet Beans, Sun Hemp',
          'Growth monitored from 7 DAS through 84 DAS with soil sampling',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'Drought-resistant, heat-tolerant species combined with soil amendments provide best green roof strategy for urban sustainability.',
      },
    ],
    tags: ['Green Roofs', 'Urban Sustainability', 'Climate Adaptation'],
    image: '/research/volo.jpg',
    imageAlt: 'VoLo conference poster',
  },
  {
    id: 'grs2023',
    badge: 'Poster',
    badgeClass: 'b-post',
    title: 'Monitoring Botryosphaeria and Enterobacteria in Dragon Fruit Using Foliar Spectral Reflectance',
    meta: ['GRS 2023', 'FIU', 'Belbase & Bhaskar'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Analyze spectral changes from Botryosphaeria and Enterobacteria infections for early disease detection.',
      },
      {
        heading: 'Key Results',
        bullets: [
          '22 plants partially affected; majority infected by Enterobacteria',
          'Infected plants showed lower NIR values and altered visible profiles',
          'High tunnel plants: higher K, Ca, Mg vs. open field',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'Spectral changes in diseased plants enable early detection, helping minimize yield loss via non-invasive monitoring.',
      },
    ],
    tags: ['Botryosphaeria', 'Enterobacteria', 'Foliar Analysis'],
    image: '/research/grs2023.jpg',
    imageAlt: 'GRS 2023 poster',
  },
  {
    id: 'nepal2022',
    badge: 'Conference',
    badgeClass: 'b-conf',
    title: 'Identification of Dominant Vegetation Types and Spectral Response in Langtang Watershed, Nepal',
    meta: ['8th Graduate Conference 2022', 'Surkhet, Nepal', 'Belbase & Thakuri'],
    sections: [
      {
        heading: 'Objective',
        body:
          'Identify dominant vegetation types and spectral signatures in Langtang watershed using Landsat-8 OLI imagery.',
      },
      {
        heading: 'Key Results',
        bullets: [
          'Dominant species: Rhododendron spp. and Larix himalica',
          'Band NIR best for species discrimination, independent of biophysical environments',
          'Reflectance similar in visible bands but markedly different in NIR',
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'NIR band provides reliable spectral discrimination for vegetation mapping and biodiversity conservation in Nepal.',
      },
    ],
    tags: ['Landsat OLI', 'Nepal', 'ENVI', 'Biodiversity'],
    image: '/research/nepal2022.jpg',
    imageAlt: 'Nepal conference poster',
  },
];

export default function ResearchSection() {
  const [openIds, setOpenIds] = useState<string[]>(
    RESEARCH_CARDS.map((card) => card.id),
  );

  const toggleCard = (id: string) => {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <section className="sec" id="research" style={{ background: 'var(--pb-surface)' }}>
      <div className="con">
        <div className="sh">
          <div className="stag">
            <Circle fill="currentColor" size={8} />
            <span>Research &amp; Conferences</span>
          </div>
          <h2 className="stitle">Academic Contributions</h2>
          <p className="ssub">Click any card to expand full details.</p>
        </div>

        <div>
          {RESEARCH_CARDS.map((card) => {
            const isOpen = openIds.includes(card.id);

            return (
              <div className={`rc${isOpen ? ' open' : ''}`} key={card.id}>
                <button
                  className="rc-h"
                  onClick={() => toggleCard(card.id)}
                  type="button"
                >
                  {card.badge ? (
                    <span className={`badge ${card.badgeClass}`}>{card.badge}</span>
                  ) : null}

                  <div className="rc-info">
                    <h3>{card.title}</h3>
                    <div className="rmeta">
                      <span>
                        <CalendarDays size={14} />
                        {card.meta[0]}
                      </span>
                      <span>
                        <MapPin size={14} />
                        {card.meta[1]}
                      </span>
                      <span>
                        <User size={14} />
                        {card.meta[2]}
                      </span>
                    </div>
                  </div>

                  <div className="rc-tog">
                    <ChevronDown size={14} />
                  </div>
                </button>

                <div className="rc-det">
                  <div className="rc-inner">
                    {card.sections.map((section) => (
                      <div className="ds" key={section.heading}>
                        <h4>{section.heading}</h4>
                        {section.body ? <p>{section.body}</p> : null}
                        {section.bullets ? (
                          <ul>
                            {section.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}

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
                        <span>Image</span>
                      </h4>
                      <div className="rc-media">
                        <Image
                          alt={card.imageAlt}
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, 900px"
                          src={card.image}
                        />
                      </div>
                    </div>

                    {card.attachment ? (
                      <div className="ds">
                        <h4 className="research-label">
                          <Paperclip size={16} />
                          <span>Attachments</span>
                        </h4>
                        <div className="att-list">
                          <div className="att-item">
                            <Paperclip size={16} />
                            <span className="att-name">{card.attachment.name}</span>
                            <a className="att-dl" download href={card.attachment.href}>
                              Download
                            </a>
                          </div>
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
