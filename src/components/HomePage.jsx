import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import PropTypes from 'prop-types'

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

HomePage.propTypes = { 
  isMobile: PropTypes.bool.isRequired,
}

export default HomePage;
