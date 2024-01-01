import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const [newDate, setNewDate] = React.useState(todo.date)

  const handleTitleChange = (e) => {
    e.preventDefault();
    
    if (todo.complete === true) {
      setNewTitle(todo.title);
   
      
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
     
    }
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
   
      setNewDate(todo.date)
    
    } else {
      todo.date = "";
  
      setNewDate(e.target.value)
    }
  };
  return (
    <div className="todo">
        
  <input
        style={{ textDecoration: todo.completed && "line-through" , fontSize:"smaller", paddingLeft:"10px"}}
        type="list"
        value={todo.title === "" ? newTitle : todo.title}
        className="list border-solid"
        onChange={handleTitleChange}
      />

       <input
        style={{ textDecoration: todo.completed && "line-through",fontSize:"smaller" }}
        type="date"
        value={todo.date === "" ? newDate : todo.date}
        className="list border-solid"
        onChange={handleDateChange}
      />
      <div className="button-container">
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle, newDate)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>

        
      </div>
    </div>
  );
}