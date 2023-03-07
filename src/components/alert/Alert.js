

import { useContext } from 'react';
import close from './img/close.svg'
import { AlertContext } from '../../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';
import './style.css'

const Alert = () => {

    const {alert, hide} = useContext(AlertContext)


    return ( 
        <CSSTransition
        in={alert.visible}
        timeout={{
            enter: 900,
            exit: 750,
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
        <div className="py-[20px] alert">
            <li className={`alert-${alert.type || 'warning'} py-[10px] px-[6px] border shadow-[2px_2px_6px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_10px_rgba(0,0,0,0.3)] flex gap-[10px] justify-between items-center rounded-[8px]`}>
                <div className='flex gap-[20px]'>
                <span>{alert.text}</span>
                </div>
                <button onClick={hide} className='p-[6px] border border-[rgba(255,0,0,0.4)] hover:border-[rgba(255,0,0,0.9)] rounded-[4px] bg-[rgba(255,0,0,0.1)] hover:bg-[rgba(255,0,0,0.2)]'>
                  <img style={{pointerEvents: 'none' }} width={16} src={close} alt="close" />
                </button>
            </li>
        </div>
        </CSSTransition>
     );
}
 
export default Alert;