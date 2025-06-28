import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="text-sm bg-gray-50 text-center my-20 max-w-screen-lg mx-auto px-4">
        <div className="bg-gray-400 w-full flex items-center gap-3 sm:gap-30 md:gap-56">
          <img
            src="/3451.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 object-cover"
          />
          <div className="text-xl sm:text-2xl md:text-4xl">
            <div className="text-black font-bold">
              Mintsa Sylvain <br />
              RASOLOFONIAINA
              <div className="text-center text-sm md:text-xl mt-4">
                Développeur Frontend
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2 text-black">
          {/* BLOC 1 */}
          <div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Profil
            </div>
            <div className="text-start ml-6">
              Développeur web passionné par les maths, diplômé d'un bac
              scientitique en 2024 (Série C, mention "Bien").
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Langues
            </div>
            <div className="text-start ml-6 sm:ml-16 md:ml-16 lg:ml-36">
              <ul>
                <li>Malagasy (langue maternelle)</li>
                <li>Français (langue courante)</li>
                <li>Anglais (usage fréquent)</li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Projets
            </div>
            <div className="text-start ml-6 sm:ml-16 md:ml-16">
              <ul>
                <li>
                  Projet web scolaire :{" "}
                  <a
                    href="https://projet-eni-js.netlify.app"
                    className="text-blue-400"
                    target="_blank"
                  >
                    projet-eni-js.netlify.app
                  </a>{" "}
                </li>
                <li>
                  Projet web DevHunt 5.0 :{" "}
                  <a
                    href="https://walkie-in-techmencia.netlify.app"
                    className="text-blue-400"
                    target="_blank"
                  >
                    walkie-in-techmencia.netlify.app
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Aptitudes
            </div>
            <div className="text-start ml-10 sm:ml-20 md:ml-16 lg:ml-36">
              <ul>
                <li>Autonome et autodidacte</li>
                <li>Rigueur méthodique</li>
                <li>Sens de l'analyse</li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Participations
            </div>
            <div className="ml-8 sm:ml-16 md:ml-32 text-start">
              <ul>
                <li>
                  DevHunt 5.0 (ENI Nexta Event 2025) <br />{" "}
                  <span className="ml-4 italic">Chef d'équipe</span>
                </li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Objectifs
            </div>
            <div className="text-start ml-6">
              Acquérir de l'expérience tout en approfondissant mes compétences
              et mes connaissances par la pratique.
            </div>
          </div>
          {/* BLOC 2 */}
          <div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Technologies
            </div>
            <div className="ml-10 sm:ml-32 md:ml-52 text-start">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>jQuery</li>
                <li>C</li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Frameworks
            </div>
            <div className="ml-10 sm:ml-32 md:ml-52 text-start">
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>DaisyUI</li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Études
            </div>
            <div className="ml-6 sm:ml-12 md:ml-32 text-start">
              <ul>
                <li>
                  ÉCOLE NATIONALE D'INFORMATIQUE <br />
                  <div className="ml-2">
                    2025 - maintenant <br />
                    Licence Pro 1
                  </div>
                </li>
                <li>
                  LYCÉE PRIVÉE LIANTSOA SCHOOL
                  <div className="ml-2">
                    2023 - 2024 <br />
                    <span className="font-bold underline">Diplôme</span> : Bac
                  </div>
                </li>
                <li>
                  HOUSSEN MEMORIAL SCHOOL
                  <div className="ml-2">
                    2017 - 2023 <br />
                    <span className="font-bold underline">Diplôme</span> : BEPC
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-1 mt-4 text-2xl text-black font-bold">
              Passions
            </div>
            <div className="ml-8 sm:ml-28 md:ml-48 text-start">
              <ul>
                <li>Mathématiques</li>
                <li>Programmation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 font-bold text-3xl p-3 text-black bg-gray-400">
          Contacts
        </div>
        <div className="text-center text-black text-xl">
          <div className="text-center hover:text-red-800">
            <a href="mailto:mintsasylvain.pro@gmail.com" target="_blank">
              <i className="bi bi-envelope mr-2 "></i>E-mail
            </a>
          </div>
          <div className="text-center hover:text-blue-700">
            <a href="https://facebook.com/sylvain.mintsars" target="_blank">
              <i className="bi bi-facebook mr-2 "></i>Facebook
            </a>
          </div>
          <div className="text-center hover:text-blue-400">
            <a
              href="https://www.linkedin.com/in/rasolofoniaina-mintsa-sylvain-332637342/?originalSubdomain=mg"
              target="_blank"
            >
              <i className="bi bi-linkedin mr-2"></i>Linkedin
            </a>
          </div>
          <div className="text-center hover:text-gray-600">
            <a href="https://github.com/sylvainmg" target="_blank">
              <i className="bi bi-github mr-2"></i>GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Link href="/">
          <button className="btn btn-primary p-7 text-xl text-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
