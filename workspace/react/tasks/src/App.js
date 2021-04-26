import React, { Component } from 'react';
import './App.css';
import {todos} from "./todos.json"
import Form from "./components/Form"


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.agregarTarea = this.agregarTarea.bind(this);

  }

  agregarTarea(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  borrarTarea(index){
    this.setState({
      todos: this.state.todos.filter((todos, i) =>{
        return i !== index;
      })
    })
  }
  
  render(){
   const todos = this.state.todos.map((x, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{x.title}</h3>
              <span className="badge bg-danger badge-pill ml-2">
                {x.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{x.description}</p>
              <p>{x.responsable}</p>
          </div>
          <div className="card-footer">
            <button
             className="btn btn-danger"
             onClick={this.borrarTarea.bind(this, i)}>
              Borrar
            </button>
          </div>
          </div>
        </div>
      )
    } )

    return(
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">
            Asks
            <span className="badge badge-pill">
              { this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row m-t4">
            <div className="col-md-3">
            <Form onAddTodo={this.agregarTarea}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}

export default App;

