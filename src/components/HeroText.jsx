// HeroText.jsx
const HeroText = ({ isLargeText }) => {
  // Define the Tailwind class based on the prop to control the large Ritika Bashak text
  const textClass = isLargeText 
    ? "text-7xl md:text-8xl lg:text-9xl" // Large sizes for desktop
    : "text-4xl md:text-6xl"; // Default sizes

  return (
    <div 
        // Remove the center alignment for the container itself to match the hero section
        className="flex flex-col w-full items-center md:items-start"
    >
      <p className="text-xl text-neutral-400 mb-2">Hello, I am</p>
      <h1 className={`font-extrabold text-white ${textClass} leading-tight mb-2`}>
        Ritika Bashak
      </h1>
      <h2 className="text-2xl md:text-3xl text-lavender font-medium">
        Full-Stack Developer
      </h2>
    </div>
  );
};

export default HeroText;