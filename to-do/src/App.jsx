
import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [toDo, setTODO] = useState([])
  const [value, setValue] = useState("")


  const handleSubmit = (e) => {
   e.preventDefault()
  }


  const addTODO = () => {
    setTODO([...toDo, value]);
    setValue("")
   
  }

  const deleteBtn = (i) => {
    const newTask = toDo.filter((_,index) => index !== i)
    setTODO(newTask)
    console.log(newTask);
   };

  
 
  return (
    <div className="p-2 m-2">
      <h1 className="flex justify-center">TODO List</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 font-black cursor-pointer m-2"
            type="text"
            placeholder="enter a task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={addTODO}>Add</button>
        </form>
      </div>

      {toDo.map((item, index) => (
        <ul key={index}>
          <List item={item} index={index} deleteBtn={deleteBtn}  />
        </ul>
      ))}
    </div>
  );
}

export default App
