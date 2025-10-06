import { useState } from "react";
import { motion } from "framer-motion";

// FIX: Change the path to be relative to the deployment root (/). 
// Assets in the public folder must omit the 'public/' prefix in the code.
const CV_FILE_PATH = "/assets/projects/resume.pdf"; 

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Minimal styles for the button, keeping it basic to avoid extra changes
  const buttonClasses = "ml-4 px-3 py-1.5 text-sm font-medium border border-neutral-400 rounded-lg hover:border-white hover:text-white transition-colors";
  
  // Re-used the nav-link styles for the mobile button
  const mobileButtonClasses = "nav-link block py-2 px-4 mx-auto w-fit text-neutral-400 hover:text-white transition-colors";


  // --- Download CV Button Component (Simple) ---
  const DownloadCVButton = ({ classes, onClick = () => {} }) => (
    <a
      href={CV_FILE_PATH} // This now uses the corrected path: /assets/projects/resume.pdf
      download="Ritika_Bashak_CV.pdf" // Added an explicit file name for better user experience
      className={classes}
      onClick={onClick}
      target="_blank" // Open in new tab (good practice for downloads)
      rel="noopener noreferrer"
    >
      Download CV
    </a>
  );
  // ---------------------------------------------


  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ritika Bashak
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            {/* NOTE: You should also check the paths for your menu/close SVGs! 
                If they are in 'public/assets/', the path should be '/assets/menu.svg'. 
                Assuming 'assets/' is directly under public/
            */}
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden sm:flex items-center">
            <Navigation />
            {/* ADDED CV BUTTON FOR DESKTOP */}
            <DownloadCVButton classes={buttonClasses} /> 
          </nav>
        </div>
      </div>
      
      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
            {/* ADDED CV BUTTON FOR MOBILE */}
            <DownloadCVButton 
                classes={mobileButtonClasses} 
                onClick={() => setIsOpen(false)} // Close menu after clicking
            /> 
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
