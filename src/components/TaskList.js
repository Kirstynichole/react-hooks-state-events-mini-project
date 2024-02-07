import React from "react";
import Task from "./Task";

function TaskList({tasks, handleRemoveTask}) {

  return (
    <div className="tasks">
      {tasks.map((task) => (<Task key={task.text} text={task.text} category={task.category} handleRemoveTask={handleRemoveTask}/>))}
    </div>
  );
}

export default TaskList;


  // const [taskList, setTaskList] = useState(tasks);
  // React.useEffect(() => {
  //   if (selectedCategory === "All") {
  //     setTaskList(tasks);
  //   } else {
  //     const filteredTasks = tasks.filter(task => selectedCategory === task.category);
  //     setTaskList(filteredTasks);
  //   }
  //   }, [tasks, selectedCategory]);
  //     const handleRemoveTask = (removedTask) => {
  //     const updatedTasks = taskList.filter(task => removedTask !== task.text);
  //     setTaskList(updatedTasks);
  // }