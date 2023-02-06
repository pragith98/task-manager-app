import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";

function AddNew() {
  const [message, setMessage] = useState("");

  const initialValues = {
    date: "",
    task: "",
  };

  const onSubmit = (values) => {
    const taskId = uuid4();

    const apiUrl = `https://reacttaskmanager-c929c-default-rtdb.firebaseio.com/tasks/${taskId}.json`;
    const task = { ...values, status: "New", id: taskId };

    axios
      .put(apiUrl, task)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Data saved");
        }
      })
      .catch((error) => {
        setMessage("Data not saved");
      });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.task) {
      errors.task = "Task cannot be blank";
    }

    if (!values.date) {
      errors.date = "date cannot be blank";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-6">
          <legend>Add new task</legend>
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  aria-describedby="emailHelp"
                  placeholder="Enter due date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="small text-danger">{formik.errors.date}</div>
                ) : null}
              </div>

              <br />

              <div className="form-group">
                <label>Task</label>
                <textarea
                  className="form-control"
                  id="task"
                  rows="3"
                  placeholder="Enter task"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.task}
                />
                {formik.touched.task && formik.errors.task ? (
                  <div className="small text-danger">{formik.errors.task}</div>
                ) : null}
              </div>

              <br />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
            {message ? (
              <div className="alert alert-dismissible alert-primary mt-4">{message}</div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
