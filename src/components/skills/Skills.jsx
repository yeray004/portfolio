import './Skills.css'
import './SkillsAnimation.css'
//IMAGES
import html from '../img/icons/html.webp'
import css from '../img/icons/css.webp'
import javaScript from '../img/icons/javascript.webp'
import react from '../img/icons/react.webp'
import bootstrap from '../img/icons/bootstrap.webp'
import bash from '../img/icons/bash.webp'
import mysql from '../img/icons/mysql.webp'
import mongodb from '../img/icons/mongodb.webp'
import postman from '../img/icons/postman.webp'
import GitHub from '../img/icons/github.webp'
import vsCode from '../img/icons/vsCode.webp'
import figma from '../img/icons/figma.webp'
import trello from '../img/icons/trello.webp'
import canva from '../img/icons/canva.webp'
import davinci from '../img/icons/davinci.webp'
import nodejs from '../img/icons/nodejs.webp'

function Skills() {
    return (
        <>
            <section id='skills' className='component-section skills-bckg'>
                <div className="blur-container" data-aos="zoom-in">
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
                <div className="blur-container" data-aos="zoom-in">
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