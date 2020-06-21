import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Login from "./components/Login";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinder from "./components/EventBinder";
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appComponent.css';
import success from './app.module.css';
function App() {
  Axios({
    method: "GET",
    url: "http://localhost:8091/getproduct",
    headers: {
      'Access-Control-Allow-Origin': true,
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.name);
    // return <h1>1. {res.data.name}</h1>
  });
  return (
    <div className="App">
    <h1 className ='error'>:)</h1>
    <h1 className = {success.success}>;)</h1>
    <Inline />
    {/* <StyleSheet primary = {true}/> */}
    {/* <NameList /> */}
    {/* <UserGreeting /> */}
    { /*
    <ParentComponent />
    <EventBinder />
    <FunctionClick />
    <ClassClick />
    <Login />
    <Counter />
    <Message />
    <Greet name = "Sheeba" lastName = "Anantharaman">
        <p>
            This is my Mother;
        </p>
     </Greet>
     <Greet name = "Mano" lastName = "Anantharaman">
        <button>Brother</button>
     </Greet>
     <Greet name = "Anantharaman" lastName = "Mariyanathan"/>
     <Welcome name = "Sheeba" lastName = "Anantharaman"/>
     <Welcome name = "Mano" lastName = "Anantharaman"/>
     <Welcome name = "Anantharaman" lastName = "Mariyanathan"/>
    </div>
  */}
     </div>
     
  );
}

export default App;
