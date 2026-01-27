'use client';

import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="border border-border rounded-lg p-4 sm:p-6 hover:border-accent/50 transition-colors cursor-pointer bg-card"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start gap-3 sm:gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 sm:gap-4 mb-3">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-accent text-sm font-medium mb-1">{project.category}</p>
              <p className="text-muted-foreground text-sm">{project.period}</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          {isExpanded && (
            <div className="mb-4 space-y-3 border-t border-border pt-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Key Highlights:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-accent">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-accent mt-2">
          {isExpanded ? '−' : '+'}
        </div>
      </div>
    </div>
  );
}
