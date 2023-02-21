import logo from './logo.svg';
import './App.css';
import C1 from './route/C1'
import Home from './route/Home'
import C2 from './route/C2'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< C1 />}></Route>
    <Route path='/view' element={< C2 />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
