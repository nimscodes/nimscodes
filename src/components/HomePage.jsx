import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function HomePage({ isMobile }) {
  return (
    <>
      <Hero isMobile={isMobile} />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default HomePage;
