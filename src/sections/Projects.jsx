import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
// Removed: import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  // Removed: cursor-following logic
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const springX = useSpring(x, { damping: 10, stiffness: 50 });
  // const springY = useSpring(y, { damping: 10, stiffness: 50 });

  // Removed: mouse move handler
  // const handleMouseMove = (e) => {
  //   x.set(e.clientX + 20);
  //   y.set(e.clientY + 20);
  // };

  const [preview, setPreview] = useState(null);

  return (
    <section
      // Removed: onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work" // Added ID for navigation
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {/* Removed: The <motion.img> preview element */}
    </section>
  );
};

export default Projects;