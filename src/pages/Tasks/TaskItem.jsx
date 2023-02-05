function TaskItem(props) {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong>Task 1</strong>
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
        <button type="button" className="btn btn-success ml-2">
          Complete
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
