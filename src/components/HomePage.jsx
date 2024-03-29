import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import AboutPage from './AboutPage';
import PropTypes from 'prop-types'

function HomePage({ isMobile }) {
  return (
    <>
      <Hero isMobile={isMobile} /> 
      <AboutPage />
      <Projects />
      <Contact />
    </>
  );
}

HomePage.propTypes = { 
  isMobile: PropTypes.bool.isRequired,
}

export default HomePage;
