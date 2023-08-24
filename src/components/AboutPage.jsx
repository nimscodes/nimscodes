import RightHero from './RightHero';

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:py-0 justify-between mt-10 md:mt-0">
      <div className="relative md:w-[48%] flex flex-col justify-end gap-5 md:gap-4 mb-5">
        <div className="absolute w-60 h-60 transform rotate-45 shadow-2xl md:top-[75%] md:left-[40%] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="flex flex-col gap-5 dark:text-gray-400">
          <p>Hello, I{"'"}m <span className='text-gray-400 dark:text-gray-600'>Prince Andrews Nimako</span> </p>
          <p>
            I am a dedicated <span className='text-gold-metallic'>frontend web developer</span> with a wealth of self-taught
            coding experience backed by a rigorous 16-week intensive coding
            Bootcamp, driven by a passion for technology and unyeilding desire
            to craft exceptional digital experiences.
          </p>
          <p>
            Proficient in an array of technologies from HTML to Redux, I
            bring a unique fusion of project management insights from my
            mechanical engineering background and the finesse of a dedicated
            developer. Whether leading teams in production environments or
            collaborating on dynamic web applications, I{"'"}m committed to driving
            results and fostering innovation through collaborative teamwork.
          </p>
        </div>
      </div>
      <RightHero />
    </div>
  );
};

export default AboutPage;
