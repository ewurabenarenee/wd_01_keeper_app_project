import { faPlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ActionButton() {
  return (
    <>
      <button className="w-16 h-16 border-4 border-gray-400 rounded-full text-blue-500">
        <FontAwesomeIcon icon={faPlay} size="" />
      </button>
    </>
  );
}
