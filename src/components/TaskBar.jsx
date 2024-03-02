import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRefresh,
  faSun,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faUser } from "@fortawesome/free-regular-svg-icons";

export default function TaskBar() {
  return (
    <div className="border-2 rounded m-8 p-4 border-green-600 ">
      <div className="text-xl font-bold text-center m">
        <p> Keeper App</p>
      </div>
      <div className="pb-4 text-gray-400">
        <p>Stay Productive!</p>
      </div>
      <div className="flex justify-between items-end text-gray-500">
        <div className="">
          <FontAwesomeIcon icon={faTrash} size="" />
        </div>
        <div className="">
          <FontAwesomeIcon icon={faRefresh} size="" />
        </div>{" "}
      </div>
    </div>
  );
}
