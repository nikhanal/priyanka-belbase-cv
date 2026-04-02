import { Circle } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    title: 'Graduate Research Assistant',
    company: 'Florida International University',
    location: 'Miami, FL',
    period: 'Aug 2022 – Present',
    highlights: [
      'Multi-year research on dragon fruit using hyperspectral imaging and XRF/ICP-MS',
      'Remote sensing analysis with Planet, Sentinel-2, and multispectral datasets',
      'Automated workflows for classification, vegetation indices, and temporal analysis',
      'Developed Nutrient Deficiency Scoring (NDS) framework for 11 nutrients',
      'Mentoring students and facilitating undergraduate lab coursework',
    ],
  },
  {
    title: 'Environmentalist & GIS Specialist',
    company: 'Bhugol Engineering Consultant',
    location: 'Kathmandu, Nepal',
    period: 'Aug 2018 – May 2022',
    highlights: [
      'Led spatial data collection, land-use classification, and suitability modeling',
      'Designed geodatabases for policy, infrastructure, and agricultural modernization',
      'Performed EIA/IEE using geospatial tools and hazard mapping',
      'Delivered GIS training for government and university stakeholders',
    ],
  },
  {
    title: 'GIS Assistant',
    company: 'Geo Spatial Engineering Solutions',
    location: 'Nepal',
    period: 'Jul 2017 – Jun 2018',
    highlights: [
      'Processed satellite imagery, DEMs, and vector layers for infrastructure planning',
      'Developed automated geoprocessing models in ArcGIS ModelBuilder',
    ],
  },
  {
    title: 'GIS Digitizer',
    company: 'ShreeRS Consultant',
    location: 'Nepal',
    period: 'Feb 2016 – Apr 2017',
    highlights: [
      'Digitized land parcels, zoning boundaries, and infrastructure layers',
      'Created standardized cartographic products for land-use projects',
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
