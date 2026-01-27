import { Mail, Phone, MapPin, Linkedin, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import PublicationsSection from '@/components/PublicationsSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {

  const skillCategories = [
    {
      title: 'GIS & Remote Sensing',
      skills: ['ArcGIS Pro', 'ArcGIS Online', 'QGIS', 'ENVI', 'SNAP', 'Google Earth Engine', 'ArcGIS City Engine'],
    },
    {
      title: 'Remote Sensing Data',
      skills: ['Landsat', 'Sentinel', 'Planet', 'NAIP', 'LiDAR', 'DEM/DSM', 'Hyperspectral Imagery'],
    },
    {
      title: 'Spatial Analysis',
      skills: ['Raster Modeling', 'Hydrology Analysis', 'Network Analysis', 'Suitability Modeling', 'Change Detection'],
    },
    {
      title: 'Field Research & Instruments',
      skills: ['Hyperspectral Reflectance', 'Chlorophyll Sensing', 'Disease Detection', 'Handheld Spectroradiometer', 'XRF', 'ICP-MS', 'Drone Licensed'],
    },
    {
      title: 'Programming & Analysis',
      skills: ['R', 'Python', 'SPSS', 'SQL', 'PostGIS', 'ArcGIS ModelBuilder'],
    },
    {
      title: 'Visualization & Dashboards',
      skills: ['ArcGIS Online', 'ArcGIS Dashboards', 'Power BI', 'Tableau', 'Cartography'],
    },
    {
      title: 'Specialized Skills',
      skills: ['Geodatabase Design', 'Environmental Impact Assessment', 'Technical Report Writing', 'GIS Training & Coordination'],
    },
  ];

  const experiences = [
    {
      title: 'Graduate Assistant',
      company: 'Environment & Earth Remote Sensing Lab',
      location: 'Florida International University, FL',
      period: 'Aug 2022 – Present',
      highlights: [
        'Conducted multi-year comparative research on dragon fruit production using hyperspectral imaging and advanced chemical analysis (XRF/ICP-MS)',
        'Performed remote sensing analysis using Planet, Sentinel-2, and multispectral datasets for crop mapping and growth assessment',
        'Developed automated workflows for image classification, vegetation index extraction, and temporal trend analysis',
        'Facilitated undergraduate laboratory coursework in earth and environmental sciences while mentoring students in GIS workflows',
      ],
    },
    {
      title: 'Environmentalist & GIS Specialist',
      company: 'Bhugol Engineering Consultant Pvt. Ltd.',
      location: 'Kathmandu, Nepal',
      period: 'Aug 2018 – May 2022',
      highlights: [
        'Led spatial data collection, land-use classification, zoning analysis, and suitability modeling for regional planning',
        'Designed geodatabases to support land-use policy, infrastructure development, and agricultural modernization',
        'Performed environmental impact assessments (EIA/IEE) using geospatial tools and hazard mapping methodologies',
        'Delivered GIS training workshops for government and university stakeholders',
      ],
    },
    {
      title: 'GIS Assistant',
      company: 'Geo Spatial Engineering Solutions Pvt. Ltd.',
      location: 'Nepal',
      period: 'July 2017 – June 2018',
      highlights: [
        'Processed satellite imagery, DEMs, and vector layers for infrastructure planning projects',
        'Digitized parcels and zoning districts; validated topology and created searchable zoning maps',
        'Developed automated geoprocessing models in ArcGIS ModelBuilder to streamline data workflows',
        'Collaborated with engineers and planners to integrate spatial datasets into infrastructure feasibility studies',
      ],
    },
    {
      title: 'GIS Digitizer',
      company: 'ShreeRS consultant',
      location: 'Nepal',
      period: 'Feb 2016 – April 2017',
      highlights: [
        'Digitized land parcels, zoning boundaries, and infrastructure layers with precision',
        'Performed georeferencing, topology correction, and attribute management',
        'Prepared field maps and assisted with GPS-based data collection',
        'Created standardized map layouts and cartographic products for land-use and engineering projects',
      ],
    },
  ];

  const projects = [
    {
      title: 'Dragon Fruit Mapping & Growth Assessment',
      category: 'Remote Sensing & Crop Monitoring',
      period: 'Ongoing',
      description: 'Multi-year comparative research on dragon fruit production using hyperspectral imaging, Planet and NAIP satellite data for crop mapping, growth assessment, and nutrient stress detection.',
      tags: ['Hyperspectral Imaging', 'Remote Sensing', 'Crop Monitoring', 'Python', 'ENVI'],
      highlights: [
        'Processed UAV and satellite imagery for temporal growth tracking',
        'Developed vegetation indices and spectral analysis workflows',
        'Integrated field measurements with remote sensing data',
      ],
    },
    {
      title: 'City Infrastructure Geodatabase & Utility Mapping',
      category: 'Geodatabase Design',
      period: '2022 – 2023',
      description: 'Developed municipal geodatabases integrating water, sewer, stormwater, roads, and parcels with subtypes, domains, and topology rules for accurate infrastructure planning.',
      tags: ['ArcGIS', 'Geodatabase', 'Utilities', 'SQL', 'ArcGIS Enterprise'],
      highlights: [
        'Designed relational database schema for infrastructure assets',
        'Implemented topology rules and data validation protocols',
        'Created web services for public-facing GIS applications',
      ],
    },
    {
      title: 'Land-Use Change Detection & Urban Growth Analysis',
      category: 'Remote Sensing & Spatial Analysis',
      period: '2021 – 2022',
      description: 'Classified multi-temporal Landsat and Sentinel imagery to support urban planning decisions. Used supervised classification and spectral indices for LULC mapping and change detection.',
      tags: ['Landsat', 'Sentinel', 'QGIS', 'Python', 'Change Detection'],
      highlights: [
        'Processed 20+ years of satellite imagery for trend analysis',
        'Validated classifications using ground-truth data and field surveys',
        'Generated thematic maps for planning and policy decisions',
      ],
    },
    {
      title: 'Flood Risk Assessment & Emergency Response Mapping',
      category: 'Hydrology & Disaster Management',
      period: '2020 – 2021',
      description: 'Conducted hydrologic and terrain modeling using DEMs to create flood-prone area maps, evacuation routes, and ArcGIS dashboards for disaster preparedness.',
      tags: ['HEC-RAS', 'ArcGIS', 'Hydrology', 'DEM', 'Risk Assessment'],
      highlights: [
        'Performed watershed delineation and flood inundation modeling',
        'Created interactive dashboards for real-time flood monitoring',
        'Supported emergency management agencies in planning',
      ],
    },
    {
      title: 'Precision Agriculture & Crop Health Monitoring',
      category: 'Remote Sensing & Agriculture',
      period: '2019 – Present',
      description: 'Analyzed multispectral and hyperspectral UAV/satellite imagery to assess crop vigor, soil variability, and nutrient stress. Produced field-level prescription maps for precision farming.',
      tags: ['Multispectral', 'Hyperspectral', 'UAV', 'Agriculture', 'Spectral Analysis'],
      highlights: [
        'Developed vegetation index models for crop health assessment',
        'Generated variable rate application maps for precision farming',
        'Integrated soil and spectral data for nutrient management',
      ],
    },
    {
      title: 'National Land Use Planning Project',
      category: 'Urban & Regional Planning',
      period: '2018 – 2022',
      description: 'Led spatial data collection and analysis for national land-use classification. Performed zoning analysis, suitability modeling, and produced policy-supporting maps.',
      tags: ['Land Use', 'Zoning', 'QGIS', 'ArcGIS', 'Policy Analysis'],
      highlights: [
        'Classified over 10,000 sq km of land for planning purposes',
        'Supported policy development for land management',
        'Trained government agencies on GIS methodologies',
      ],
    },
  ];

  const publications = [
    {
      title: 'Assessment of soil and plant nutrient status, spectral reflectance, and growth performance of various dragon fruit (Pitaya) species cultivated under high tunnel systems',
      authors: 'Priyanka Belbase, Krishnaswamy Jayachandran, Maruthi Sridhar Balaji Bhaskar',
      journal: 'Soil Systems',
      year: 2025,
      volume: '9(3)',
      pages: '75',
      publisher: 'MDPI',
      citations: 3,
      type: 'journal' as const,
      url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bkSmlQ8AAAAJ&citation_for_view=bkSmlQ8AAAAJ:9yKSN-GCB0IC',
    },
    {
      title: 'Sustainable cultivation of dragon fruit: integrated nutrient and pest management strategies for enhanced productivity and environmental stewardship',
      authors: 'Priyanka Belbase, Maruthi Sridhar Balaji Bhaskar',
      journal: 'Agronomy',
      year: 2025,
      volume: '15(11)',
      pages: '2514',
      publisher: 'MDPI',
      citations: 1,
      type: 'journal' as const,
      url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bkSmlQ8AAAAJ&citation_for_view=bkSmlQ8AAAAJ:eQOLeE2rZwMC',
    },
    {
      title: 'Investigating the Relationship Between Soil MACRO Nutrient Concentrations Obtained by XRF and Icp-Ms in Dragon Fruit Plants',
      authors: 'Priyanka Belbase, Maruthi Sridhar Balaji Bhaskar',
      journal: 'AGU Fall Meeting Abstracts',
      year: 2024,
      volume: '2024(7)',
      pages: 'GC21J-0007',
      citations: 1,
      type: 'conference' as const,
      url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bkSmlQ8AAAAJ&citation_for_view=bkSmlQ8AAAAJ:u-x6o8ySG0sC',
    },
    {
      title: 'Comparative Evaluation of Dragon Fruit Performance in High Tunnel and Field Environments in South Florida',
      authors: 'Priyanka Belbase, Maruthi Sridhar Balaji Bhaskar, Krishnaswamy Jayachandran, Mahadev Bhat',
      journal: 'ASA, CSSA, SSSA International Annual Meeting',
      year: 2023,
      publisher: 'ASA-CSSA-SSSA',
      citations: 2,
      type: 'conference' as const,
      url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bkSmlQ8AAAAJ&citation_for_view=bkSmlQ8AAAAJ:u5HHmVD_uO8C',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-6xl mx-auto">
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-foreground">About</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a PhD researcher in Earth System Science at Florida International University, specializing in dragon fruit mapping, 
                agronomy, soil-plant nutrient dynamics, and spectral reflectance diagnostics. My research combines advanced remote sensing 
                techniques with field-based chemical analysis to understand plant physiology and detect disease patterns.
              </p>
              
              <p>
                With 7+ years of professional GIS experience, I've worked across multiple sectors including environmental planning, 
                emergency management, utilities, and precision agriculture. My expertise spans from managing complex geodatabases to 
                automating spatial analysis workflows using cutting-edge tools and technologies.
              </p>

              <p>
                I'm passionate about turning raw geospatial data into meaningful insights that drive decision-making. Whether it's 
                analyzing multi-temporal satellite imagery, conducting environmental impact assessments, or teaching GIS workflows, 
                I approach each project with technical rigor and attention to detail.
              </p>

              <p>
                When I'm not working with spatial data, I enjoy exploring new geospatial methodologies, mentoring students in GIS, 
                and contributing to open-source geospatial projects.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="border border-border rounded-lg p-4 sm:p-6 bg-card">
                <p className="text-sm font-semibold text-accent mb-2">EDUCATION</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-semibold text-foreground">Ph.D. in Earth System Science</p>
                    <p className="text-muted-foreground text-xs">Florida International University • 2022-2026</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">M.S. in Geoscience</p>
                    <p className="text-muted-foreground text-xs">Florida International University • 2022-2024</p>
                  </li>
                  <li>
                    <p className="font-semibold text-foreground">M.S. in Environmental Science</p>
                    <p className="text-muted-foreground text-xs">Tribhuvan University • 2018-2022</p>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <p className="text-sm font-semibold text-accent mb-2">CURRENT ROLE</p>
                <p className="font-semibold text-foreground mb-2">Graduate Assistant</p>
                <p className="text-muted-foreground text-sm">Environment & Earth Remote Sensing Lab</p>
                <p className="text-muted-foreground text-sm">Florida International University</p>
                <p className="text-muted-foreground text-sm mt-2">Aug 2022 – Present</p>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <p className="text-sm font-semibold text-accent mb-2">EXPERIENCE</p>
                <p className="font-semibold text-foreground mb-2">7+ Years</p>
                <p className="text-muted-foreground text-sm">Geospatial data management, remote sensing, and spatial analysis across government, private sector, and academic institutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4 sm:p-6 hover:border-accent/50 transition-colors bg-card">
                  <h3 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 md:mt-16 border border-border rounded-lg p-4 sm:p-6 md:p-8 bg-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Technical Proficiencies</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">ArcGIS Suite (Pro, Online, Enterprise)</span>
                    <span className="text-accent font-semibold text-sm">Expert</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-accent rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Remote Sensing & Image Classification</span>
                    <span className="text-accent font-semibold text-sm">Advanced</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-accent rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Python & R Programming</span>
                    <span className="text-accent font-semibold text-sm">Advanced</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-accent rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Spatial Database Management</span>
                    <span className="text-accent font-semibold text-sm">Advanced</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-2 bg-accent rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Experience</h2>
            
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-4 sm:pl-6 md:pl-8 pb-6 sm:pb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-1.5">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-foreground">Major Projects</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>

            <PublicationsSection publications={publications} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-foreground">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to collaboration and new opportunities. Whether you need GIS analysis, remote sensing expertise, 
                    or want to discuss geospatial research, feel free to reach out.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Contact Information</h3>
                  
                  <a
                    href="mailto:belbase.priyanka@gmail.com"
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-accent/50 transition-colors group bg-card"
                  >
                    <Mail className="text-accent group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <p className="text-foreground font-medium">belbase.priyanka@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+16825325155"
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-accent/50 transition-colors group bg-card"
                  >
                    <Phone className="text-accent group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <p className="text-muted-foreground text-sm">Phone</p>
                      <p className="text-foreground font-medium">+1 (682) 532-5155</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
                    <MapPin className="text-accent" size={24} />
                    <div>
                      <p className="text-muted-foreground text-sm">Location</p>
                      <p className="text-foreground font-medium">Miami, Florida</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/priyanka-belbase-72833023b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors bg-card"
                      title="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=bkSmlQ8AAAAJ&hl=en&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors bg-card"
                      title="Google Scholar"
                    >
                      <GraduationCap size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground">
              <p className="text-sm sm:text-base">© 2024 Priyanka Belbase. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-2">Built with passion for geospatial science</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}