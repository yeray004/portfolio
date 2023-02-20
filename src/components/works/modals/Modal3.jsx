import wheelOfHappyBunny from '../../img/works/wheelofhappybunny1.webp'
import figma from '../../img/icons/figma1.webp'
import html from '../../img/icons/html1.webp'
import css from '../../img/icons/css1.webp'
import bootstrap from '../../img/icons/bootstrap1.webp'
import javascript from '../../img/icons/javascript1.webp'

function Modal3({isOpen, closeModal}) {
    const handleClose = e => e.stopPropagation()
    return (
        <>
            <article className={`modal ${isOpen&&'is-open'}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleClose}>
                    <button className="modal-close" onClick={closeModal}>X</button>
                    <div className='modal-image'>
                        <img src={wheelOfHappyBunny} alt="" />
                    </div>
                    <div>
                        <h4>Whell of Happy Bunny</h4>
                        <p>Desarrollo desde 0 a una rueda de la fortuna algo especial, una aplicación web para un nuevo evento de sacrifico de coders, con un sistema justo y aleatorio, en el que se hace el sorteo de una lista de nombres. Funcionamiento y adaptabilidad con nuestro tridente en desarrollo de código web, HTML, CSS (junto a la librería de Bootstrap), y JavaScript.</p>
                        <p>Tipo de Proyecto: Front-end, grupal.</p>
                        <div>
                            <img src={figma} className='modal-icon' alt="Figma" />
                            <img src={html} className='modal-icon' alt="HTML" />
                            <img src={css} className='modal-icon' alt="CSS" />
                            <img src={bootstrap} className='modal-icon' alt="Bootstrap" />
                            <img src={javascript} className='modal-icon' alt="JavaScript" />
                        </div>
                        <div>
                            <a href="https://wheel-of-happy.netlify.app/" target='_blank' className='modal-button'>Deploy</a>
                            <a href="https://github.com/yeray004/WheelOfDoom.git" target='_blank' className='modal-button'>GitHub</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Modal3