
import { NavLink } from "react-router-dom";
import './style.css';


const Header = () => {
    return ( 
        <div className=" bg-[rgba(41,130,220,0.8)] text-[#fff]">

            <div className="container">
            <nav className="flex items-center justify-between gap-[20px] py-[20px]">
            <NavLink to='/to-do-react-learn' className='logo'>
                <span className="text-[26px]">
                Note App
                </span>
            </NavLink>
            <div className="flex gap-[10px] text-[20px]">
                <NavLink className='opacity-[0.7]' to='/to-do-react-learn'>Home</NavLink>
                <NavLink className='opacity-[0.7]' to='/about'>About</NavLink>
            </div>
            </nav>
            </div>
        
        </div>
     );
}
 
export default Header;