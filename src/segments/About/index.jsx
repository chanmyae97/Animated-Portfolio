import VRIMage from "../../assets/vr.png"
import PersonalImage from "../../assets/pic-1.png"
import { ourApproaches, whyChooseUs } from "../../data"
import { convertHexToRgba, cssPerfectShape } from "../../ulti"
import { Link } from "react-scroll"

import "./About.css"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="left-column">
          <div className="spotlight" />
          <div className="vision-container">
            
            <div className="vision-item">
              <div className="vision-content">
                <h2>Our Vision</h2>
                <h4 className="title">
                Transforming Technology into Progress
                </h4>
                <p className="description">
                  Our vision is to empower businesses with practical, cutting-edge IT solutions that drive growth, streamline processes, and enhance competitiveness.
                </p>
              </div>
              <div className="image-container">
              <img src={VRIMage} alt="" className="" />
              </div>
            </div>

            <div className="vision-item">
              <div className="spotlight" />
              <div className="vision-content">
                <h2>Who We are</h2>
                <h4 className="title">
                Transforming Technology into Progress
                </h4>
                <p className="description">
                  Our vision is to empower businesses with practical, cutting-edge IT solutions that drive growth, streamline processes, and enhance competitiveness.
                </p>
              </div>
              <div className="image-container">
              <img src={PersonalImage} alt="" className="" />
              </div>
            </div>
          </div>
          <div className="why-choose-us-container">
            {whyChooseUs.map((list, index)=>(
              <div className="blur why-choose-us" style={{background: convertHexToRgba('--bg-secondary',0.3)}} key={index}
              >
                <div className="icon">
                  <img src={list.imageIcon} alt="" />
                </div>
                <h3 className="title">{list.title}</h3>
                <p className="description">{list.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-column">
          <h2 className="title">Our Approach</h2>
          <div className="boxes-wrapper"></div>
            {ourApproaches.map((approach, index)=>(
              <div className="approach" key={index}>
                <div className="icon" style={{
                  ...cssPerfectShape(50, 50),
                  background:convertHexToRgba("--primary",0.1),
                  }}>
                  <approach.icon />
                </div>
                <div>
                  <h3 className="title">{approach.title}</h3>
                  <p className="description">{approach.description}</p>
                </div>
              </div>
            ))}
            <div className="contact-us">
              <h2 className="title">
                Reach out to see how out IT solutions can boost your success.
              </h2>
              <Link to="contact" smooth={true} className="btn primary">
                Contact Us
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
