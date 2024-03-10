import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "./components/ActionButton";
import AddItem from "./components/AddItem";
import Filters from "./components/Filters";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import TaskCard from "./components/TaskCard";
import { useDarkMode } from "./contexts/DarkModeContext";
import { fetchProjects } from "./store/projectSlice";
import {
  deleteTask,
  fetchTasks,
  filterByStatus,
  selectTasks,
} from "./store/taskSlice";

function App() {
  const { isDarkMode } = useDarkMode();

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      filterByStatus({ status: activeFilter, projectId: currentProject })
    );
  }, [dispatch, activeFilter, currentProject]);

  function handleSideBarChange(projectId) {
    setCurrentProject(projectId);
    dispatch(filterByStatus({ status: activeFilter, projectId: projectId }));
  }

  function handleDeleteTask(taskId) {
    dispatch(deleteTask(taskId));
  }

  return (
    <div className={`${isDarkMode ? "bg-gray-500" : "bg-white"} h-screen`}>
      <NavBar toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)} />
      <SideBar
        isSideBarOpen={isSideBarOpen}
        onProjectSelect={handleSideBarChange}
      />

      <div className="main-content">
        <AddItem type="task" />
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
        <ActionButton />
      </div>
    </div>
  );
}

export default App;
