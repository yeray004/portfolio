import './Footer.css'
//IMAGES
import git from './img/GitHub.webp'
import linkedIn from './img/LinkedIn.webp'

function Footer() {
    return (
        <>
            <footer>
                <div className='footer-icon-container'>
                    <a href='https://github.com/yeray004' target='_blank'>
                        <img src={git} alt="GitHub" className='footer-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/yeray-guachet%C3%A1-carre%C3%B1o/' target='_blank'>
                        <img src={linkedIn} alt="LinkedIn" className='footer-icon' />
                    </a>
                </div>
                <hr />
                <p>Yeray Guachetá © 2023</p>
                <hr />
            </footer>
        </>
    )
}

export default Footer