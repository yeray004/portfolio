import './Skills.css'
import './SkillsAnimation.css'
//IMAGES
import html from '../img/icons/html1.webp'
import css from '../img/icons/css1.webp'
import javaScript from '../img/icons/javascript1.webp'
import react from '../img/icons/react1.webp'
import bootstrap from '../img/icons/bootstrap1.webp'
import bash from '../img/icons/bash1.webp'
import mysql from '../img/icons/mysql1.webp'
import mongodb from '../img/icons/mongodb1.webp'
import postman from '../img/icons/postman1.webp'
import GitHub from '../img/icons/github1.webp'
import vsCode from '../img/icons/vsCode1.webp'
import figma from '../img/icons/figma1.webp'
import trello from '../img/icons/trello1.webp'
import canva from '../img/icons/canva1.webp'
import davinci from '../img/icons/davinci1.webp'
import nodejs from '../img/icons/nodejs1.webp'

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
                                <li>Egg Cooperation - Programación desde Cero Latam (2023)</li>
                                <li>Corporación Unificada Nacional de Educación Superior - Técnico Profesional en Procesos Administrativos (2021)</li>
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