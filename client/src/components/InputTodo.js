import React,{useState} from 'react'

function InputTodo() {

    const [description, setDescription] = useState('')

    const submitHandler =  async(e)=>{

        e.preventDefault()
        try {

            const body = {description}
            const response = fetch("http://localhost:5001/todos",{

               method:"POST",
               headers:{"Content-Type":"application/json"},
               body:JSON.stringify(body)
            })

           window.location='/'
            
        } catch (error) {
            
        }
    }
  return (
    <>
     <h1 className='text-center mt-5'>Pern TodoList</h1>
     <form className="d-flex mt-5" onSubmit={submitHandler}>
      <input type="text" className='form-control'
       placeholder='Type Description.....'
       value={description}
       onChange={(e)=>setDescription(e.target.value)}
       />
      <button className='btn btn-success'>Add</button>
     </form>
    </>
  )
}

export default InputTodo