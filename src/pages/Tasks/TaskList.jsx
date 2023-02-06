import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [taskUpdate, setTaskUpdate] = useState(false);
  const [taskList, setTask] = useState([]);

  useEffect(() => {
    const apiUrl = `https://reacttaskmanager-c929c-default-rtdb.firebaseio.com/tasks.json`;

    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setTask(Object.values(response.data));
      }
    });
  }, [taskUpdate]);

  const handleComplete = (id) => {
    const apiUrl = `https://reacttaskmanager-c929c-default-rtdb.firebaseio.com/tasks/${id}.json`;

    axios.patch(apiUrl, { status: "Completed" }).then((response) => {
      setTaskUpdate(!taskUpdate);
    });
  };

  const handleNotComplete = (id)=>{
    const apiUrl = `https://reacttaskmanager-c929c-default-rtdb.firebaseio.com/tasks/${id}.json`;

    axios.patch(apiUrl,{status:"New"}).then((response)=>{
      setTaskUpdate(!taskUpdate);
    })
  }

  const displayItems = () => {
    let i = 0;
    return taskList.map((task) => {
      i++;
      return (
        <TaskItem
          id={i}
          taskId={task.id}
          key={task.id}
          date={task.date}
          task={task.task}
          status={task.status}
          onComplete={handleComplete}
          notComplete={handleNotComplete}
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
