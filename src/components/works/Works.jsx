import './Works.css'
import './modals/Modal.css'
//IMAGES
import logoFormula2Vie from '../img/works/logoFormula2Vie.png'
import logoBitcoin from '../img/works/logoBitcoin.png'
import logoBunny from '../img/works/logoBunny.png'
import logoTetris from '../img/works/logoTetris.png'
import logoSabujCha from '../img/works/logoSabujCha.png'
import { useState } from 'react'
//COMPONENTS
import Modal1 from './modals/Modal1'

/* const [isOpenModal2, openModal2, closeModal2] = useModal(false)
const [isOpenModal3, openModal3, closeModal3] = useModal(false)
const [isOpenModal4, openModal4, closeModal4] = useModal(false)
const [isOpenModal5, openModal5, closeModal5] = useModal(false) */

function Works() {
    
    const useModal = (initialValue = false)=>{
        const [isOpen,setIsOpen] = useState(initialValue)
        const openModal = _=>setIsOpen(true)
        const closeModal = _=>setIsOpen(false)
        return[isOpen, openModal, closeModal]
    }
    
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)

    return (
        <>
            <section id='works' className='component-section'>
                <div className="works-parent">
                    <div className="works-div1">
                            <div className='works-img-logo works-img1'>
                                <div className='works-logo'>
                                    <img src={logoFormula2Vie} alt="Logo de proyecto" className='works-logo' />
                                </div>
                            </div>
                            <p className='works-text'>Formula2Vie</p>
                        <button onClick={openModal1}>a</button>
                    </div>
                    <div className="works-div2">
                        <div className='works-img-logo works-img2'>
                            <div className='works-logo'>
                                <img src={logoBitcoin} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Cripto Dashboard</p>
                    </div>
                    <div className="works-div3">
                        <div className='works-img-logo works-img3'>
                            <div className='works-logo'>
                                <img src={logoBunny} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Whell of Happy Bunny</p>
                    </div>
                    <div className="works-div4">
                        <div className='works-img-logo works-img4'>
                            <div className='works-logo'>
                                <img src={logoTetris} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Tetris</p>
                    </div>
                    <div className="works-div5">
                        <div className='works-img-logo works-img5'>
                            <div className='works-logo'>
                                <img src={logoSabujCha} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>SabujCha</p>
                    </div>
                </div>
                <h1>Work</h1>
                <Modal1 isOpen={isOpenModal1} closeModal={closeModal1}/>
                <div className='bckg-fade'></div>
                <div className='works-bckg'></div>
            </section>
        </>
    )
}

export default Works