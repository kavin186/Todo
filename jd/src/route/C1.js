import { useEffect, useState } from "react";
import pro from './image1.jpg';
import axios from "axios";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function C1() 

{
  const le = 
  {
    float:'right'
   };
   const [taskData,setData] = useState([])
   const [name, setName] = useState("")
   const [task, setTask] = useState("")
   const [ctask, setComptask] = useState([])
   const [cntask, setNcomptask] = useState([])
  
  useEffect(()=>{
    axios.get(`https://${process.env.REACT_APP_APP_URL}/tasks`)
     .then((response) => {
      setData(response.data)
      setComptask(taskData.filter((task)=>{return task.completed === true}))
      setNcomptask(taskData.filter((task)=>{return task.completed === false}))
      document.title = 'TaskMap';
       });

  },[])

   async function hi()
  {
    
     alert("Task have been submitted successfully");
    axios.all([
      await axios.post(`http://${process.env.REACT_APP_APP_URL}/task/` ,{ name:name,task: task})
     .then((data) => {
      console.log(data);
              setName("")
              setTask("")
       }).then(() =>{

     axios.get(`http://${process.env.REACT_APP_APP_URL}/tasks/`)
     .then((response) => {
      setData(response.data)
       })})
      ])
      }
      
 
  
  

    return (
     
     <div className="bg" >
      <nav class="navbar">
            <ul>
                <li><a href="#home">TaskMap</a></li>
                <li style={le}><button class="button"><Link to="/view">View</Link> </button></li>
            </ul>
        </nav> 
         <div className="row">
          <div className="columna">
            <img src={pro} ></img>
          </div>
          <div className="column">
           <p className="pss">
          
            <label>Name : <input className="size" type="text" id="name" placeholder="Enter your name" value={name}
              onChange={(e) => setName(e.target.value)} required/>
            </label>
             <br></br> <br></br> 
  
              <label className="la">Task : <input className="size" type="text" id ="task" placeholder="Enter your task"
             value={task}
             onChange={(e) => setTask(e.target.value)} required/></label>
             <br></br> <br></br> 
  
           <button onClick={hi}  className="subsize">submit </button>
          </p>
          </div>
          </div>
      </div>

    );
  
}