import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import debounce from 'lodash.debounce';

const descriptions = ['Web Developer', 'React Enthusiast', 'Open Source Contributor', 'UI/UX Designer'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state
  const [index, setIndex] = useState(0);
  const requestRef = useRef(); // To store the animation frame reference
  const previousTimeRef = useRef(); // To store the previous timestamp
  const scrollTargetRef = useRef(null); // To store the target section to scroll to

  // Function to cycle through descriptions using requestAnimationFrame
  const cycleDescriptions = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Change the description every 3000ms (3 seconds)
      if (deltaTime >= 3000) {
        setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        previousTimeRef.current = time; // Reset the time reference
      }
    } else {
      previousTimeRef.current = time; // Store the initial time
    }

    // Request the next frame
    requestRef.current = requestAnimationFrame(cycleDescriptions);
  };

  useEffect(() => {
    // Start cycling descriptions
    requestRef.current = requestAnimationFrame(cycleDescriptions);

    // Cleanup animation frame on component unmount
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Close the mobile menu if the screen is resized above medium
  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close the mobile menu when screen size exceeds md (768px)
      }
    }, 250); // Debounce resize events

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    };
  }, []);

  // Handle scrolling after the menu is closed
  useEffect(() => {
    if (!menuOpen && scrollTargetRef.current) {
      // Using requestAnimationFrame to ensure smooth scrolling after the DOM update
      requestAnimationFrame(() => {
        const section = document.getElementById(scrollTargetRef.current);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        scrollTargetRef.current = null; // Reset after scrolling
      });
    }
  }, [menuOpen]);

  const buttonClass = 'fancy relative py-3 px-4 bg-[#EB6335] hover:bg-[#D8532F] text-[#EB6335] hover:text-[#D8532F] font-medium text-md rounded-lg overflow-hidden';

  // Function to handle scrolling to sections and close mobile menu
  const scrollToSection = (sectionId) => {
    // Set the section to scroll to
    scrollTargetRef.current = sectionId;

    // Perform the scrolling immediately
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the mobile menu if it is open
    if (menuOpen === true) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 border-b-2 border-[#DBDBDB] bg-[#E5E5E5]">
      <div className="container mx-auto grid grid-cols-12 py-4">
        <div className="col-span-12 flex flex-row justify-between items-center px-7 md:px-[100px]">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0 });
            }}>
            <div className="flex flex-col">
              <div className="text-lg font-medium">Sean Ryan</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index} // key is the index, so Framer Motion knows when to animate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xs text-gray-500">
                  {descriptions[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
          {/* Hamburger Menu for Medium and Smaller Screens */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="mobile-menu">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Links and Button for Large Screens */}
          <div className="hidden md:flex space-x-5 items-center">
            <a href="#work" className="hover:text-[#EB6335]" onClick={() => scrollToSection('work')}>
              Work
            </a>
            <a href="#about" className="hover:text-[#EB6335]" onClick={() => scrollToSection('about')}>
              About
            </a>
            <a href="#faq" className="hover:text-[#EB6335]" onClick={() => scrollToSection('faq')}>
              FAQ
            </a>
            <button onClick={() => scrollToSection('contact')} className={buttonClass}>
              <span className="fancy absolute inset-0"></span>
              <span className="relative z-10">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-y-auto max-h-screen">
            <div className="flex flex-col items-center space-y-8 p-4">
              <a href="#work" className="hover:text-[#EB6335]" onClick={() => scrollToSection('work')}>
                Work
              </a>
              <a href="#about" className="hover:text-[#EB6335]" onClick={() => scrollToSection('about')}>
                About
              </a>
              <a href="#faq" className="hover:text-[#EB6335]" onClick={() => scrollToSection('faq')}>
                FAQ
              </a>
              <button
                onClick={() => scrollToSection('contact')} // Trigger smooth scroll
                className={buttonClass} // Maintain button styling
              >
                <span className="fancy absolute inset-0"></span>
                <span className="relative z-10">Let's Connect</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
