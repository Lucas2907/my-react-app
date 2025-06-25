import Date from "./components/Date/Date";
import Line from "./components/Line/Line";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Task from "./components/task/task";
import { useState } from "react";

export default function Popup() {
  const [task, setTask] = useState([
    { name: "Complete assigments", id: "0" },
    { name: "Cook Dinner", id: "1" },
    { name: "Buy Apple", id: "2" },
    { name: "Meet Kelly", id: "3" },
    { name: "Complete assigments", id: "4" },
    { name: "Cook Dinner", id: "5" },
    { name: "Buy Apple", id: "6" },
  ]);

  function storeTask(newTask) {
    console.log(newTask);
    setTask((task) => [{ name: newTask, id: task.length }, ...task]);
    newTask = "";
  }

  return (
    <div className="popup">
      <Date />
      <Line />
      <Header />
      <List infos={task} />
      <Task onAddTask={storeTask} />
    </div>
  );
}
