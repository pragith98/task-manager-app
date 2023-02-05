import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskList() {
  const [taskList, setTask] = useState([
    {
      id: 1,
      date: "2022-07-09",
      task: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      status: "new",
    },
    {
      id: 2,
      date: "2022-05-09",
      task: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      status: "new",
    },
  ]);

  const displayItems = () => {
    return taskList.map((task) => {
      return (
        <TaskItem
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
