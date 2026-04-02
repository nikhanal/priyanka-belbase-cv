import { Circle, Plus, X } from 'lucide-react';
import Image from 'next/image';

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: '/gallery/AGU2.jpg',
    alt: 'AGU Poster',
    caption: 'Poster Presentation at AGU 2024',
  },
  {
    src: '/gallery/AGU3.jpg',
    alt: 'AGU',
    caption: 'AGU Fall Meeting 2024',
  },
  {
    src: '/gallery/GRS2023.jpg',
    alt: 'GRS 2023',
    caption: 'Graduate Research Symposium 2023',
  },
  {
    src: '/gallery/GRS2024.jfif',
    alt: 'GRS 2024',
    caption: 'Graduate Research Symposium 2024',
  },
  {
    src: '/gallery/GRS2024_1.JPG',
    alt: 'GRS 2024',
    caption: 'GRS 2024 Poster',
  },
  {
    src: '/gallery/GRS2025.jpg',
    alt: 'GRS 2025',
    caption: 'Graduate Research Symposium 2025',
  },
  {
    src: '/gallery/GRS2026.jfif',
    alt: 'GRS 2026',
    caption: 'Graduate Research Symposium 2026',
  },
  {
    src: '/gallery/Volo_1.jpg',
    alt: 'VoLo',
    caption: 'VoLo Climate Correction 2024',
  },
  {
    src: '/gallery/Volo2.jpg',
    alt: 'VoLo',
    caption: 'Climate Correction Conference',
  },
  {
    src: '/gallery/Volo3.jpg',
    alt: 'VoLo Badge',
    caption: 'Speaker at VoLo Foundation',
  },
  {
    src: '/gallery/8th_Graduation_Conference.jpg',
    alt: 'Nepal 2022',
    caption: '8th Graduate Conference, Nepal',
  },
  {
    src: '/gallery/Agroecology_Symposium.jpg',
    alt: 'Agroecology',
    caption: 'Agroecology Symposium',
  },
  {
    src: '/gallery/Agricultural_Immersion_Day.jpg',
    alt: 'Ag Day',
    caption: 'Agricultural Immersion Day',
  },
  {
    src: '/gallery/Trio_meeting.jpg',
    alt: 'Team',
    caption: 'Research Team',
  },
  {
    src: '/gallery/Trainner.jfif',
    alt: 'Training',
    caption: 'GIS Training',
  },
  {
    src: '/gallery/Paper_1.jpg',
    alt: 'Paper',
    caption: 'Journal Publication',
  },
  {
    src: '/gallery/Paper_2.jpg',
    alt: 'Paper',
    caption: 'Research Publication',
  },
];

export default function GallerySection() {
  return (
    <section className="sec" id="gallery" style={{ background: 'var(--pb-bg)' }}>
      <div className="con">
        <div className="sh">
          <div className="stag">
            <Circle fill="currentColor" size={8} />
            <span>Gallery</span>
          </div>
          <h2 className="stitle">Conferences &amp; Field Work</h2>
        </div>

        <div className="gal">
          {GALLERY_ITEMS.map((item) => (
            <div className="gi" key={`${item.src}-${item.caption}`}>
              <Image
                alt={item.alt}
                className="gi-img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={item.src}
              />
              <div className="gov">
                <p>{item.caption}</p>
              </div>
              <button aria-hidden className="g-rm" tabIndex={-1} type="button">
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
