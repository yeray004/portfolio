import './Works.css'
//IMAGES
import logoFormula2Vie from '../img/works/logoFormula2Vie.png'

function Works() {
    return (
        <>
            <section id='works' className='component-section works-bckg'>
                <div class="works-parent">
                    <div class="works-div1">
                        <div className='works-img-logo works-img1'>
                            <div className='works-logo'>
                                <img src={logoFormula2Vie} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Formula2Vie</p>
                    </div>
                    <div class="works-div2">
                        <div className='works-img-logo works-img1'>
                            <div className='works-logo'>
                                <img src={logoFormula2Vie} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Cripto Dashboard</p>
                    </div>
                    <div class="works-div3">
                        <div className='works-img-logo works-img1'>
                            <div className='works-logo'>
                                <img src={logoFormula2Vie} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Whell of Happy Bunny</p>
                    </div>
                    <div class="works-div4">
                        <div className='works-img-logo works-img1'>
                            <div className='works-logo'>
                                <img src={logoFormula2Vie} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>Tetris</p>
                    </div>
                    <div class="works-div5">
                        <div className='works-img-logo works-img1'>
                            <div className='works-logo'>
                                <img src={logoFormula2Vie} alt="Logo de proyecto" className='works-logo' />
                            </div>
                        </div>
                        <p className='works-text'>SabujCha</p>
                    </div>
                </div>
                <h1>Work</h1>
                <div className='bckg-fade'></div>
            </section>
        </>
    )
}

export default Works