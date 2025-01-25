import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Plans.css'; // Importing the CSS file

const categories = [
  {
    name: "Personal Website",
    description: "Perfect for individuals and personal brands",
    plans: [
      {
        name: "Basic",
        price: "5,000",
        features: [
          "1-page responsive design",
          "Basic SEO optimization",
          "Free domain (1 year)",
          "Shared hosting",
          "Mobile-friendly layout",
        ],
        maxPrice: "10,000"
      },
      {
        name: "Standard",
        price: "10,000",
        features: [
          "Up to 5 pages",
          "Advanced SEO",
          "Custom domain",
          "Blog integration",
          "Contact form",
        ],
        maxPrice: "20,000",
        popular: true
      },
      {
        name: "Premium",
        price: "20,000",
        features: [
          "10+ pages",
          "Premium SEO",
          "Custom domain",
          "VPS hosting",
          "Portfolio/gallery",
          "Advanced analytics",
        ],
        maxPrice: "35,000"
      }
    ]
  },
  {
    name: "Business Website",
    description: "Ideal for small to medium businesses",
    plans: [
      {
        name: "Basic",
        price: "15,000",
        features: [
          "Up to 5 pages",
          "Basic SEO",
          "Free domain",
          "Shared hosting",
          "Inquiry form",
        ],
        maxPrice: "25,000"
      },
      {
        name: "Standard",
        price: "25,000",
        features: [
          "Up to 10 pages",
          "Advanced SEO",
          "Professional domain",
          "Analytics integration",
          "Contact form",
        ],
        maxPrice: "50,000",
        popular: true
      },
      {
        name: "Premium",
        price: "50,000",
        features: [
          "Unlimited pages",
          "Premium SEO",
          "Custom domain",
          "VPS hosting",
          "CRM integration",
          "Advanced analytics",
        ],
        maxPrice: "80,000"
      }
    ]
  },
  {
    name: "E-commerce Website",
    description: "For online stores and digital commerce",
    plans: [
      {
        name: "Basic",
        price: "25,000",
        features: [
          "Up to 10 products",
          "Basic SEO",
          "Free domain",
          "Payment gateway",
          "Basic inventory",
        ],
        maxPrice: "50,000"
      },
      {
        name: "Standard",
        price: "50,000",
        features: [
          "Up to 50 products",
          "Advanced SEO",
          "Custom domain",
          "Coupon system",
          "Analytics integration",
        ],
        maxPrice: "1,00,000",
        popular: true
      },
      {
        name: "Premium",
        price: "1,00,000",
        features: [
          "Unlimited products",
          "Premium SEO",
          "Custom domain",
          "CRM integration",
          "Marketing tools",
          "Advanced analytics",
        ],
        maxPrice: "3,00,000"
      }
    ]
  }
];

function Plans() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="plans-container">
      <div className="plans-header">
        <h2>Pricing Plans</h2>
        <p>Choose the perfect plan for your needs. All plans include responsive design, SEO optimization, and professional development.</p>
      </div>

      {/* Category Selector */}
      <div className="category-selector">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`category-button ${selectedCategory === index ? "selected" : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Plans Grid */}
      <div className="plans-grid">
        {categories[selectedCategory].plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <div className="plan-popular">Most Popular</div>}
            <div className="plan-details">
              <h3>{plan.name}</h3>
              <div className="plan-price">
                ₹{plan.price} - ₹{plan.maxPrice}
              </div>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature-item">
                  <Check className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="plan-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
