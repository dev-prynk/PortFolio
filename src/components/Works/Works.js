import React from 'react';
import './Works.css';

// {process.env.PUBLIC_URL + "/assets/pdf/Priyank_Suthar.pdf"} Car Wallpaper.png
export default function Works() {
  const works = [
    {
      id: 1,
      image: process.env.PUBLIC_URL + "/assets/images/Clinical_UI.png", // Replace with your image path
      title: 'Clinical Website',
      description: 'Design a modern UI to manage clinical information and designations, built with ReactJS, styled with CSS, and powered by FastAPI.',
      tags: ['ReactJS', 'CSS', 'FASTAPI'],
    },
    {
      id: 2,
      image: process.env.PUBLIC_URL + "/assets/images/Car Wallpaper.png", // Replace with your image path
      title: 'CarHD Website',
      description: 'Develop a responsive car wallpaper website using ReactJS, styled with CSS, powered by FastAPI, and backed by MongoDB.',
      tags: ['ReactJS', 'CSS', 'FASTAPI', 'MongoDB'],
    },
    {
      id: 3,
      image: process.env.PUBLIC_URL + "/assets/images/EcomPages.jpg", // Replace with your image path
      title: 'Ecom Web Scraping',
      description: 'Create powerful backend solutions with Python, specializing in web scraping for e-commerce and other platforms like Amazon, Flipkart, UPS, BookMyShow and many more.',
      tags: ['Python', 'Web Scraping', 'Backend'],
    },
    {
      id: 4,
      image: process.env.PUBLIC_URL + "/assets/images/Amazon.jpg", // Replace with your image path
      title: 'Amazon Products Analyse Tool',
      description: 'Build efficient tools using Python, Amazon SP APIs, Advertising APIs, and Finance APIs for e-commerce data analysis and streamlined backend solutions.',
      tags: ['Python', 'Amazon SP Apis', 'Finance API', 'Amazon AD APIS','Backend'],
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
