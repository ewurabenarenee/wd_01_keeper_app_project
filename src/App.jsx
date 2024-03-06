import ActionButton from "./components/ActionButton";
import AddTask from "./components/AddTask";
import Filtered from "./components/Filtered";
import NavBar from "./components/NavBar";
import TaskBar from "./components/TaskBar";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleSideBarChange() {
    setIsSideBarOpen(!isSideBarOpen);
    console.log(`Toggle is ${isSideBarOpen}`);
  }

  return (
    <>
      <NavBar toggleSideBar={handleSideBarChange} />
      <SideBar isSideBarOpen={isSideBarOpen} />
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
