import './Skills.css'
//IMAGES
import html from '../img/icons/html.png'
import css from '../img/icons/css.png'
import javaScript from '../img/icons/javaScript.png'
import react from '../img/icons/react.png'
import bootstrap from '../img/icons/bootstrap.png'
import bash from '../img/icons/bash.png'
import mysql from '../img/icons/mysql.png'
import mongodb from '../img/icons/mongodb.png'
import postman from '../img/icons/postman.png'
import GitHub from '../img/icons/github.png'
import vsCode from '../img/icons/vsCode.png'
import figma from '../img/icons/figma.png'
import trello from '../img/icons/trello.png'
import canva from '../img/icons/canva.png'
import davinci from '../img/icons/davinci.png'
import nodejs from '../img/icons/nodejs.png'

function Skills() {
    return (
        <>
            <section id='skills' className='component-section skills-bckg'>
                <div className="blur-container">
                    <h3 >Habilidades</h3>
                    <div className='skills-container-1'>
                        <div>
                            <h4>Front-end💻</h4>
                            <ul>
                                <li>HTML/CSS <img src={html} alt="icon" className="skills-icon" /><img src={css} alt="icon" className="skills-icon" /></li>
                                <li>JavaScript <img src={javaScript} alt="icon" className="skills-icon" /></li>
                                <li>React <img src={react} alt="icon" className="skills-icon" /></li>
                                <li>Bootstrap <img src={bootstrap} alt="icon" className="skills-icon" /></li>
                                <li>Bash <img src={bash} alt="icon" className="skills-icon" /></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Backend😶‍🌫️</h4>
                            <ul>
                                <li>Node.js <img src={nodejs} alt="icon" className="skills-icon" /></li>
                                <li>MySQL <img src={mysql} alt="icon" className="skills-icon" /></li>
                                <li>MongoDB <img src={mongodb} alt="icon" className="skills-icon" /></li>
                                <li>Postman <img src={postman} alt="icon" className="skills-icon" /></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Herramientas🛠️</h4>
                            <ul>
                                <li>GitHub <img src={GitHub} alt="icon" className="skills-icon" /></li>
                                <li>VS Code <img src={vsCode} alt="icon" className="skills-icon" /></li>
                                <li>Figma <img src={figma} alt="icon" className="skills-icon" /></li>
                                <li>Trello <img src={trello} alt="icon" className="skills-icon" /></li>
                                <li>Canva <img src={canva} alt="icon" className="skills-icon" /></li>
                                <li>DaVinci Resolve <img src={davinci} alt="icon" className="skills-icon" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="blur-container">
                    <h3>Estudios</h3>
                    <div className='skills-container-2'>
                        <div className='studies-main'>
                            <h4>🎓</h4>
                            <ul>
                                <li>Educamas - Simplone.co / Prográmate Academy - FullStack web Developer (2023)</li>
                                <li>CUN (Corporación Unificada Nacional de Educación Superior) - Técnico Profesional en Procesos Administrativos (2021)</li>
                                <li>Colegio Santa Luisa - Bachillerato (2021)</li>
                            </ul>
                        </div>
                        <div className='studies-sub'>
                            <div>
                                <h4>Idiomas🗣️</h4>
                                <ul>
                                    <li>Español: Nativo</li>
                                    <li>Inglés: B2</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Logros🎉</h4>
                                <ul>
                                    <li>Mejor Promedio Nacional Técnicos PPA prom 2021 (CUN)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bckg-fade'></div>
            </section>
        </>
    )
}

export default Skills