import React from 'react';
import { Col, Row } from 'antd';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div id="home" className="hero-section">
      <Row gutter={[16, 16]} justify="center">
        {/* Profile Section */}
        <Col xs={24} md={6} push={{ md: 18 }}>
          <div className="profile">
            <h2>Priyank Suthar</h2>
            <p>Innovative Solutions, Delivered with Precision</p>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.instagram.com/_priyank.suthar" className="theme-btn">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/priyank-suthar-a337b5201/" className="theme-btn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/PriyankSuthar21" className="theme-btn">
                <FaXTwitter size={24} />
              </a>
              <a href="https://github.com/dev-prynk" className="theme-btn">
                <FaGithub size={24} />
              </a>
            </div>

            <button className="download-cv">
              <a
                href={process.env.PUBLIC_URL + "/assets/pdf/Priyank_Suthar.pdf"}
                download="Priyank_Suthar.pdf"
                className="cv-link"
              >
                Download CV
              </a>
            </button>
          </div>
        </Col>

        {/* Details Section */}
        <Col xs={24} md={18} pull={{ md: 6 }}>
          <div className="details">
            <h3>Hello There!</h3>
            <h1>A Full Stack Developer skilled in web development and Python scripting.</h1>
          </div>
          <div className="skills">
            <div className="scrolling-logos">
              <div className="logos">
                {/* Repeated Logos */}
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/mongodb-svgrepo-com.svg"}
                  alt="MongoDB"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/reactjs-fill-svgrepo-com.svg"}
                  alt="ReactJS"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/python-svg.svg"}
                  alt="Python"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/aws-svgrepo-com.svg"}
                  alt="AWS"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/sql-file-format-svgrepo-com.svg"}
                  alt="SQL"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/postman-svgrepo-com.svg"}
                  alt="POSTMAN"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/github-142-svgrepo-com.svg"}
                  alt="GITHUB"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/mongodb-svgrepo-com.svg"}
                  alt="MongoDB"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/reactjs-fill-svgrepo-com.svg"}
                  alt="ReactJS"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/python-svg.svg"}
                  alt="Python"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/aws-svgrepo-com.svg"}
                  alt="AWS"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/sql-file-format-svgrepo-com.svg"}
                  alt="SQL"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/postman-svgrepo-com.svg"}
                  alt="POSTMAN"
                  className="logo"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/github-142-svgrepo-com.svg"}
                  alt="GITHUB"
                  className="logo"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
