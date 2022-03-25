import React,{useState} from "react";

function EditTodo({todo}) {

  const [description, setDescription] = useState(todo.description);


  const updateDesc = async(e)=>{


    e.preventDefault()

    try {
      
      const body = {description}
      const response = fetch(`http://localhost:5001/todos/${todo.todo_id}`,{

        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
     })
 console.log(response)
    } catch (error) {
      
      console.log(error)
    }

  }
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Edit Todo</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <input type="text" className="form-control"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-warning" onClick={()=>updateDesc()}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;
