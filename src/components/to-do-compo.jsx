import react from 'react'
import '../App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../reducers';


const SubmitCompo = () => {
    const [TodoText, setTodoText] = useState('');
    const items = useSelector((state) => state.todo.items);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setTodoText(event.target.value);
    }
    
    const handleClick = () => {
      dispatch(addTodo(TodoText));
      setTodoText("");
    }

  
    return (
        <div>
            <h1 className='bg-blue-400 title'>to do list</h1>
        <div className='bg-blue-400 p-64 font-bold text-box-all '>
        <div className='text-box-location'>
         
           <label>Add project  : </label><input type='text' name="myInput" className='text-box text-black shadow-lg border-collapse border-black' 
           placeholder='write here your to do' 
           value={TodoText} 
           onChange={handleChange}
           />
           <button className='submit-btn shadow border bg-white' onClick={handleClick} >confirm</button> 
          
           <hr className='line'></hr>
           <div className='list'>
                <table className='table-box'>
                <ul className='block pb-4 float-left'>
                    {items.map((item, index) => (
                        <li key={index}>{index + 1}. {item}</li>
                    ))}
                    </ul>
                </table>
           </div>
        </div> 
        </div>
        </div>
    );
}



export default SubmitCompo;