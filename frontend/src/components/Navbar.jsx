import cvport from '../assets/CV_นราพล.pdf'
import Cv from '../components/Cv'
import { Link } from "react-router-dom";

const Navbar = ({ onThemeToggle }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="navbar lg:hidden bg-base-100 ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => scrollToSection('start-section')}>Start/&gt;</a></li> 
                        <li><a onClick={() => scrollToSection('work-section')}>Work/&gt;</a></li>
                        <li><a onClick={() => scrollToSection('about-section')}>About/&gt;</a></li>
                        <li><a onClick={() => scrollToSection('contact-section')}>Contact/&gt;</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <a href={cvport} download className="btn btn-ghost normal-case text-xl">Download CV</a>
                </div>

            </div>

            <div className='hidden lg:block bg-base-100 bg-opacity-70'>
                <div className=" flex justify-between px-10 py-2">
                    <a href={cvport} download className="btn btn-ghost normal-case text-xl hover:scale-110 duration-150">Download CV</a>
                    <div className="flex gap-7 my-auto">
                        <a className='hover:scale-110 duration-150 btn btn-ghost' onClick={() => scrollToSection('start-section')}>Start/&gt;</a>
                        <a className='hover:scale-110 duration-150 btn btn-ghost' onClick={() => scrollToSection('work-section')}>Work/&gt;</a>
                        <a className='hover:scale-110 duration-150 btn btn-ghost' onClick={() => scrollToSection('about-section')}>About/&gt;</a>
                        <a className='hover:scale-110 duration-150 btn btn-ghost' onClick={() => scrollToSection('contact-section')}>Contact/&gt;</a>
                        <div className="flex gap-2 my-auto">
                            Theme
                            <input type="checkbox" className="toggle toggle-accent hover:cursor-none" onChange={onThemeToggle} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar