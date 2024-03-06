import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faUser } from "@fortawesome/free-regular-svg-icons";
export default function NavBar(props) {
  return (
    <div className="bg-violet-500 flex justify-between  items-center p-3 text-white ">
      <div className="flex">
        <button onClick={props.toggleSideBar} className="justify-around mx-2">
          {" "}
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        KEEPER
      </div>
      <div className="flex mx-2 justify-around">
        <div className=" px-4">
          {" "}
          <FontAwesomeIcon icon={faSquarePlus} size="lg" />
        </div>
        <div className="px-4">
          {" "}
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
        <div className="px-4">
          {" "}
          <FontAwesomeIcon icon={faSun} size="lg" />
        </div>
      </div>
    </div>
  );
}
