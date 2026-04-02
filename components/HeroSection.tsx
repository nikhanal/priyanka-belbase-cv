import { Circle, FlaskConical, Mail } from 'lucide-react';
import Image from 'next/image';

const HERO_STATS = [
  { value: '7+', label: 'Years Experience' },
  { value: '10+', label: 'Conferences' },
  { value: '2', label: 'Publications' },
];

export default function HeroSection() {
  return (
    <section className="pb-hero" id="hero">
      <div className="pb-hero-grid">
        <div className="pb-hero-copy">
          <div className="pb-hero-badge">
            <Circle fill="currentColor" size={8} />
            <span>Open to Collaboration</span>
          </div>

          <h1>
            Priyanka
            <br />
            <em>Belbase</em>
          </h1>

          <p className="pb-hero-sub">
            PhD Researcher in Earth System Science specializing in remote sensing, GIS analysis,
            precision agriculture &amp; spectral diagnostics. 7+ years transforming complex
            geospatial data into actionable insights.
          </p>

          <div className="pb-hero-stats">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="pb-hero-stat-number">{stat.value}</div>
                <div className="pb-hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pb-hero-buttons">
            <a className="pb-btn pb-btn-primary" href="#research">
              <FlaskConical size={16} />
              <span>View Research</span>
            </a>

            <a className="pb-btn pb-btn-outline" href="#contact">
              <Mail size={16} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        <div className="pb-hero-media">
          <div className="pb-hero-frame">
            <Image
              alt="Priyanka Belbase"
              className="object-cover object-top"
              fill
              priority
              sizes="(max-width: 768px) 260px, 380px"
              src="/images/priyanka-hero.png"
            />
          </div>

          <div className="pb-hero-card">
            <span>Location</span>
            <p>Miami, Florida</p>
            <span>Email</span>
            <a href="mailto:belbase.priyanka@gmail.com">belbase.priyanka@gmail.com</a>
            <span>Affiliation</span>
            <p>Florida International University</p>
          </div>
        </div>
      </div>
    </section>
  );
}
