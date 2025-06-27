"use client";

import Link from "next/link";
import "./navbar.css";
import Button from "../components/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-blue-950 p-5 flex-wrap">
        <div className="flex-1">
          <span
            className="text-xl text-shadow-yellow-50 font-bold ml-2"
            id="mintsa"
          >
            mintsa-sylvain
          </span>
        </div>

        <Button
          toggleMenu={() => {
            setisOpen(!isOpen);
          }}
        />

        {/* MENU RESPONSIVE */}
        <div
          className={
            "w-full lg:w-auto flex-none " +
            (isOpen ? "block" : "hidden") +
            " lg:flex"
          }
        >
          <ul className="menu menu-vertical lg:menu-horizontal text-xl mt-4 lg:mt-0">
            <li>
              <Link href="#content" className="hover:text-amber-600">
                Hello, World!
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-amber-600">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-amber-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#experiences" className="hover:text-amber-600">
                Experiences
              </Link>
            </li>
            <li>
              <Link href="#footer" className="hover:text-amber-600">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
