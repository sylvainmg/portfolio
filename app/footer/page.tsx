import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-gray-800">
        <footer
          className="mt-60 footer footer-center p-10 bg-base-200 text-base-content text-2xl font-bold"
          id="footer"
        >
          Contacts
        </footer>
        <div className="mt-4 pb-4 flex flex-col gap-2 text-xl">
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
          <div className="text-center hover:text-neutral-950">
            <a href="https://github.com/sylvainmg" target="_blank">
              <i className="bi bi-github mr-2"></i>GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
