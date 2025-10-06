// hero.jsx
import HeroText from "../components/HeroText";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    // Determine screen size for responsive styling
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <section 
            // New professional background: dark navy/black with a subtle radial gradient
            className="relative flex min-h-screen items-center text-white bg-midnight overflow-hidden" 
            id="home"
        >
            {/* Subtle background element (optional: remove if you prefer pure black) */}
            <div className="absolute inset-0 bg-radial-at-t from-navy/50 to-midnight"></div>
            
            {/* Main Content Container: Two-Column Layout on Desktop */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto c-space py-16 md:py-0">
                
                {/* Left/Top Column: Hero Text */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-start text-center md:text-left order-2 md:order-1 mt-10 md:mt-0"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* The HeroText component will handle the title and description */}
                    <HeroText isLargeText={true} />
                </motion.div>

                {/* Right/Bottom Column: Professional Image */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* 🚨 IMPORTANT: Replace 'assets/my-image.png' with your actual profile picture path */}
                    <img 
                        src="assets/my-image.png" 
                        alt="Ritika - Full Stack Developer" 
                        // Styling for a professional, slightly elevated look
                        className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-xl shadow-2xl shadow-purple-500/50 transition-transform hover:scale-[1.02] duration-300"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;