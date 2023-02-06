function TaskItem(props) {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong>Task {props.id}</strong>
          </div>
          <div className="col-6 text-end">
            <small>{props.date}</small>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{props.task}</p>
      </div>
      <div className="card-footer">
        {props.status == "New" ? (
          <button
            type="button"
            className="btn btn-success ml-2"
            onClick={() => props.onComplete(props.taskId)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary ml-2"
            onClick={() => props.notComplete(props.taskId)}
          >
            Not Complete
          </button>
        )}
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.onDelete(props.taskId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
