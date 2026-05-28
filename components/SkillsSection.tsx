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
    title: 'GIS Platforms',
    icon: Globe2,
    tags: ['ArcGIS Pro', 'ArcGIS Desktop / 10.x', 'ArcInfo', 'ArcView', 'ArcGIS Online', 'ArcGIS Enterprise', 'ArcGIS Portal', 'Experience Builder', 'QGIS', 'Google Earth Engine'],
  },
  {
    title: 'Remote Sensing Data',
    icon: Satellite,
    tags: ['Landsat', 'Sentinel-2', 'Planet', 'NAIP', 'MODIS', 'GEDI', 'LiDAR', 'SAR', 'DEM/DSM', 'UAV Imagery', 'Multispectral', 'Hyperspectral'],
  },
  {
    title: 'Spatial Analysis',
    icon: ChartNoAxesCombined,
    tags: ['Spatial Analyst', 'Network Analyst', 'Raster Modeling', 'Change Detection', 'Suitability Modeling', 'Constraints Analysis', 'Hydrology', 'Terrain Modeling', 'Geostatistics', 'Predictive Modeling'],
  },
  {
    title: 'Field & Spectral Tools',
    icon: Microscope,
    tags: ['Handheld Spectroradiometer', 'Chlorophyll Sensing', 'XRF', 'ICP-MS', 'UV Spectrum', 'GPS Field Collection', 'Drone2Map', 'FAA Part 107'],
  },
  {
    title: 'Programming & ML',
    icon: Code2,
    tags: ['Python', 'ArcPy', 'Rasterio', 'GeoPandas', 'Pandas', 'scikit-learn', 'R', 'SQL', 'VBA', 'ArcObjects', 'SPSS', 'ModelBuilder'],
  },
  {
    title: 'Geodatabases & Data Engineering',
    icon: Database,
    tags: ['Enterprise Geodatabases', 'File Geodatabases', 'ArcSDE', 'PostGIS', 'PostgreSQL', 'MS SQL Server', 'MS Access', 'Versioned Editing', 'Post & Reconcile', 'ETL Pipelines', 'Metadata Standards', 'QA/QC'],
  },
  {
    title: 'Web GIS & Reporting',
    icon: BarChart3,
    tags: ['ArcGIS Dashboards', 'ArcGIS Online Web Apps', 'Field Maps', 'Survey123', 'Power BI', 'Tableau', 'Cartography', 'Technical Reports', 'Adobe Illustrator', 'Adobe InDesign'],
  },
  {
    title: 'Environmental & Domain',
    icon: Leaf,
    tags: ['Precision Agriculture', 'Crop Monitoring', 'EIA/IEE', 'Hazard Mapping', 'Environmental Compliance', 'Regulatory Review', 'Land-Use Planning', 'Utility Mapping', 'Flood Risk', 'Transportation Planning'],
  },
  {
    title: 'Planning, CAD & Visualization',
    icon: BarChart3,
    tags: ['AutoCAD', 'AutoCAD Map 3D', 'CAD-to-GIS Conversion', 'CAD/BIM Workflows', 'ArcGIS CityEngine', 'ArcGIS Urban', 'Parcel Fabric', 'SketchUp', 'Miro', 'Google Earth'],
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
