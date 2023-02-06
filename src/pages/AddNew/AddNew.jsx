function AddNew() {
  return (
    <div className="container">
      
      <div className="row justify-content-center mt-2">
        <div className="col-6">
        <legend>Add new task</legend>
          <form>
            <fieldset>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter due date"
                />
              </div>

              <br />

              <div className="form-group">
                <label>Task</label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  placeholder="Enter task"
                ></textarea>
              </div>

              <br />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
