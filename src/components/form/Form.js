

import { useState, useContext } from 'react';
import './style.css'
import { AlertContext } from '../../context/alert/alertContext';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
            event.preventDefault()

            if(value.trim()){

                firebase.addNote(value.trim()).then(() => {
                    
                    alert.show('The note has been created!', 'success')
                    
                }).catch(() => {
                    alert.show('Something wrong!')
                })
                setValue('')               
            }else{
                alert.show('Enter the title of the note!')
            }

            
    }

    return ( 
        <div className=' py-[30px]'>
            <form onSubmit={submitHandler}>
            <div className="inputNote-wrapper w-[100%] border rounded-[4px] overflow-hidden ">
                <input 
                className="inputNote w-[100%] p-[6px] tracking-[1px]" 
                type="text" 
                placeholder="Enter the title of the note"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
        </div>
     );
}
 
export default Form;