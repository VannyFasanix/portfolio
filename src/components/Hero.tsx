import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, StaticQueryDocument } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Icons from "../constants/icons";
import { Button } from "@mantine/core";

export const query: StaticQueryDocument = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
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
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: 700 }}
          >
            CONTACT ME
          </Button>
          <Icons />
        </article>
        <GatsbyImage image={gatsbyImageData} className="hero-img" alt="hero" />
      </div>
    </header>
  );
};

export default Hero;
