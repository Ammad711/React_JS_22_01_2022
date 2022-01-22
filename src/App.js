// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import Todo from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";
import React, { useState,useEffect } from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // var myvar=34;
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
          console.log("I am on delete todo",todo);
          // Deleting by this way in react doesn't work
          // let index=todos.indexOf(todo);
          // todos.splice(index,1);
          setTodos(todos.filter((e)=>{
              return e!==todo;
          }));
          localStorage.setItem("todos",JSON.stringify(todos));
  } 

  const addTodo=(title,desc)=>{
    console.log("I am adding this todo", title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     sno=todos[todos.length-1].sno+1;
  }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

   
    
    
    // if(localStorage.getItem("todos")){
      
    // }
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));

  }, [todos])
  //   {
  //      sno: 1,
  //      title: "go to market",
  //      desc:"go to market to get job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "go to mall",
  //     desc:"go to mall to get job done"
  //  },
  //  {
  //   sno: 3,
  //   title: "go to park",
  //   desc:"go to park for exercise"
  //  }
  // ]);
  return (
    // <div className="App">
    //   <header className="App-header">
    //   <div>{12+47}</div>
    //   <div>{myvar}</div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
         <Header title="My Todos List" searchBar={true}/>
         <Switch>
          <Route exact path="/" render={()=>{
          return (
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          )}}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
         <Footer/>
    </Router>
    </>

  );
}

export default App;
