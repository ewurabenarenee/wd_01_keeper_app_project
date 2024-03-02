import ActionButton from "./components/ActionButton";
import AddTask from "./components/AddTask";
import Filtered from "./components/Filtered";
import NavBar from "./components/NavBar";
import TaskBar from "./components/TaskBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <div>
        <AddTask />
        <Filtered />
        <TaskBar />
        <TaskBar />
        <ActionButton />
      </div>
    </>
  );
}

export default App;
