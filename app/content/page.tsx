import React from "react";
import { BlockMath } from "react-katex";
import "./page.css";

const Content = () => {
  return (
    <>
      <div id="content"></div>
      <div className="pt-40 p-10 text-3xl text-center">
        Hi, y'all. I am
        <div className="text-5xl text-fuchsia-800">
          <BlockMath math="\int_0^n ylvai\,dx" />
        </div>
        also known as{" "}
        <span className="monospace font-bold text-emerald-600">Cosine.</span>
      </div>
      <div className="text-xl mx-10 md:mx-20 lg:mx-35 text-center">
        I'm a student at{" "}
        <a
          href="https://eni.mg/"
          target="_blank"
          className="text-emerald-700 font-bold hover:underline"
        >
          {" "}
          The National School of Computer Science (ENI)
        </a>
        . I'm a <span className="text-cyan-500">frontend web developer</span>, a
        math nerd, and uh... well, still figuring out the rest. I genuinely
        enjoy programming, mathematical structures, and everything related to
        logic and formal proofs. Here, you'll find my skills, projects,
        experiences, and how to reach me &nbsp;&mdash;&nbsp; feel free to
        explore around!
      </div>
    </>
  );
};

export default Content;
