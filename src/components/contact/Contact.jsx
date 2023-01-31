import './Contact.css'

function Contact() {
    return (
        <>
            <section id='contact' className='component-section'>
                <h1 className='line-test'>¡Trabajemos juntos!</h1>
                <div className='contact-container'>
                    <div className="contactSeparate">
                        <p>E-mail📧</p>
                        <p className='email'><a href="mailto:yerayguacheta@gmail.com?subject=¡Trabajemos%20juntos!">yerayguacheta@gmail.com</a></p>
                    </div>
                    <div className="contactSeparate">
                        <p>Otras redes📲</p>
                        <p><a target='_blank' href="https://www.linkedin.com/in/yeray-guachet%C3%A1-carre%C3%B1o/">LinkedIn</a></p>
                        <p><a target='_blank' href="https://github.com/yeray004">GitHub</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}
{/* <button>
  <a href="mailto:tu_correo@gmail.com?subject=Asunto%20preestablecido">Enviar correo</a>
</button> */}
export default Contact