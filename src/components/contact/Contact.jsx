import './Contact.css'
import { FiExternalLink } from "react-icons/fi";
import { GiVitruvianMan } from "react-icons/gi";
import logo from '../img/Logo Yeray.svg'

function Contact() {
    return (
        <>
            <section id='contact' className='component-section relative-icon'>
                <h1 className='down-line'>¡Trabajemos juntos!</h1>
                <div className='contact-container'>
                    <div className="contactSeparate">
                        <p className='down-line-sub'>E-mail📧</p>
                        <p><a href="mailto:yerayguacheta@gmail.com?subject=¡Trabajemos%20juntos!">yerayguacheta@gmail.com</a></p>
                    </div>
                    <div className="contactSeparate">
                        <p className='down-line-sub'>Otras redes📲</p>
                        <p><a target='_blank' href="https://www.linkedin.com/in/yeray-guachet%C3%A1-carre%C3%B1o/">LinkedIn <FiExternalLink/></a></p>
                        <p><a target='_blank' href="https://github.com/yeray004">GitHub <FiExternalLink/></a></p>
                    </div>
                </div>
                <div className='contact-logo'>
                    <img src={logo} alt='Logo Yeray' />
                </div>
                <div className='contact-bckg'></div>
                <div className='bckg-fade'></div>
            </section>
        </>
    )
}
{/* <button>
  <a href="mailto:tu_correo@gmail.com?subject=Asunto%20preestablecido">Enviar correo</a>
</button> */}
export default Contact