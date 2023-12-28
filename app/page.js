'use client';
import React, { useState, useEffect } from 'react';
import {
  
  
  
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase';
import Title from "./components/todo/Title";
import AddTodo from "./components/todo/AddTodo";
import Todo from "./components/todo/Todo";

export default function Home() {

  // Add item to database

  // Read items from database
 

  // Delete items from database

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
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
    console.log(date)
    console.log(title)
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
  
    </div>
  );
}
