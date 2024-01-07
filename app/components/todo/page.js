"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import Title from "./Title";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { UserAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

export default function TodoHome() {
  const { user } = UserAuth();
  const notify_changed = () => toast("Todo May Be Changed");
  const notify_deleted = () => toast("Todo Deleted");
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    const user_email = user.email;
    const q = query(
      collection(db, "todos"),
      where("user_email", "==", user_email)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title, date) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title, date: date });
    notify_changed();
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    notify_deleted();
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
