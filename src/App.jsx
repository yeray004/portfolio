import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Works from './components/works/Works'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <main className='containter-main'>
        <section className='component-section'>
          <Home />
        </section>
        <section className='component-section'>
          <About />
        </section>
        <section className='component-section'>
          <Works />
        </section>
        <section className='component-section'>
          <Skills />
        </section>
        <section className='component-section'>
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
