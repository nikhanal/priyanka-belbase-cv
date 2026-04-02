import {
  BarChart3,
  ChartNoAxesCombined,
  Circle,
  Code2,
  Database,
  Globe2,
  Leaf,
  Microscope,
  Satellite,
} from 'lucide-react';

const SKILL_CARDS = [
  {
    title: 'GIS & Remote Sensing',
    icon: Globe2,
    tags: ['ArcGIS Pro', 'ArcGIS Online', 'QGIS', 'ENVI', 'SNAP', 'Google Earth Engine'],
  },
  {
    title: 'Remote Sensing Data',
    icon: Satellite,
    tags: ['Landsat', 'Sentinel', 'Planet', 'NAIP', 'LiDAR', 'Hyperspectral'],
  },
  {
    title: 'Spatial Analysis',
    icon: ChartNoAxesCombined,
    tags: ['Raster Modeling', 'Hydrology', 'Network Analysis', 'Suitability Modeling', 'Change Detection'],
  },
  {
    title: 'Field Instruments',
    icon: Microscope,
    tags: ['Spectroradiometer', 'XRF', 'ICP-MS', 'Chlorophyll Sensor', 'Drone Licensed'],
  },
  {
    title: 'Programming',
    icon: Code2,
    tags: ['R', 'Python', 'SPSS', 'SQL', 'PostGIS', 'ModelBuilder'],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    tags: ['ArcGIS Dashboards', 'Power BI', 'Tableau', 'Cartography'],
  },
  {
    title: 'Agricultural Science',
    icon: Leaf,
    tags: ['Precision Agriculture', 'Crop Monitoring', 'Soil Nutrients', 'RCBD'],
  },
  {
    title: 'Specialized',
    icon: Database,
    tags: ['Geodatabase Design', 'EIA/IEE', 'Technical Writing', 'GIS Training'],
  },
] as const;

export default function SkillsSection() {
  return (
    <section className="sec" id="skills" style={{ background: 'var(--pb-surface)' }}>
      <div className="con">
        <div className="sh">
          <div className="stag">
            <Circle fill="currentColor" size={8} />
            <span>Expertise</span>
          </div>
          <h2 className="stitle">Skills &amp; Technical Proficiencies</h2>
        </div>

        <div className="sk-g">
          {SKILL_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div className="sk" key={card.title}>
                <div className="sk-i">
                  <Icon size={18} />
                </div>
                <h3>{card.title}</h3>
                <div className="tags">
                  {card.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
