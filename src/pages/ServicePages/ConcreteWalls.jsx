import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const ConcreteWalls = () => {
  return (
    <>
      <Seo
        title="Concrete / Spray Walls | Anchors Drilled & Held"
        description="From spray-applied shotcrete to poured-in-place solutions, our concrete and spray wall systems are engineered for strength and durability across Wellington."
        url="https://anchorsdrilledheld.nz/services/concrete-walls"
      />

      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Concrete / Spray Walls"
        heading={
          <>
            Concrete / <span className="highlight">Spray Walls</span>
          </>
        }
        description="From spray-applied shotcrete to poured-in-place, our wall systems are engineered for strength, durability, and long-term performance."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/services/spray-wall.webp"
            alt="Example of a concrete or spray wall built by Anchors Drilled & Held"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Concrete / Spray Walls</h3>

            <p>
              At <strong>Anchors Drilled & Held</strong>, we deliver
              professional concrete and spray wall systems for residential,
              commercial, and infrastructure projects across Wellington.
            </p>

            <p>
              Our services include <strong>spray-applied shotcrete</strong>,{" "}
              <strong>poured-in-place concrete</strong>, and reinforced wall
              construction designed for long-lasting performance. All walls are
              built to meet proper load-bearing requirements, drainage needs,
              and local building standards.
            </p>

            <p>
              Whether it’s a hillside retaining project, a large commercial
              build, or a structural residential wall, our team provides
              solutions that deliver strength, safety, and a clean finished
              look.
            </p>

            <p>
              Choose <strong>Anchors Drilled & Held</strong> for concrete and
              spray walls that are engineered to last and built with
              industry-leading methods and materials.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">
            Key Concrete / Spray Wall Services:
          </h4>

          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/concrete-walls.svg"
                alt="Concrete and Spray Walls Icon"
              />
              Spray-applied shotcrete and poured-in-place concrete walls for
              residential and commercial builds
            </li>

            <li>
              <img src="/img/icons/anchors.svg" alt="Anchors Icon" />
              Reinforced concrete walls with anchor and bracing options for
              added structural stability
            </li>

            <li>
              <img
                src="/img/icons/retaining-wall.svg"
                alt="Retaining Wall Icon"
              />
              Site preparation and drainage systems to support long-lasting wall
              performance
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

export default ConcreteWalls;
