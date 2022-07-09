
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "portfolio-vanny-1",
      },
    },
    `gatsby-plugin-nodejs`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    { resolve: "gatsby-remark-images", options: { quality: 90 } },
    "gatsby-plugin-mdx",
    { resolve: "gatsby-transformer-remark", options: { quality: 90 } },
    { resolve: "gatsby-plugin-sharp", options: { quality: 90 } },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-mantine"
  ],
};

module.exports = config;
