import sabujcha from '../../img/works/SabujCha.png'
import html from '../../img/icons/html.png'
import css from '../../img/icons/css.png'

function Modal5({isOpen, closeModal}) {
    const handleClose = e => e.stopPropagation()
    return (
        <>
            <article className={`modal ${isOpen&&'is-open'}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleClose}>
                    <button className="modal-close" onClick={closeModal}>X</button>
                    <div className='modal-image'>
                        <img src={sabujcha} alt="" />
                    </div>
                    <div>
                        <h4>SabujCha</h4>
                        <p>Primer proyecto elaborando una landing page responsive desde 0, haciendo uso de HTML y CSS vanilla. Por medio de estilos se desarrolló en su totalidad la vista con los recursos brindados, y el requerimientos manejando la motodología SCRUM, respetando el diseño de los mockups, y responsive 100% funcional en todos los dispositivos.</p>
                        <p>Tipo de Proyecto: Front-end, unipersonal.</p>
                        <div>
                            <img src={html} className='modal-icon' alt="HTML" />
                            <img src={css} className='modal-icon' alt="CSS" />
                        </div>
                        <div>
                            <a href="https://yeray004.github.io/SabujCha/" target='_blank' className='modal-button'>Deploy</a>
                            <a href="https://github.com/yeray004/SabujCha.git" target='_blank' className='modal-button'>GitHub</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Modal5