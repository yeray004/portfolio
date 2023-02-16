import './NavBar.css'
import { BiHomeAlt } from "react-icons/bi";
import { IoWalkOutline } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";
import { MdOutlineContactPhone } from "react-icons/md";

function NavBar() {
    return (
        <>
            <header className='nav-bar-container'>
            <label htmlFor="btn-menu">
                <div className='icon-nav'>
                    <BiHomeAlt/><IoWalkOutline/><GrWorkshop/><VscTools/><MdOutlineContactPhone/>
                </div>
            </label>
                <input type="checkbox" id="btn-menu"/>
                    <div className="container-menu">
                        <div className="cont-menu">
                            <nav>
                                <a href="#home">// Home</a>
                                <a href="#about">// About</a>
                                <a href="#works">// Works</a>
                                <a href="#skills">// Skills</a>
                                <a href="#contact">// Contact</a>
                            </nav>
                            <label htmlFor='btn-menu'>✖️</label>
                        </div>
                    </div>
            </header>
        </>
    )
}

export default NavBar