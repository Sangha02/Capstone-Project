import React, { useState } from "react";
import "./table.css";
import axios from "axios";

function TableBookingForm({user,setUser}) {
  const [numPeople, setNumPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(`You are booking a table for ${numPeople} people on ${date} at ${time}`);
    // You can add your own logic here for booking the table

    const numOfPeople=document.getElementById('num').value
    const dateEl=document.getElementById('date').value
    const timeEl=document.getElementById('time').value
    let cusDate=new Date(dateEl)
    let dateStr=`${cusDate.getDate()} - ${cusDate.getMonth()} - ${cusDate.getFullYear()}`
    const newBooking={date:dateStr,time:timeEl,customers:numOfPeople}
    let newList=user.bookings
    newList.unshift(newBooking)
    try{
      const result=await axios.patch('https://zaikaarbackend-production.up.railway.app/users',{newBookingList:newList,id:user.id})
      setUser({id:result.data._id,name:result.data.username,contact:result.data.phone,email:result.data.email,gender:result.data.gender,bookings:result.data.bookings})
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="table_page">
      <div className="book_table">

        <form onSubmit={handleSubmit}>
          <h2>Table Booking Form</h2>
          <div className="details">
            <label>
              Number of people:
              <input
                type="number"
                value={numPeople}
                id="num"
                onChange={(event) => setNumPeople(event.target.value)}
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                value={date}
                id="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
            <br />
            <label>
              Time:
              <input
                type="time"
                id="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Book Table</button>
          </div>
        </form>
      </div>
      <div className="pre_bk">
      {
        (user.bookings===[])?<p>no booking yet</p>:
        user.bookings.map((booking)=>{
          return(
            <div style={{color:"white"}}>This is a booking<p>Date: {booking.date}</p>
            <p>Time : {booking.time}</p>
            <p> Number of people : {booking.customers}</p></div>
          )
        })
      }

      </div>
    </div>  
  );
}

export default TableBookingForm;

