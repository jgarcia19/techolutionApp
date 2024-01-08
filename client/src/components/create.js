import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Create() {
 const [form, setForm] = useState({
  tasks: ""
 });
 const navigate = useNavigate();
  // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
  // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    // When a post request is sent to the create url, we'll add a new task to the database.
   const newTask = { ...form };
    if (newTask.task == "") {
      window.alert("Please enter a task!");
      return;
    }
    await fetch("http://localhost:5000/task/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newTask),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
    setForm({ task: "" });
   navigate("/");
 }
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="task">Task</label>
         <input
           type="text"
           className="form-control"
           id="task"
           value={form.task}
           onChange={(e) => updateForm({ task: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create task"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}