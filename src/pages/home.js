import React from 'react';
import { motion } from 'framer-motion'

//Components
import Page from "../components/page";
import PageTitle from '../components/pagetitle';
import DynamicImage from '../components/dynamicImage';
import HomeImage from '../components/homeImage';

const projects = [
  { title: "Online Community Radio Station", desc: "CellaFm is a Edinburgh based online radio station created during the COVID-19 to help promote local artists and DJs.", source: "cella", link: "/cella" },
  { title: "Cipher Messenger", desc: "CellaFm is a Edinburgh based online radio station created during the COVID-19 to help promote local artists and DJs.", source: "cipher", link: "/cipher" },
  { title: "Company Branding Concept", desc: "Info will go here!", source: "echo", link: "/echo" },
]

const Home = () => {
  return (
    <Page key={"homePage"}>
      <PageTitle
        headline="Front-end Developer and UX Designer"
        subhead="Scott Templeton"
        url="/contact"
        action="Contact Me"
        key={"homeTitle"}
      />

      {projects.map(({ title, desc, source, link }) => (
        <HomeImage
          key={title}
          title={title}
          description={desc}
          link={link}
          source={source} />
      ))}
    </Page>
  );
};

export default Home;
