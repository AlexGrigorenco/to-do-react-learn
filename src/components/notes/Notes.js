

import { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AlertContext } from '../../context/alert/alertContext';
import './style.css'
import close from './img/close.svg'


const Notes = ({notes, onRemove}) => {

    const alert = useContext(AlertContext)

    const removeNote =(id) =>{
        onRemove(id)
        alert.show('The note has been deleted!', 'success')
    }


    return ( 
        <TransitionGroup component='ul' className="flex flex-col gap-[12px] py-[20px]">
            {notes.map(item => <CSSTransition
             key={item.id}
             classNames={'note'}
             timeout={1000}
            >
                <li className="py-[10px] px-[6px] border shadow-[2px_2px_6px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_10px_rgba(0,0,0,0.3)] flex gap-[10px] justify-between items-center">
                <div className='flex gap-[20px]'>
                <span>{item.title}</span>
                <span className='font-[400]'>{item.date}</span>
                </div>
                <button onClick={() => removeNote(item.id)} className='p-[6px] border border-[rgba(255,0,0,0.4)] hover:border-[rgba(255,0,0,0.9)] rounded-[4px] bg-[rgba(255,0,0,0.1)] hover:bg-[rgba(255,0,0,0.2)]'>
                  <img width={16} src={close} alt="close" />
                </button>
            </li>
            </CSSTransition>)}
        </TransitionGroup>
     );
}
 
export default Notes;