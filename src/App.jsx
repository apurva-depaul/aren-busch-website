import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  )
}
