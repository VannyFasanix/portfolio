import React from "react";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import { BrandInstagram } from "tabler-icons-react";
import { ActionIcon, ThemeIcon } from "@mantine/core";

const data = [
  {
    id: 1,
    icon: (
      <ActionIcon size="lg" color="grape">
        <BrandGithub />
      </ActionIcon>
    ),
    url: "https://github.com/VannyFasanix/portfolio",
  },
  {
    id: 2,
    icon: (
      <ActionIcon size="lg" color="grape">
        <BrandLinkedin/>
      </ActionIcon>
    ),
    url: "https://www.linkedin.com/in/vanny-fasanelli-3428b218a/",
  },
  {
    id: 3,
    icon: (
      <ActionIcon size="lg" color="grape">
        <BrandInstagram/>
      </ActionIcon>
    ),
    url: "https://www.instagram.com/vanny.fasanelli/",
  },
];


const Icons = data.map(icon => {
  return (
    <li key={icon.id}>
      <a href={icon.url} className="social-link">
        {icon.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }: any) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{Icons}</ul>
  )
}
