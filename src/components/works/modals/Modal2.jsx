import cripto from '../../img/works/criptodashboard.webp'
import figma from '../../img/icons/figma.webp'
import html from '../../img/icons/html.webp'
import css from '../../img/icons/css.webp'
import javascript from '../../img/icons/javascript.webp'
import react from '../../img/icons/react.webp'

function Modal2({isOpen, closeModal}) {
    const handleClose = e => e.stopPropagation()
    return (
        <>
            <article className={`modal ${isOpen&&'is-open'}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleClose}>
                    <button className="modal-close" onClick={closeModal}>X</button>
                    <div className='modal-image'>
                        <img src={cripto} alt="Cripto Dashboard" />
                    </div>
                    <div>
                        <h4>Cripto Dashboard</h4>
                        <p>Un proyecto elaborado para conocer el cosumo de una API junto al manejo de diferentes vistas y componentes con el framework de React, podemos ver el uso de funciones como propiedades dentro de otros componentes y peticiónes de objetos de la API para la creación de gráficas, opciones de select, entre otros.</p>
                        <p>Tipo de Proyecto: Front-end, grupal.</p>
                        <div>
                            <img src={figma} className='modal-icon' alt="Figma" />
                            <img src={html} className='modal-icon' alt="HTML" />
                            <img src={css} className='modal-icon' alt="CSS" />
                            <img src={javascript} className='modal-icon' alt="JavaScript" />
                            <img src={react} className='modal-icon' alt="React" />
                        </div>
                        <div>
                            <a href="https://cripto-dashboard-ashen.vercel.app/" target='_blank' className='modal-button'>Deploy</a>
                            <a href="https://github.com/yeray004/CriptoDashboard.git" target='_blank' className='modal-button'>GitHub</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Modal2