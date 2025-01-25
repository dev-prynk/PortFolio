import React from 'react';
import './Works.css';

export default function Works() {
  const works = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=800&q=80', // Replace with your image path
      title: 'Project Title 1',
      description: 'A modern UI design showcasing creativity and technical expertise.',
      tags: ['ReactJS', 'CSS', 'UI/UX'],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=800&q=80g', // Replace with your image path
      title: 'Project Title 2',
      description: 'A scalable web scraping solution with intelligent automation.',
      tags: ['Python', 'Web Scraping', 'Data Analysis'],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=100&q=10', // Replace with your image path
      title: 'Project Title 3',
      description: 'An innovative platform integrating FastAPI and MongoDB.',
      tags: ['FastAPI', 'MongoDB', 'Backend'],
    },
  ];

  return (
    <div id="works" className="works-section">
      <div className="works-header">
        <h2 className="works-title">Works & Projects</h2>
        <p className="works-subtitle">
          Check out some of my Works & Projects, meticulously crafted with love and dedication,
          each one reflecting the passion and soul I poured into every detail.
        </p>
      </div>

      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-image-container">
              <img src={work.image} alt={work.title} className="work-image" />              
            </div>
            <div className="work-content">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
              <div className="work-tags">
                {work.tags.map((tag, index) => (
                  <span key={index} className="work-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
