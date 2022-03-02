function Task(props) {
  //const toggleTask = () => setTaskCompleted(!taskCompleted);

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{props.task.name}</h1>
        {props.task.isDone ? <span>DONE </span> : <span>PENDING ⌛</span>}

        <h2>Task Description</h2>
        <p>{props.task.description}</p>

        <button className="add" onClick={() => props.toggleDone(props.task._id)}>
          {props.task.isDone ? <span>UNDO </span> : <span>✔️</span>}
        </button>
      </div>
    </div>
  );
}

export default Task;
