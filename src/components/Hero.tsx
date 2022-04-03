import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, StaticQueryDocument } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Icons from "../constants/icons";
import { Button } from "@mantine/core";
import  heroimg  from "../images/hero-img-project.png"
import Arrow from "./Arrow";

export const query: StaticQueryDocument = graphql`
  {
    file(relativePath: { eq: "hero-img-project.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, sizes: "quality: 90, maxWidth: 1000, webpQuality: 100")
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query);
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Vanny!</h1>
          <h4>Web developer and Video Maker.</h4>
          <h4>Want to get in touch?</h4>
          <Button
            color="grape"
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: 700, zIndex: 1 }}
          >
            CONTACT ME
          </Button>
          <Icons />
          <div className="underline-reverse"></div>
        </article>
        <GatsbyImage image={gatsbyImageData} className="hero-img" alt="hero" />
        <Arrow/>
      </div>
    </header>
  );
};

export default Hero;
