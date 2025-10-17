import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroComponent from '../components/HeroComponent'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer'
import Certification from '../components/Certification'

const Home = () => {
  return (
    <div className='bg-background text-foreground overflow-x-hidden'>
    

      {/* bg effects */}
      <StarBackground />
       {/* Navbar */}
      <Navbar />

      {/* hero section */}
      <main>
        <HeroComponent />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
{/* certifications and educations */}
<Certification />
        <ContactSection />


        {/* footer section */}
        <Footer />
      </main>
    </div>
  )
}

export default Home