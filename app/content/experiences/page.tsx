import Link from "next/link";
import React from "react";
import { BlockMath, InlineMath } from "react-katex";

const Experiences = () => {
  return (
    <>
      <div id="experiences"></div>
      <div className="mt-63 mx-10 md:mx-20 lg:mx-35 pt-20  latin">
        <div className="text-center monospace text-3xl text-amber-300 bg-blue-900 p-2">
          Experiences
        </div>
        <div className="my-3 text-center text-xl">
          <div className="italic">
            Let <InlineMath math="t" /> be a time variable expressed in seconds.{" "}
            <br />
            <InlineMath math="\forall t\in [0, 86\,400],\," />
            let the function <InlineMath math="f" /> be defined by :
            <BlockMath math="f(t) = \text{DevHunt}(t)" />
            <BlockMath math="\lim_{t \to +\infty} f(t) = 5.0" />
          </div>
          <br />I took part in DevHunt 5.0, a development competition, during
          the ENI Nexta Event 2025, where i served as a{" "}
          <span className="text-red-500">team leader</span>. <br />
          Each team had exactly 24 hours to respond to a subjective theme, with
          no restriction on the technologies used. <br />
          As for us, we chose to build a{" "}
          <span className="text-sky-300">web project</span>, based on{" "}
          <span className="font-bold">HTML + CSS + jQuery</span>, and used{" "}
          <span className="font-bold">Bootstrap</span> for styling. <br />
          <br />
          It was an intense experience, where{" "}
          <span className="font-bold">
            teamwork, cohesion, organization, and the ability to manage both
            time and pressure
          </span>{" "}
          mattered every single second.
        </div>
        <div className="flex justify-center my-20">
          <Link href="/content/resume">
            <button className="btn btn-primary p-7 text-xl text-white">
              My Resume
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experiences;
