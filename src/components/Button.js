import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, path }) => {
  return (
    <Link to={path}>
      <button className="bg-blue-800 text-white px-4 py-2 rounded-lg w-20 text-center">
        {text}
      </button>
    </Link>
  );
};

export default Button;
