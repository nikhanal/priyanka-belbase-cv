'use client';

import { useState } from 'react';
import { Award, ChevronDown, ExternalLink, MapPin, Cloud, Database, BarChart3 } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  skills?: string[];
  category: 'gis' | 'ml' | 'data' | 'viz';
}

const certifications: Certification[] = [
  // GIS & Mapping
  { name: 'Drone Analysis with Drone2Map and ArcGIS Online', issuer: 'LinkedIn', date: 'Aug 2025', skills: ['Drone Mapping', 'GIS Modeling'], category: 'gis' },
  { name: 'QGIS and Python for AEC', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['AEC'], category: 'gis' },
  { name: 'AutoCAD Map 3D 2022 Essential Training', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['AutoCAD'], category: 'gis' },
  { name: 'AutoCAD Map 3D Essential Training', issuer: 'LinkedIn', date: 'Mar 2025', skills: ['AutoCAD'], category: 'gis' },
  { name: 'AutoCAD 2022 Essential Training', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['AutoCAD'], category: 'gis' },
  { name: 'AutoCAD MEP Essential Training', issuer: 'LinkedIn', date: 'Apr 2025', category: 'gis' },
  
  // Machine Learning & Cloud
  { name: 'Amazon Web Services Machine Learning Essential Training', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['AWS', 'Machine Learning'], category: 'ml' },
  { name: 'Microsoft Azure Machine Learning Fundamentals', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Azure ML', 'Microsoft Azure'], category: 'ml' },
  { name: 'Machine Learning Foundations: Linear Algebra', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Linear Algebra'], category: 'ml' },
  { name: 'Machine Learning Foundations: Statistics', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Statistical Analysis'], category: 'ml' },
  { name: 'Skill Up with Python: Hands-On Data Science and Machine Learning Projects', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Data Science'], category: 'ml' },
  
  // Data & SQL
  { name: 'Hands-On PostgreSQL Project: Spatial Data Science', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['PostgreSQL', 'DBeaver', 'GIS', 'Data Manipulation'], category: 'data' },
  { name: 'Intermediate SQL for Data Scientists', issuer: 'LinkedIn', date: 'Apr 2025', category: 'data' },
  { name: 'Intermediate SQL for Data Scientists (2021)', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Database Queries'], category: 'data' },
  { name: 'Python Data Analysis (2020)', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Data Analysis', 'Python'], category: 'data' },
  { name: 'Python Functions for Data Science', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Data Analysis', 'Python'], category: 'data' },
  { name: 'Statistics Foundations 3: Using Data Sets', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Statistics', 'Statistical Data Analysis'], category: 'data' },
  
  // Visualization
  { name: 'Learning Power BI Desktop (2022)', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Microsoft Power BI'], category: 'viz' },
  { name: 'Power BI Data Dashboards', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Performance Dashboards', 'Microsoft Power BI'], category: 'viz' },
  { name: 'Tableau 2024.1: Essential Training', issuer: 'LinkedIn', date: 'Apr 2025', skills: ['Tableau'], category: 'viz' },
];

const categories = [
  { id: 'all', label: 'All', icon: Award, count: certifications.length },
  { id: 'gis', label: 'GIS & Mapping', icon: MapPin, count: certifications.filter(c => c.category === 'gis').length },
  { id: 'ml', label: 'Machine Learning', icon: Cloud, count: certifications.filter(c => c.category === 'ml').length },
  { id: 'data', label: 'Data & SQL', icon: Database, count: certifications.filter(c => c.category === 'data').length },
  { id: 'viz', label: 'Visualization', icon: BarChart3, count: certifications.filter(c => c.category === 'viz').length },
];

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredCerts = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);
  
  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.label || category;
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <Award className="text-accent" size={24} />
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Professional Development</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
          Certifications
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Continuous learning in GIS, remote sensing, machine learning, and data science.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:border-accent hover:text-foreground'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedCerts.map((cert, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <h3 className="font-medium text-foreground mb-1 line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {cert.issuer} • {cert.date}
              </p>
              
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCerts.length > 6 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCerts.length} Certifications`}
              <ChevronDown className={`transition-transform ${showAll ? 'rotate-180' : ''}`} size={16} />
            </button>
          </div>
        )}

        {/* LinkedIn Link */}
        <div className="mt-6 text-center">
          <a
            href="https://www.linkedin.com/in/priyanka-belbase-72833023b/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
          >
            View all credentials on LinkedIn
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
