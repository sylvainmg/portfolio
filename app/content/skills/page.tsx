import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiDaisyui,
  SiC,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div id="skills"></div>
      <div className="mt-60 mx-10 md:mx-20 lg:mx-35 pt-20 text-xl">
        <div className="text-center monospace text-3xl text-amber-300 bg-blue-900 p-2">
          Skills
        </div>
        <div className="text-center my-3 font-bold">Tech stack</div>
        <div className="text-center">
          <ul>
            <li className="inline-flex items-center gap-2 justify-center">
              <SiHtml5 className="text-orange-600" />
              HTML
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiCss3 className="text-blue-600" />
              CSS
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiJavascript className="text-yellow-400" />
              JavaScript
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiTypescript className="text-blue-500" />
              TypeScript
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiJquery className="text-blue-400" />
              jQuery
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiC className="text-[#A8B9CC]" />C
            </li>
          </ul>
        </div>
        <div className="text-center my-2 text-xl font-bold">
          Frameworks & Librairies
        </div>
        <div className="text-center">
          <ul>
            <li className="inline-flex items-center gap-2">
              <SiReact className="text-cyan-400" />
              React
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiNextdotjs className="text-black" />
              Next.js
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiBootstrap className="text-purple-600" />
              Bootstrap
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiTailwindcss className="text-sky-400" />
              Tailwind CSS
            </li>{" "}
            <br />
            <li className="inline-flex items-center gap-2">
              <SiDaisyui className="text-emerald-500" />
              DaisyUI
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
