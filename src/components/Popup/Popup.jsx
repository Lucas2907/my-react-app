import Date from "./components/Date/Date";
import Line from "./components/Line/Line";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Task from "./components/task/task";
import { setKey, getKey } from "../../utils/localStorage";
import { useEffect, useState } from "react";

export default function Popup() {
  const [counter, setCounter] = useState(() => {
    const savedId = getKey("id");
    return savedId && Number(savedId);
  });

  useEffect(() => {
    setKey("id", counter);
  }, [counter]);

  const [task, setTask] = useState(() => {
    const savedName = getKey("name");
    return savedName || [{ name: "Task Example", id: generateId() }];
  });

  useEffect(() => {
    setKey("name", task);
  }, [task]);

  function deleteTask(taskId) {
    const taskCopy = task.filter((obj) => obj.id !== taskId);
    setTask(taskCopy);
  }

  function fixTask(taskId) {
    const taskPrepend = task.find((obj) => obj.id === taskId);
    setTask([
      { name: taskPrepend.name, id: taskId },
      ...task.filter((obj) => obj.id != taskId),
    ]);
  }

  function generateId() {
    setCounter(counter + 1);
    return counter;
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
      <List infos={task} onDeleteItem={deleteTask} onFixItem={fixTask} />
      <Task onAddTask={storeTask} />
    </div>
  );
}

// 2- mini popup nao fecha quando aperta no icone de opções(!Isopened)
// 3- ARMAZENAR AS INFORAMAÇÕES EM ALGUM LUGAR(DATA STORAGE)
// 4- TORNAR SITE RESPONSIVO
