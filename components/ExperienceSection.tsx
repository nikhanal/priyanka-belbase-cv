import { Circle } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    title: 'Graduate Research Assistant - GIS & Remote Sensing Specialist',
    company: 'Environment & Earth Remote Sensing Lab, Florida International University',
    location: 'Miami, FL',
    period: 'Aug 2022 – Present',
    highlights: [
      'Conduct large-scale remote sensing analyses using Planet, Sentinel-2, NAIP, LiDAR, and multispectral datasets for crop mapping, land-cover classification, and temporal growth assessment.',
      'Develop automated Python, ArcPy, R, ModelBuilder, and Google Earth Engine workflows for data ingestion, image classification, vegetation index extraction, change detection, and time-series analysis.',
      'Administer research geodatabases and spatial data libraries, including schema design, metadata documentation, QA/QC procedures, and integration of raster, vector, spectral, chemical, and field datasets.',
      'Design predictive and machine-learning workflows integrating hyperspectral reflectance with XRF and ICP-MS data to detect nutrient deficiencies, disease signals, and crop-health patterns.',
      'Build ArcGIS Online dashboards, web maps, and near real-time crop-health displays that translate multi-source geospatial data into decision-ready visual products.',
      'Interpret laboratory and field analytical results, compare findings against environmental benchmarks, and communicate results through publications, conference presentations, maps, and reports.',
      'Manage greenhouse operations, field sampling campaigns, environmental controls, pest monitoring, and research data processing workflows.',
      'Mentor undergraduate students and facilitate GIS and environmental science labs, lectures, field protocols, and spatial data management training.',
    ],
  },
  {
    title: 'Environmentalist & GIS Specialist',
    company: 'National Land Use Project, Bhugol Engineering Consultant Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Aug 2018 – May 2022',
    highlights: [
      'Led end-to-end GIS and environmental planning support for national land-use classification, zoning, hazard mapping, suitability modeling, and constraints analysis across multiple districts.',
      'Performed environmental impact assessments, permitting support, due diligence, and compliance reviews using geospatial modeling, hazard and vulnerability mapping, field surveys, and terrain-hydrology analysis.',
      'Designed and maintained enterprise geodatabases with subtypes, domains, topology rules, metadata standards, CAD/GPS/tabular conversion workflows, and multi-user editing procedures including post-and-reconcile support.',
      'Developed GIS applications, automated geoprocessing tools, and map-production workflows for infrastructure planning, agricultural modernization, and environmental management systems.',
      'Consulted with government agencies, engineering teams, contractors, and regulatory bodies on land-use policy, zoning compliance, proposed regulations, permitting, and environmental constraints.',
      'Delivered GIS training workshops, mentored junior staff, coordinated multidisciplinary contributors, and produced technical reports and cartographic deliverables for national review.',
    ],
  },
  {
    title: 'GIS Assistant / Analyst',
    company: 'Geo Spatial Engineering Solutions Pvt. Ltd.',
    location: 'Nepal',
    period: 'Jul 2017 – Jun 2018',
    highlights: [
      'Processed satellite imagery, DEMs, LiDAR, vector data, CAD files, GPS records, paper maps, and survey datasets for infrastructure feasibility, routing, and environmental planning projects.',
      'Built repeatable ArcGIS ModelBuilder and Python workflows for data cleaning, topology validation, conversion, ETL-style preparation, and production mapping.',
      'Digitized parcels and zoning districts, linked attribute tables, managed metadata, and prepared searchable zoning maps and public-facing GIS outputs.',
      'Supported online and enterprise GIS map publication, third-party data integration, hardware/software requirements review, and spatial data library organization.',
      'Collaborated with engineers, ecologists, and planners to integrate spatial datasets into feasibility studies, reporting, and operational decision-making.',
    ],
  },
  {
    title: 'GIS Digitizer / Technician & Cartographer',
    company: 'ShreeRS Consultant',
    location: 'Nepal',
    period: 'Feb 2016 – Apr 2017',
    highlights: [
      'Digitized land parcels, zoning boundaries, administrative boundaries, and infrastructure layers with strong attention to georeferencing, topology correction, and attribute quality.',
      'Prepared field maps, supported GPS-based data collection, and assisted with layer conversion, integration, and GIS deliverable packaging.',
      'Maintained spatial data libraries and created standardized cartographic layouts and map products for engineering, environmental, land-use, and utility planning projects.',
    ],
  },
] as const;

export default function ExperienceSection() {
  return (
    <section className="sec" id="experience">
      <div className="con">
        <div className="sh">
          <div className="stag">
            <Circle fill="currentColor" size={8} />
            <span>Career Path</span>
          </div>
          <h2 className="stitle">Professional Experience</h2>
        </div>

        <div className="tl">
          {EXPERIENCE_ITEMS.map((item) => (
            <div className="tl-i" key={`${item.title}-${item.period}`}>
              <div className="tl-dot" />
              <div className="tl-c">
                <div className="tl-h">
                  <div>
                    <h3>{item.title}</h3>
                    <span className="co">{item.company}</span>
                    <br />
                    <span className="loc">{item.location}</span>
                  </div>
                  <span className="tl-d">{item.period}</span>
                </div>

                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
