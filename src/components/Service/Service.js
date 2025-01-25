import React from 'react';
import './Service.css';
import { Code2, Database, Cloud, Bot, Globe, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2422bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    title: "Full Stack Development",
    description: "End-to-end web application development using React.js for frontend and FastAPI/DRF for backend, creating seamless and responsive user experiences.",
    technologies: ["React.js", "FastAPI", "Django REST Framework", "MongoDb"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3ce2c6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
    title: "Web & Application Scraping",
    description: "Advanced data extraction solutions using Python, handling complex scraping scenarios with anti-bot bypassing and data processing capabilities.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Scrapy"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#800080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
    title: "Amazon SP-API Integration",
    description: "Custom e-commerce solutions leveraging Amazon's Selling Partner API for inventory management, order processing, and marketplace automation.",
    technologies: ["Amazon SP-API", "Amazon AD-API", "Python"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f39512" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
    title: "AWS Cloud Solutions",
    description: "Scalable cloud infrastructure design and implementation using AWS services, focusing on serverless architecture and managed databases.",
    technologies: ["AWS Lambda", "EC2", "RDS", "CloudFormation"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f31233" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
    title: "Database Architecture",
    description: "Design and implementation of efficient database solutions, from schema design to optimization and maintenance.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
    title: "API Development",
    description: "RESTful and asynchronous API development with FastAPI and Django REST Framework, focusing on performance and scalability.",
    technologies: ["FastAPI", "DRF", "OpenAPI"]
  }
];

export default function Service() {
  return (
    <div id="service" className="service-container">
      <div className="service-header">
        <h2 className="service-title">
          Services & Expertise
        </h2>
        <p className="service-description">
          Leveraging cutting-edge technologies to deliver robust, scalable, and efficient solutions 
          for modern business challenges.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
          >
            <div className="service-card-header">
              {service.icon}
              <h3 className="service-card-title">
                {service.title}
              </h3>
              <p className="service-card-description">
                {service.description}
              </p>
            </div>

            <div className="service-technologies">
              {service.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="service-technology"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}