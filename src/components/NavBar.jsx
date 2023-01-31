import './NavBar.css'

function NavBar() {
    return (
        <>
            <header className='nav-bar-container'>
            <label htmlFor="btn-menu"><h1>. . .</h1></label>
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
                            <label for="btn-menu">✖️</label>
                        </div>
                    </div>
            </header>
        </>
    )
}

export default NavBar