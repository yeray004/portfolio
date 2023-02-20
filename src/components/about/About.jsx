import './About.css'
//IMAGE
import imagenYeray from '../img/imagenyeray1.webp'
import AboutBackground from './AboutBackground'

function About() {
    return (
        <>
            <section id='about' className='component-section'>
                <h1>Sobre mí</h1>
                <div className='about-img-text'>
                    <img src={imagenYeray} alt="Imagen Yeray" className='about-img' />
                    <div className='about-text'>
                        <p>¡Hola! Me llamo Yeray Guachetá y tengo 18 años. Soy desarrollador web Full-Stack y Auxiliar administrativo Colombiano interesado en el mundo de la industria tecnológica así  como en el campo administrativo.</p>
                        <p>Disfruto escuchar todo tipo de música y explorar mi lado creativo a través de esta y la fotografía.</p>
                        <p>Apasionado por el aprendizaje tanto en el ámbito social como en lo personal si de tecnología o habilidades blandas estamos hablando ;).</p>
                    </div>
                </div>
                <a className='cv-button' target='_blank' href="https://drive.google.com/file/d/1YM4GLkJrx0F3YtE8JYWHXZleqPi-vEiO/view?usp=sharing"> Mi CV</a>
                <AboutBackground/>
                <div className='bckg-fade'></div>
            </section>
        </>
    )
}

export default About