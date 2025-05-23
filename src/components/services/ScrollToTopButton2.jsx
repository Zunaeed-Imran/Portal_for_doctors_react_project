import  { useState, useEffect } from 'react';
import { TbHandTwoFingers } from 'react-icons/tb';

function ScrollToTopButton2() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById('hero').clientHeight;

      // If user scrolls beyond the hero section, show the button
      if (window.scrollY > heroSectionHeight) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // button scroll function.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
      >
      </section>


      {/* Scroll to Top Button */}
      {isButtonVisible && (
        <button
          className='z-50 bottom-5 right-7 fixed bg-blue-500 p-2 rounded-md'
          onClick={scrollToTop}
        >
          <TbHandTwoFingers size={'1.5rem'} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton2;
