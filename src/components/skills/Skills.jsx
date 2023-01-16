import './Skills.css'

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
                                <li>HTML/CSS<img src="" alt="icon" className="skills-icon" /></li>
                                <li>JavaScript<img src="" alt="icon" className="skills-icon" /></li>
                                <li>React<img src="" alt="icon" className="skills-icon" /></li>
                                <li>Bootstrap<img src="" alt="icon" className="skills-icon" /></li>
                                <li>Bash<img src="" alt="icon" className="skills-icon" /></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Backend😶‍🌫️</h4>
                            <ul>
                                <li>MySQL<img src="" alt="icon" className="skills-icon" /></li>
                                <li>MongoDB<img src="" alt="icon" className="skills-icon" /></li>
                                <li>Postman<img src="" alt="icon" className="skills-icon" /></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Herramientas🛠️</h4>
                            <ul>
                                <li>GitHub<img src="" alt="icon" className="skills-icon" /></li>
                                <li>VS Code<img src="" alt="icon" className="skills-icon" /></li>
                                <li>Figma<img src="" alt="icon" className="skills-icon" /></li>
                                <li>Trello<img src="" alt="icon" className="skills-icon" /></li>
                                <li>Canva<img src="" alt="icon" className="skills-icon" /></li>
                                <li>DaVinci Resolve<img src="" alt="icon" className="skills-icon" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="blur-container">
                    <h3>Estudios</h3>
                    <div>
                        <div>
                            <h4>🎓</h4>
                            <ul>
                                <li>Educamas - Simplone.co / Prográmate Academy - FullStack web Developer (2023)</li>
                                <li>CUN (Corporación Unificada Nacional de Educación Superior) - Técnico Profesional en Procesos Administrativos (2021)</li>
                                <li>Colegio Santa Luisa - Bachillerato (2021)</li>
                            </ul>
                        </div>
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
                <div className='bckg-fade'></div>
            </section>
        </>
    )
}

export default Skills