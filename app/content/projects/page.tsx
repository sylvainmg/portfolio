import React from "react";

const Projects = () => {
  return (
    <>
      <div id="projects"></div>
      <div className="mt-60 mx-10 md:mx-20 lg:mx-35 pt-20 text-xl">
        <div className="text-center monospace text-3xl text-amber-300 bg-blue-900 p-2">
          Projects
        </div>
        <div className="my-3 text-center text-xl font-bold">
          <span className="monospace text-purple-500">const</span>{" "}
          <span className="text-blue-500">projectJS</span>:{" "}
          <span className="text-emerald-500">string</span> ={" "}
          <span className="text-amber-500">
            "
            <a
              href="https://projet-eni-js.netlify.app/"
              target="_blank"
              className="hover:underline"
            >
              https://projet-eni-js.netlify.app/
            </a>
            "
          </span>
          ;{" "}
          <div className="text-emerald-800">
            {" "}
            <br />
            /* This was a school web project for the JavaScript module. We were
            given a predefined site structure : <br />
            - a homepage <br />- a page to solve a system of 3 equations with 3
            unknowns using Cramer's rule <br />
            - a page for resizing an image using sliders <br />
            - a page dedicated to displaying advertisements <br />- and a page
            to view a list of products and perform accounting calculations */{" "}
          </div>
          <br />
          <br />
          <span className="monospace text-purple-500">const</span>{" "}
          <span className="text-blue-500">devHunt5dot0</span>:{" "}
          <span className="text-emerald-500">string</span> ={" "}
          <span className="text-amber-500">
            "
            <a
              href="https://walkie-in-techmencia.netlify.app/"
              target="_blank"
              className="hover:underline"
            >
              https://walkie-in-techmencia.netlify.app/
            </a>
            "
          </span>
          ;{" "}
          <div className="text-emerald-800">
            {" "}
            <br />
            /* This was our project for the DevHunt 5.0, an ENI Nexta Event 2025
            competition. <br />
            We were given a very subjective theme : "In the digital era,
            technology plays a central role in daily life, but it can be
            overwhelming or inappropriate for young people. How can we introduce
            them to technology ? <br />
            So, to provide an answer to this problem, we have developed a
            digital children's book, dealing with important aspects of current
            technology, such as web browsing, AIs, cybersecurity and cybercrime,
            using a metaphorical storytelling. */
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
