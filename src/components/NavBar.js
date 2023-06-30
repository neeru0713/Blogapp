import React from "react";
import { FaBlog } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = ({ user, showCreateButton = true }) => {
  return (
    <div className="navbar h-[3.5rem] bg-[#C0D6E4] flex items-center justify-between">
      <Link to="/">
        <div className="text-[40px] ml-2">
          <FaBlog />
        </div>
      </Link>
      
        <div className="buttons mr-4 flex w-[12%] justify-between">
          <Button text="Register" path="/register" />
          <Button text="Login" path="/login" />
        </div>
       
        <div className="mr-5">
          <Button text="create" path="/publish" />
        </div>
     
    </div>
  );
};

export default NavBar;
