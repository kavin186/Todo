import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Home() 

{
  const le = 
  {
    float:'right'
   };   
    return (
     
      
      
     <div className="bg" >
      <nav class="navbar">
            <ul>
                <li><a href="#home">Task</a></li>
                <li style={le}><button><a href="/view">View</a> </button></li>
            </ul>
        </nav>
      
      </div>
      

    );
  
}