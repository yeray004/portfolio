import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Works from './components/works/Works'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main className='containter-main'>
        <NavBar/>
        <Home />
        <About />
        <Works />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
