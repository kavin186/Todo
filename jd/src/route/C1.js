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
    axios.get("http://localhost:3000/tasks/")
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
      await axios.post("http://localhost:3000/task/" ,{ name:name,task: task})
     .then((data) => {
      console.log(data);
              setName("")
              setTask("")
       }).then(() =>{

     axios.get("http://localhost:3000/tasks/")
     .then((response) => {
      console.log("hello",response);
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
          <table>
          <thead>
              <tr>
                <th>Name</th>
                <th>Task</th>
                <th>Completed</th>
                <th>Delete</th>
              </tr>
          </thead>
          <tbody>
        
          {cntask.map((data)=>(
              <tr>
                <td>{data.name}</td>
                <td>{data.task}</td>
                <td className="buts"><button className="butss" onClick={ () =>{
                axios.patch(`http://localhost:3000/task/${data.id}`)
                alert("Task have been updated successfully")}
                }>
                  Update</button></td>

                <td className="buts"><button className="butss" onClick={ () =>{
                axios.delete(`http://localhost:3000/delete/${data.id}`)
                alert("Task have been deleted successfully")}
                }>  
                  Delete</button></td>
              </tr>
          ))}
              
          </tbody>

          </table>
          


          <table>
          <thead>
              <tr>
                <th>Name</th>
                <th>Task</th>
                <th>Completed</th>
                <th>Delete</th>
              </tr>
          </thead>
          <tbody>
        
          {ctask.map((data)=>(
              <tr>
                <td>{data.name}</td>
                <td>{data.task}</td>
                <td>Completed</td>

                <td className="buts"><button className="butss" onClick={ () =>{
                axios.delete(`http://localhost:3000/delete/${data.id}`)
                alert("Task have been deleted successfully")
                }
                }>  
                  Delete</button></td>
              </tr>
          ))}
              
          </tbody>

          </table>

        
      
      </div>

    );
  
}