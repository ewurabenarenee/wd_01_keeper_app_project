import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCirclePlus,
  faPlusCircle,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faUser } from "@fortawesome/free-regular-svg-icons";
export default function AddTask() {
  return (
    <div className="flex items-center p-3 ">
      <div className="justify-around mx-2">
        <FontAwesomeIcon icon={faCirclePlus} size="" />
      </div>
      <div>
        <h1>Add task</h1>
      </div>
    </div>
  );
}
