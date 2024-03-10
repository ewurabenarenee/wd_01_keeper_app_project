import { useDispatch } from "react-redux";
import { useDarkMode } from "../contexts/DarkModeContext";
import { filterByStatus } from "../store/taskSlice";

export default function Filters(props) {
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();

  function handleFilter(status) {
    props.setActiveFilter(status);
    dispatch(filterByStatus({ status, projectId: null }));
  }

  return (
    <>
      <div className="flex justify-end items-end p-3">
        <div className="text-xl font-bold">Inbox</div>
      </div>

      <div className="flex justify-end items-end p-3 gap-4">
        <button
          className={`${isDarkMode ? "text-gray-700" : "text-gray-500"} px-2 ${
            props.activeFilter == null ? "border-2 rounded" : ""
          }`}
          onClick={() => handleFilter(null)}
        >
          All
        </button>
        <button
          className={`${isDarkMode ? "text-gray-700" : "text-gray-500"} px-2 ${
            props.activeFilter == false ? "border-2 rounded" : ""
          }`}
          onClick={() => handleFilter(false)}
        >
          Active
        </button>
        <button
          className={`${isDarkMode ? "text-gray-700" : "text-gray-500"} px-2 ${
            props.activeFilter == true ? "border-2 rounded" : ""
          }`}
          onClick={() => handleFilter(true)}
        >
          Completed
        </button>
      </div>
    </>
  );
}
