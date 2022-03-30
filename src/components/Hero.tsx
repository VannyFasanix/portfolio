import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link, StaticQueryDocument } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

export const query: StaticQueryDocument = graphql`
  {
    file(ext: {}, extension: { eq: "jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info"></article>
      <StaticImage src={fluid} className="hero-img" alt="hero" />
    </div>
  </header>;
};

export default Hero;
