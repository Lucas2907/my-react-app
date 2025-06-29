import Date from "./components/Date/Date";
import Line from "./components/Line/Line";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Task from "./components/task/task";
import { useState } from "react";

let counter = 0;

export default function Popup() {
  const [task, setTask] = useState([]);

  function deleteTask(taskId) {
    const arrCopy = task.filter((obj) => obj.id !== taskId);
    setTask(arrCopy);
  }

  function generateId() {
    console.log(counter);
    return ++counter;
  }

  function storeTask(newTask) {
    setTask((task) => [{ name: newTask, id: generateId() }, ...task]);
    newTask = "";
  }

  return (
    <div className="popup">
      <Date />
      <Line />
      <Header />
      <List infos={task} onDeleteItem={deleteTask} />
      <Task onAddTask={storeTask} />
    </div>
  );
}
