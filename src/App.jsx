import { Routes, Route } from 'react-router-dom'
import useSmoothScroll from './hooks/useSmoothScroll'
import AmbientBackground from './components/AmbientBackground'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import TechMarquee from './sections/TechMarquee'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Services from './sections/Services'
import WhyHireMe from './sections/WhyHireMe'
import Testimonials from './sections/Testimonials'
import GithubActivity from './sections/GithubActivity'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechMarquee />
      <Experience />
      <Certifications />
      <Services />
      <WhyHireMe />
      <Testimonials />
      <GithubActivity />
      <FAQ />
      <Contact />
    </>
  )
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative">
      <AmbientBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
