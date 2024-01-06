'use client'
import React from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import 'react-toastify/dist/ReactToastify.css';
export default function AddTodo() {
  const notify = () => toast("Todo Added");
  
const { user } = UserAuth();
 
  const [title, setTitle] = React.useState("");
  const [date,setDate] =React.useState("");

  const user_email= user?.email || "Unknown";
  const handleDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
    setDate(formattedDate);
    // Additional actions can be performed here with the formattedDate value
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== ""  && date !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        date,
        user_email,
        completed: false,
      });
      setTitle("");
      setDate("");
    }
  };
  return (
    <div>
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
    
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[            
         'StaticDatePicker',
        ]}
      ><DemoItem label="">
          <StaticDatePicker defaultValue={dayjs('2022-04-17')}   value={date !== '' ? dayjs(date) : null} // Convert stored date string to Dayjs object
        onChange={(newDate) => handleDateChange(newDate)}/>
         
          
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
      
      <div className="btn_container">
        <button onClick={notify}>Add</button>
        <ToastContainer />
      </div>
    </form>
    </div>
  );
}