import react from 'react'
import 'F:/Amin/programming/test-1/src/App.css';

const SubmitCompo = () => {
    return (
        <div>
            <h1 className='bg-blue-400 title'>to do list</h1>
        <div className='bg-blue-400 p-64 font-bold text-box-all '>
        <div className='text-box-location'>
           <form>
           Add project  : <input name="myInput" className='text-box'/>
           <button type='submit'className='submit-btn shadow border bg-white' >confirm</button>
           </form>
           <hr className='line'></hr>
           <div className='list'>
                <table className='table-box'>
                    <th>
                        1.
                    </th>
                </table>
           </div>
        </div> 
        </div>
        </div>
    );
}



export default SubmitCompo;