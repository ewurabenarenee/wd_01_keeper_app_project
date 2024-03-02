import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCirclePlus,
  faPlusCircle,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus, faUser } from "@fortawesome/free-regular-svg-icons";
import AddTask from "./AddTask";
export default function SideBar() {
  return (
    <div className="bg-blue-200 items-center p-3 w-64 ">
      <AddTask />

      <div className=" bg-blue-200 mt-10 p-3">
        <div>STATS</div>
      </div>

      <div className="text-center">
        <div>Projects</div>
      </div>
      <div className="mx-6 mb-2 p-2">
        <div>Inbox</div>
        <div>CLA</div>
        <div>Project X</div>
        <div>Project S</div>
        <div>Exercise</div>
        <div>Example</div>
      </div>
    </div>
  );
}
