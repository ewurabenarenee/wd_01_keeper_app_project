import { faSquarePlus, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function NavBar(props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex justify-between  items-center p-3 text-white ${
        isDarkMode ? "bg-gray-800" : "bg-violet-500"
      }`}
    >
      <div className="flex">
        <button onClick={props.toggleSideBar} className="justify-around mx-2">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        KEEPER
      </div>
      <div className="flex mx-2 justify-around">
        <div className=" px-4">
          <FontAwesomeIcon icon={faSquarePlus} size="lg" />
        </div>
        <div className="px-4">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
        <div onClick={toggleDarkMode} className="cursor-pointer px-4">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
        </div>
      </div>
    </div>
  );
}
