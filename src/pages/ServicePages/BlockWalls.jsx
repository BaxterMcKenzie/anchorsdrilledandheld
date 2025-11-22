import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const BlockWalls = () => {
  return (
    <>
      <Seo
  title="Crib Walls | Anchors Drilled & Held"
  description="Durable segmental crib walls reinforced with geogrid, ideal for residential gardens and commercial landscaping across Wellington."
  url="https://anchorsdrilledheld.nz/services/crib-walls"
/>

      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Crib Walls by Anchors Drilled & Held"
        heading={
          <>
            Crib <span className="highlight">Walls</span>
          </>
        }
        description="Segmental crib walls engineered for strength, durability, and aesthetic appeal, reinforced with geogrid for added stability."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/crib-wall-services.JPG"
            alt="Example of a crib wall built by Anchors Drilled & Held"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Crib Walls</h3>

            <p>
              At <strong>Anchors Drilled & Held</strong>, we specialize in
              designing and constructing segmental crib walls that combine
              strength with clean visual appeal.
              <br />
              Our crib walls are reinforced with geogrid, offering long-lasting
              stability for residential gardens, commercial landscaping, and
              multi-level terraces.
            </p>

            <p>
              We understand Wellington’s unique soil and terrain conditions,
              allowing us to engineer walls that handle earth pressures
              effectively while maintaining a tidy, professional finish.
              <br />
              Every wall is tailored to the site's requirements, whether the
              project is decorative or fully structural.
            </p>

            <p>
              By using high-quality materials and proven engineering methods, we
              ensure every crib wall is built to last.
              <br />
              Our workmanship and attention to detail make{" "}
              <strong>Anchors Drilled & Held</strong> a trusted choice for
              retaining and landscaping solutions.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Crib Wall Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/block-walls.svg"
                alt="Segmental Crib Walls Icon"
              />
              Segmental Crib Walls – durable and engineered for residential or
              commercial projects
            </li>
            <li>
              <img
                src="/img/icons/pole-walls.svg"
                alt="Geogrid Reinforced Icon"
              />
              Geogrid Reinforcement – added stability for multi-level or
              high-load retaining walls
            </li>
            <li>
              <img src="/img/icons/retaining-wall.svg" alt="Earthworks Icon" />
              Site Preparation & Earthworks – strong foundations and proper
              drainage
            </li>
          </ul>
        </div>

        <div className="call-to-action-button-holder">
          <Link to="/contact" className="secondary-button">
            Contact Us
          </Link>

          <Link to="/contact" className="primary-button">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlockWalls;
