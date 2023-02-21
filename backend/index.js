const express = require('express')

const app = express()

const cors = require("cors");
 
app.options("*", cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }));

app.use(cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }));

app.use(express.json());



const mongoose = require('mongoose')
var { v4:uuid } = require('uuid')
var fs = require('fs/promises')

const mongodb = require('mongodb')
app.use(express.json())
mongoose.set('strictQuery' ,false);

 mongoose.connect('mongodb://127.0.0.1:27017/first',
 {
    useNewUrlParser : true,
    useUnifiedTopology : true
 })
const db =mongoose.connection;
 
const schema = new mongoose.Schema({
  name:{
    type:String,
  },
  task:{
    type:String,
  },
  id: {
    type : String,
   },
  createdAt : {
  type: String,
   },
   completion_status : {
    type : Boolean,
   }

});

const t = mongoose.model("task", schema);
  const coll = db.collection("task")
//   console.log("created")
//   db.createCollection("task")
//  }
// );



app.get('/tasks',async(req,res)=>{

  try{
    const result = await coll.find().toArray();
    res.send(result)
    console.log(result)
    }
    catch (error)
    {
     throw error
    }
    
    })


app.post('/task',async (req,res)=>{
 try{
  let tasker = {
    ...req.body,
    id : uuid(),
    created_at : new Date().toLocaleString(),
    completed : false,
    completed_at : ""
  }
  coll.insertOne(tasker)
  console.log("Inserted Successfully")
}
   catch (error){
    res.status(400).send("fail")
  }
})



// async function addTask(task){
//    console.log(task);
//   try
//   {
//     console.log("hv");
//     const  dh = db.collection("task")
//     dh.insertOne(task)
//     console.log("success")
//   } 
//   catch (error)
//   {
//     if(error.code !== "ENOENT"){
//       throw "wrong"
//     }
//     console.log(error);
//   }
// }



app.patch('/task/:id',async(req,res)=>{
  const taskId = req.params.id

  try{
    const filter  = {id : taskId}
    const newValues = {$set:{completed : true,completed_at : new Date().toLocaleString()}};
    await db.collection("task").updateOne(filter,newValues)
    } 
    catch(error)
    {
    throw error
    }
});



// async function markTaskCompletion(taskId){
//   try{
//     const result = await fs.readFile('store.json')
//     let tasks = JSON.parse(result.toString())
//     let found = false
//     tasks.forEach(task => {
//       if(task.id === taskId){
//         found = true
//         task.completed = true
//         task.completed_at = new Date().toLocaleString()
//       }
//     })
//     if(found){
//     await fs.writeFile('store.json',JSON.stringify(tasks))
//     return true
//     }
//     return false
//   } 
//   catch (error){
//     throw error
//   }
// }



app.delete('/delete/:id',async (req,res)=>{
const taskIds = req.params.id
const filters  = {id : taskIds}
try{
  db.collection("task").deleteOne(filters)
} 
catch(error){
  throw error
}
})



// async function deleteTask(taskId){
// try{
//   const result = await fs.readFile('store.json')
//     let tasks = JSON.parse(result.toString())
//     let newTasks = []
//     let i=0
//     let found = false
//     tasks.forEach(task => {
//       if(task.id == taskId)
//       {
//         tasks.splice(i,1)
//         found = true
        
//       }
//       else
//       {
//         i++
//       }
//     })
//       if(found){
//         await fs.writeFile('store.json',JSON.stringify(tasks))
//         return true
//         }
//         return false
//       } catch(error){
//         throw error
//       }
//     }


app.listen(3000,function()
{
    console.log('App listening on port 3000')
})



