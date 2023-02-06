function Modal1({isOpen, closeModal}) {
    return (
        <>
            <article className={`modal ${isOpen&&'is-open'}`}>
                <div className="modal-container">
                    <button className="modalclose" onClick={closeModal}>X</button>
                    <div>
                        aaa
                    </div>
                    <div>
                        bbb
                    </div>
                </div>
            </article>
        </>
    )
}
export default Modal1