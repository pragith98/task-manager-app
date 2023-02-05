function Tasks() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-6">
          <legend>Tasks</legend>
          <div className="card bg-light mb-3" >
            <div className="card-header">
              <div className="row">
                <div className="col-6">
                  <strong>Task 1</strong>
                </div>
                <div className="col-6 text-end">
                  <small>2023-05-07</small>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
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

          <div className="card bg-light mb-3" >
            <div className="card-header">
              <div className="row">
                <div className="col-6">
                  <strong>Task 1</strong>
                </div>
                <div className="col-6 text-end">
                  <small>2023-05-07</small>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
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
        </div>
      </div>
    </div>
  );
}

export default Tasks;
