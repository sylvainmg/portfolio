"use client";

interface buttonProps {
  toggleMenu: () => void;
}

const Button = ({ toggleMenu }: buttonProps) => {
  return (
    <div className="flex-none lg:hidden">
      <button onClick={toggleMenu} className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Button;
