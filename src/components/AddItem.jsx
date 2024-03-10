import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../store/projectSlice";
import { addTask } from "../store/taskSlice";

export default function AddItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleAdd() {
    if (props.type === "task") {
      dispatch(addTask({ name }));
    } else {
      dispatch(addProject({ name }));
    }
    setName("");
    setIsOpen(false);
  }

  return (
    <div className="flex items-center p-3">
      <div
        className="cursor-pointer justify-around mx-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faCirclePlus} />
        Add {props.type}
      </div>
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder="Title"
            value={name}
            onChange={(element) => setName(element.target.value)}
          />
          <button className="bg-blue-500 text-white p-1" onClick={handleAdd}>
            Add {props.type}
          </button>
        </div>
      )}
    </div>
  );
}
