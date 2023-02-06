import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [taskList, setTask] = useState([]);

  useEffect(() => {
    const apiUrl = `https://reacttaskmanager-c929c-default-rtdb.firebaseio.com/tasks.json`;

    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTask(Object.values(response.data));
      }
    });
  }, []);

  const displayItems = () => {
    let i = 0;
    return taskList.map((task) => {
      i++;
      return (
        <TaskItem
          id={i}
          key={task.id}
          date={task.date}
          task={task.task}
          status={task.status}
        />
      );
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-6">
          <legend>Tasks</legend>
          {displayItems()}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
