

import close from './img/close.svg'


const Notes = ({notes, onRemove}) => {
    return ( 
        <ul className="flex flex-col gap-[12px] py-[20px]">
            {notes.map(item => <li className="py-[10px] px-[6px] border shadow-[2px_2px_6px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_10px_rgba(0,0,0,0.3)] flex gap-[10px] justify-between items-center" key={item.id}>
                <div className='flex gap-[20px]'>
                <span>{item.title}</span>
                <span className='font-[400]'>{item.date}</span>
                </div>
                <button onClick={() => onRemove(item.id)} className='p-[6px] border border-[rgba(255,0,0,0.4)] hover:border-[rgba(255,0,0,0.9)] rounded-[4px] bg-[rgba(255,0,0,0.1)] hover:bg-[rgba(255,0,0,0.2)]'>
                  <img width={16} src={close} alt="close" />
                </button>
            </li>)}
        </ul>
     );
}
 
export default Notes;