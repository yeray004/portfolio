import formula from '../../img/works/Formula2Vie.png'
import figma from '../../img/icons/figma.png'
import html from '../../img/icons/html.png'
import css from '../../img/icons/css.png'
import javascript from '../../img/icons/javascript.png'
import react from '../../img/icons/react.png'
import redux from '../../img/icons/redux.png'

function Modal1({isOpen, closeModal}) {
    const handleClose = e => e.stopPropagation()
    return (
        <>
            <article className={`modal ${isOpen&&'is-open'}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleClose}>
                    <button className="modal-close" onClick={closeModal}>X</button>
                    <div className='modal-image'>
                        <img src={formula} alt="" />
                    </div>
                    <div>
                        <h4>Formula2Vie</h4>
                        <p>Formula2Vie es una idea qué surgió a raíz de la preocupación sobre el orígen y uso de diferentes tipos de cosméticos usados sobre nuestro cuerpo, es una alternativa diferente a la línea de cosmética tradicional e industrializada. La primicia fué inicializada gracias al trabajo de una jóven, Angie Herrera ingeniera química hizo posible el desarrollo de este proyecto con sus conocimientos, desarrollando la idea a comienzos del 2017 y avanzando poco a poco desde su entonces; a día de hoy contando con un punto de fábrica/producción, donde elaboran todos sus productos.</p>
                        <p>Tipo de Proyecto: Front-end, unipersonal.</p>
                        <div>
                            <img src={figma} className='modal-icon' alt="Figma" />
                            <img src={html} className='modal-icon' alt="HTML" />
                            <img src={css} className='modal-icon' alt="CSS" />
                            <img src={javascript} className='modal-icon' alt="JavaScript" />
                            <img src={react} className='modal-icon' alt="React" />
                            <img src={redux} className='modal-icon' alt="Redux" />
                        </div>
                        <div>
                            <a href="https://formula2-vie.vercel.app/" target='_blank' className='modal-button'>Deploy</a>
                            <a href="https://github.com/yeray004/Formula2Vie.git" target='_blank' className='modal-button'>GitHub</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Modal1