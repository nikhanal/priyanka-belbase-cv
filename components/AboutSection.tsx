import { Award, Circle, GraduationCap } from 'lucide-react';

const EDUCATION_ITEMS = [
  {
    title: 'Ph.D. in Earth System Science',
    school: 'Florida International University, Miami, FL',
    meta: '2022 – 2026 (Expected) · Advisor: Dr. Maruthi Sridhar B. Bhaskar',
  },
  {
    title: 'M.S. in Geoscience',
    school: 'Florida International University, Miami, FL',
    meta: '2022 – 2024',
  },
  {
    title: 'M.S. in Environmental Science',
    school: 'Tribhuvan University, Nepal',
    meta: '2018 – 2022',
  },
];

export default function AboutSection() {
  return (
    <section className="sec" id="about">
      <div className="con">
        <div className="sh">
          <div className="stag">
            <Circle fill="currentColor" size={8} />
            <span>About Me</span>
          </div>
          <h2 className="stitle">Bridging Geospatial Science &amp; Precision Agriculture</h2>
        </div>

        <div className="ab-g">
          <div>
            <p>
              I&apos;m a PhD researcher in Earth System Science at Florida International
              University, specializing in dragon fruit mapping, agronomy, soil-plant nutrient
              dynamics, and spectral reflectance diagnostics.
            </p>
            <p>
              My research combines advanced remote sensing techniques with field-based chemical
              analysis (XRF, ICP-MS) to understand plant physiology, detect disease patterns, and
              develop precision agriculture tools.
            </p>
            <p>
              With 7+ years of professional GIS experience spanning environmental planning,
              emergency management, utilities, and agriculture across Nepal and the United States,
              I bring expertise in geodatabase management, spatial analysis automation, and
              transforming raw data into decision-driving insights.
            </p>
            <p>
              Beyond research, I&apos;m passionate about mentoring students, delivering GIS training
              workshops, and contributing to sustainable agricultural practices for smallholder
              farmers worldwide.
            </p>
          </div>

          <div>
            {EDUCATION_ITEMS.map((item) => (
              <div className="edu" key={item.title}>
                <h4>
                  <GraduationCap size={16} />
                  <span>{item.title}</span>
                </h4>
                <p>{item.school}</p>
                <div className="em">{item.meta}</div>
              </div>
            ))}

            <div className="edu edu-highlight">
              <h4>
                <Award size={16} />
                <span>Current Role</span>
              </h4>
              <p className="edu-role">Graduate Research Assistant</p>
              <div className="em">Environment &amp; Earth Remote Sensing Lab, FIU · Aug 2022 – Present</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
