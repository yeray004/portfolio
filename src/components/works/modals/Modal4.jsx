import tetris from '../../img/works/tetris.webp'
import figma from '../../img/icons/figma.webp'
import html from '../../img/icons/html.webp'
import css from '../../img/icons/css.webp'
import javascript from '../../img/icons/javaScript.webp'

function Modal4({isOpen, closeModal}) {
    const handleClose = e => e.stopPropagation()
    return (
        <>
            <article className={`modal ${isOpen&&'is-open'}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleClose}>
                    <button className="modal-close" onClick={closeModal}>X</button>
                    <div className='modal-image'>
                        <img src={tetris} alt="" />
                    </div>
                    <div>
                        <h4>Tetris</h4>
                        <p>Elaboración del videojuego Tetris utilizando el lenguaje de programación JavaScript, un primer acercamiento a los diferentes tipos de métodos (más de 20 en este código) que posee y podemos utilizar para manipular el DOM de nuestro documento HTML, así mismo adaptar su funcionalidad y jugabilidad en cualquier tipo de pantalla.</p>
                        <p>Tipo de Proyecto: Front-end, grupal.</p>
                        <div>
                            <img src={figma} className='modal-icon' alt="Figma" />
                            <img src={html} className='modal-icon' alt="HTML" />
                            <img src={css} className='modal-icon' alt="CSS" />
                            <img src={javascript} className='modal-icon' alt="JavaScript" />
                        </div>
                        <div>
                            <a href="https://yeray004.github.io/tetris-game/" target='_blank' className='modal-button'>Deploy</a>
                            <a href="https://github.com/yeray004/tetris-game.git" target='_blank' className='modal-button'>GitHub</a>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default Modal4