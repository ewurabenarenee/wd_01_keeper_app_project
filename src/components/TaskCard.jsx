import { faRefresh, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function TaskCard(props) {
  const { isDarkMode } = useDarkMode();

  const totalTimeInSeconds = props.task.time * 60;
  const remainingTimeInSeconds =
    props.task.remainingTime * 60 + props.task.remainingSeconds;
  const progressPercentage =
    ((totalTimeInSeconds - remainingTimeInSeconds) / totalTimeInSeconds) * 100;

  function handleDeleteClick() {
    props.onDelete(props.task.id);
  }

  return (
    <div
      className={`border-2 rounded m-8 p-4 ${
        !isDarkMode ? "border-green-600" : "border-green-300"
      } relative`}
    >
      <div
        className={`text-xl font-bold text-center ${
          !isDarkMode ? "text-black" : "text-white"
        }`}
      >
        <p>{props.task.name}</p>
      </div>
      <div
        className={`pb-4 ${!isDarkMode ? "text-gray-400" : "text-gray-200"}`}
      >
        <p>{props.task.description}</p>
      </div>
      <div
        className={`w-full rounded-full h-2.5 ${
          !isDarkMode ? "bg-gray-700" : "bg-gray-400"
        }`}
      >
        <div
          className={`h-2.5 rounded-full ${
            !isDarkMode ? "bg-red-400" : "bg-red-600"
          }`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-end text-gray-500 mt-4">
        <div onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div>
          <FontAwesomeIcon icon={faRefresh} />
        </div>
      </div>
    </div>
  );
}
