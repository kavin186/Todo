import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function C2() 
{
    const le = 
    {
      float:'right'
     };

    const [taskData,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/tasks/")
         .then((response) => {
          setData(response.data)
           });
      },[])

     function hello(datac)
      {
        if(datac){
             return ('Completed');
           }
           else{
            return ('Not Completed');
           }
         }


    return (
        <div> 
            <nav class="navbar">
            <ul>
                <li><a href="#home">TaskMap</a></li>
                <li style={le}><button class="button"><Link to ="/">Back</Link> </button></li>
            </ul>
           </nav> 
            <br></br> <br></br> <br></br> <br></br>
            <div className="rows">
             {taskData.map((data)=>
                // if(!data.completed)
                // {
              (
             <div className="columns">
              <div className="card">
               <h3>User Name :{data.name}</h3>
               <p className="ps">Task : {data.task}</p>
               <p className="ps">Created : {data.created_at}</p>
               <p className="ps">Status : { hello(data.completed) }</p>
          </div>
         </div>
          ))}
          </div>
        </div>
    );
  
}