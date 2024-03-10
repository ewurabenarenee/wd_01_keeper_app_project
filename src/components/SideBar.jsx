import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDarkMode } from "../contexts/DarkModeContext";
import { fetchProjects, selectProject } from "../store/projectSlice";
import AddItem from "./AddItem";

export default function SideBar(props) {
  const { isDarkMode } = useDarkMode();

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);
  const selectedProjectId = useSelector(
    (state) => state.projects.selectedProjectId
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  function handleProjectClick(id) {
    props.onProjectSelect(id);
    dispatch(selectProject(id));
  }

  return (
    <div
      className={`${
        isDarkMode ? "bg-blue-500" : "bg-blue-200"
      } w-64 fixed bottom-0 top-[3rem] ${
        !props.isSideBarOpen && "-translate-x-full"
      } z-10`}
    >
      <AddItem type="project" />
      <div className="text-center p-3">Projects</div>
      <div className="mt-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            className={`cursor-pointer ${
              project.id === selectedProjectId
                ? "bg-blue-800 text-white"
                : "bg-blue-200 text-black"
            }`}
          >
            <div
              className={`p-2 w-full over:bg-blue-300
              ${project.id === selectedProjectId ? "" : "hover:bg-blue-300"}`}
            >
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
