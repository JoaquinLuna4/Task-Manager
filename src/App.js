// import React, {Component, useEffect} from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import { todos } from './todos.json'; 

import Form from './components/TodoForm'

console.log(todos);
let todosJSON = JSON.stringify(todos)
localStorage.setItem("data", todosJSON)


class App extends Component{
  
constructor(){
  super();
  this.state = {
    todos
  }
  this.handleAddTodo = this.handleAddTodo.bind(this);
}
// useEffect(() => {

// }, []);

  handleRemove(indice){
      if(window.confirm("Seguro quieres eliminar esta tarea?")){ //Para solicitar confirmacion antes de eliminar, preferente antes que un 'alert' - Se le agrega el window para declarar a React que viene del navegador
        this.setState({
          todos: this.state.todos.filter((e , i) =>{             //En vez de recorrer todos los elementos, los filtra si cumplen una condicion
            return i !== indice;                                 //En este caso si no coincide con el indice que le damos, lo agrega, en el caso que sea igual, lo filtra, no lo agrega al todos
          })
        })    
      }
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i)=>{
      //RETURN DE VARIABLE 'TODOS'
      return(       
        <div className="col-md-4" key={i}>
          
          <div className="card mt-4" >        
          <div className="card-header"> <h3> {todo.title} </h3> 
          
           <span className="badge badge-pill badge-danger ml-2 text-black"> 
             {todo.priority}
            </span> 
          
          </div> 
          <div className="card-body"> <p> {todo.description}</p> 
                                      <p><mark> {todo.responsible} </mark></p>
          </div>
          <div className="card-footer">
              <button className="btn btn-danger" onClick= {this.handleRemove.bind(this, i)} > Delete</button>
          </div>
        </div>
        </div>
      )
    }) 
    //RETURN DE LA APP
    return(
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="#" className="text-white App-link"> 
        TASK <span className="badge badge-pill badge-light ml-2"> {this.state.todos.length}</span>
        </a>       
      </nav>
      <h1 className="title"> TASK MANAGER </h1>
      <div className="container">
        <div className="row mt-4" >
          <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <Form onAddTodo={this.handleAddTodo}/>  
          </div>

       <div className="col-md-8">
        <div className="row">
         {todos}
        </div>
       </div>   
        </div>
      </div>
    </div>
  );
}
}
export default App;

console.log(todos);