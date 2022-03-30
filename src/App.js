import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Sidebar}from "./components/Sidebar";
import {Home} from "./components/Home";
// import Projects from "./component/Projects";
// import {Login1} from "./components/Login1";
import {AddProject} from "./components/AddProject";
import {AddUser} from "./components/AddUser";
import {ProjectTable} from "./components/ProjectTable";
import {Form} from "./components/Form";
import {Form1} from "./components/Form1";
// import { useState } from 'react';
import {Login} from './components/Login';
import {Login1} from './components/Login1';
// import { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {User} from './components1/User';

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          
          {/* <Route index element={<Home />} /> */}
          <Route path="Login" element={<Login />} />
          <Route path="Home" element={<Home/>} />
          <Route path="ProjectTable" element={<ProjectTable/>} />
          <Route path="Login1" element={<Login1 />} />
          <Route path="User" element={<User/>} />
          
          <Route path="AddProject" element={<AddProject/>} />
         
        <Route path="AddUser" element={<AddUser/>} />
        <Route path="Form" element={<Form/>} />
        <Route path="Form1" element={<Form1/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
