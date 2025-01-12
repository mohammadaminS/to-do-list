import react from 'react'
import 'F:/Amin/programming/test-1/src/App.css';
import { useState } from 'react';


const SubmitCompo = () => {
    const [TodoText, setTodoText] = useState('');
    const [DisplayTodo, setDisplayTodo] = useState('');
    const handleChange = (event) => {
        setTodoText(event.target.value);
    }
    const handleClick = () => {
      setDisplayTodo(TodoText);
      setTodoText("");
    }

  
    return (
        <div>
            <h1 className='bg-blue-400 title'>to do list</h1>
        <div className='bg-blue-400 p-64 font-bold text-box-all '>
        <div className='text-box-location'>
         
           <label>Add project  : </label><input type='text' name="myInput" className='text-box text-black shadow-lg border-collapse border-black' placeholder='write here your to do' value={TodoText} onChange={handleChange}/>
           <button className='submit-btn shadow border bg-white' onClick={handleClick} >confirm</button> 
          
           <hr className='line'></hr>
           <div className='list'>
                <table className='table-box'>
                    <ul className='block pb-4'>
                        <li> 1.{DisplayTodo}</li>
                        
                    </ul>
                </table>
           </div>
        </div> 
        </div>
        </div>
    );
}



export default SubmitCompo;