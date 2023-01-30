import './Contact.css'

function Contact() {
    return (
        <>
            <section id='contact' className='component-section'>
                <h1 className='line-test'>Contact</h1>
                <div className='contact-container'>
                    <div className="contactSeparate">
                        <p>E-mail📧</p>
                        <p>yerayguacheta@gmail.com</p>
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

export default Contact