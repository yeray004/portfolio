import './Home.css'
import BackgroundHome from './BackgroundHome'
// IMAGES
import logo from '../img/Logo Yeray.png'
import barras from '../img/barras.png'
import oreja from '../img/oreja.png'

function Home() {
    return (
        <>
            <section id='home' className='component-section home-container'>
                <div className='home-logo-desc'>
                    <img src={logo} alt="Logo Yeray Guachetá"className='home-logo'  />
                    <p className='home-desc'>¡Hola! Mi nombre es Yeray, Full-Stack web Developer.</p>
                </div>
                <img src={barras} alt="Barras" className="bck-icons" />
                <img src={oreja} alt="Oreja" className="bck-icons" />
                <BackgroundHome/>
                <div className='bckg-fade bckg-fade-home'></div>
                <p className='workingOn'>⬅️➡️</p>
            </section>
        </>
    )
}

export default Home