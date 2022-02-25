import logo from './logo.svg';
import './App.css';
import './TaskItem';
import './DataContainer';
import {useState} from "react";
import AppHeader from "./AppHeader";
import TaskList from "./TaskList";


function App(props) {


  return (
      <div>
          <AppHeader/>
          <TaskList data={props.data} handleChange={props.handleChange}/>
          <button className="plus-button" type="button" id="plus" onClick = {props.handlePlusClick}> + </button>
          <label htmlFor="plus" className="newItem"> Create new item </label>
      </div>

  );
}

export default App;
