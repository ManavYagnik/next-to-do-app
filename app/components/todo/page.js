'use client';
import React, { useState, useEffect } from 'react';
import {
  
  
  
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase';
import Title from "./Title";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { UserAuth } from "../../context/AuthContext"

export default function TodoHome() {
  const { user } = UserAuth();
  // Add item to database

  // Read items from database
 

  // Delete items from database

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const c1 = user.email;

    const q = query(collection(db, "todos"), where("c", "==", c1));
    
  
    
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id});
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title, date) => {
 
    await updateDoc(doc(db, "todos", todo.id),{title:title, date:date});
    alert("Date or Title Changed")

  };
  
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
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
