import React from 'react';
import { motion } from 'framer-motion'

//Components
import Page from "../components/page";
import PageTitle from '../components/pagetitle';
import DynamicImage from '../components/dynamicImage';
import HomeImage from '../components/homeImage';

const projects = [
  { title: "Prism Animation Library", desc: "Prism is an lightweight yet powerful Javascript library created for React To allow developers to produce tween animations on elements with any CSS and transform value.", source: "prism", link: "/prism" },
  { title: "Online Community Radio Station", desc: "CellaFm is a Edinburgh based online radio station created during the COVID-19 to help promote local artists and DJs.", source: "cella/cella2", link: "cella" },
  { title: "Cipher Messenger", desc: "Turbo Ciphers is an encoded messenger allowing users to select traditional word ciphers to encode their messages with keywords. The aim was to create a fully private messaging service. ", source: "cipher", link: "/cipher" },
  { title: "Company Branding Concept", desc: "Web Design prototype and concept branding project. Project aim was to create a fluid design system to apply brand guidelines to UX design. Echo is an mockup audio company selling high quality audio earphones.", source: "echo", link: "/echo" },
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
