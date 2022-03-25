import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {


    const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5001/todos");
      const jsonData = await response.json();
      setTodos(jsonData);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

//delete todo

const deleteTodo = async(id)=>{


    try {
        const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`,{

          method:"DELETE"
        })
        setTodos(todos.filter(todo=>todo.todo_id !==id))
    } catch (error) {
        
        console.log(error);
    }

}

  return (
    <>
      {""}
      <table className="table mt-5 text-center striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo=>(

                <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                <EditTodo todo={todo}/>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button>
                </td>
                </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
