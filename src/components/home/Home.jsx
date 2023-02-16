import './Home.css'
import './HomeAnimation.css'
import BackgroundHome from './BackgroundHome'
// IMAGES
import logo from '../img/logo-yeray.webp'
import barras from '../img/barras.webp'
import oreja from '../img/oreja.webp'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

function Home() {
    return (
        <>
            <section id='home' className='component-section home-container'>
                <div className='home-logo-desc'>
                    <img src={logo} alt='Logo Yeray Guachetá'className='home-logo home-logo-animated'  />
                    <p className='home-desc text-flicker-in-glow'>¡Hola! Mi nombre es Yeray, Full-Stack web Developer.</p>
                </div>
                <img src={barras} alt='Barras' className='bck-icons'/>
                <img src={oreja} alt='Oreja' className='bck-icons'/>
                <BackgroundHome/>
                <div className='bckg-fade'></div>
                <p>¡Usa la flechas de tu teclado para navegar! <FiArrowLeftCircle/><FiArrowRightCircle/></p>
            </section>
        </>
    )
}

export default Home