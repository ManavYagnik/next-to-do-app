
import React from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";


export default function AddTodo() {
  
const { user } = UserAuth();
 
  const [title, setTitle] = React.useState("");
  const [date,setDate] =React.useState("");

  const c= user?.email || "Unknown";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== ""  && date !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        date,
        c,
        completed: false,
      });
      setTitle("");
      setDate("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          id="InpuT"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input_container">
        <input
          type="date"
          placeholder=""
          value={date}
          id="inputdate"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}