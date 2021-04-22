import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from '.TaskList'
import './App.css';

class App extends Component {
counter = 9

  state ={
    tasks: [
        {
            id: 0,
            text: ' zagrać wreszcie w wiedzmina',
            date: '2018-02-15',
            important: true,
            active: true,
            finishDate: null
        },
        {
            id:1, 
            text:"zrobic dobry uczynek",
            date: "2021-12-30",
            important: false,
            active: true,
            finishDate: null,

        },
        {id:2, 
            text:"pomalowac dom",
            date: "2021-12-30",
            important: false,
            active: true,
            finishDate: null,
        },
        {id:3, 
            text:"schudnac",
            date: "2021-12-30",
            important: false,
            active: true,
            finishDate: null,
        },
        {id:4, 
            text:"sprzedac butelki po piwie",
            date: "2021-12-30",
            important: false,
            active: true,
            finishDate: null,
        },
        {id:5, 
            text:"jeszcze raz pomalowac dom",
            date: "2021-12-30",
            important: false,
            active: true,
            finishDate: null,},
    ]
}

deleteTask = (id)=>{
  // console.log("delete elementu o id" + id);
  // const tasks =[... this.state.tasks]

  // const index = tasks.findIndex(task => task.id===id)
  // tasks.splice(index, 1)
  // this.setState({
  //   tasks
  // })

 let tasks =[... this.state.tasks];
 tasks=tasks.filter(task => tasks.id !== id)
 this.setState({
   tasks
 })

 

}

changeTaskStatus=(id)=>{
  console.log('change w stanie elementu o id' + id)
  const tasks = Array.from(this.state.tasks);
  tasks.forEach(task => {
    if(task.id===id){
      task.active = false;
      task.finishDate = new Date().getTime()

    }
  })
  this.setState({
    tasks
  })
}

AddTask = (text, date, imortant)=>{
 // console.log('dodany obiekt');
  const task = {
    id: this.counter,
            text,// z inputa
            date,//z inputa
            important,//wartosc z inputa
            active: true,
            finishDate: null
  }
  this.counter++
  console.log(task,this.counter);

  this.setState(prevState => ({
    tasks: [...prevState.tasks, task]
  }))

  return true
}

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.AddTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
