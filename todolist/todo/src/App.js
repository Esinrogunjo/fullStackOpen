
import './App.css';
import { useState } from 'react';



function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (event)=>{

    if(!event.target.value.trim())
    {
        return
    }
    if(event.key ==='Enter'){
      setTodo(todos.concat({task:event.target.value, isDone:false}))
      event.target.value = ""
    }
  
    
  }

  const toggleChange = (event)=>{
        
  }


console.log(todos);
if(todos.length === 0){
  return(
    <div>
        <h3>Todo is Empty</h3>
        <br/>
        <input type='text' onKeyPress= {addTodo}  />
    </div>
  );
}
  return (
    <div className="App">
      <h3>To do List !!!</h3>
      {todos.map((todo,indexTodo)=>{
        return (<div key={indexTodo+''+todo.task}>
          
                  <li className={todo.isDone ? "completed":null} >{todo.task}</li>
                  <button onClick={toggleChange(todo.indexTodo)}>{todo.isDone ? 'Undo':'Completed'}</button>
                  <button>Delete</button>
               </div>)
      })}
      <input type='text' onKeyPress= {addTodo}  />
       
    </div>
  );
}

export default App;
