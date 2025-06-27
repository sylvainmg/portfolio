import React from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Content from "./content/page";
import Skills from "./content/skills/page";
import Projects from "./content/projects/page";
import Experiences from "./content/experiences/page";

const page = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
    </>
  );
};

export default page;
