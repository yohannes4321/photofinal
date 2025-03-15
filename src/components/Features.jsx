import { useState, useRef } from "react";
import { TiLocationArrow, TiMediaPlay } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    setTransformStyle(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`);
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
      {/* Video Background (if `src` exists) */}
      {src && (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Play Button (Only if `src` exists and video isn't playing) */}
      {src && !isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:scale-110"
        >
          <TiMediaPlay size={32} />
        </button>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 py-8 bg-black/50 text-white rounded-xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide special-font">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-lg md:text-xl font-light max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative mx-auto flex items-center gap-2 rounded-full bg-black px-6 py-3 text-lg uppercase tracking-widest text-white/60 transition-all hover:text-white"
          >
            {/* Radial Hover Effect */}
            <div
              className="absolute inset-0 rounded-full opacity-0 transition-all duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(150px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, transparent)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Coming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};


const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      
      <BentoTilt className="border-tilt relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] flex items-center justify-center p-6 text-white">
  <BentoCard
    title={
      
      <span className="font-playfair text-5xl md:text-6xl font-bold">
        Why Should You Listen to Us?
      </span>
    }
    description={
      
      <span className="font-montserrat text-lg md:text-xl leading-relaxed">
        At Hilmstory Media, we believe every moment and every brand has a
        narrative worth sharing. Our team combines years of professional
        experience in videography, photography, and storytelling to deliver
        visuals that captivate and connect. We’ve worked with educational
        institutions, churches, and clients from all walks of life, consistently
        turning their visions into powerful, engaging content. When you work
        with us, you’re not just getting technical expertise—you’re getting a
        dedicated partner who cares about your message, your audience, and your
        results.
      </span>
    }
    isComingSoon
    className="w-full text-center"
  />
</BentoTilt>



      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/654841876153541_wm.mp4"
            title={
              <>
                Sek<b>ate</b> Media   
              </>
            }
            description="
We don’t just press “record”—we craft stories."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
             
            title={
              <>
                What <b>Set Us</b> Apart
              </>
            }
            description="Expertise & Creativity: From small-scale live streams to cinematic short films, our diverse skill set brings fresh ideas and professional execution.   

 

- Authentic Storytelling: We focus on the heart of your story, ensuring your unique message resonates with viewers.   

 

- Proven Track Record: Having served numerous organizations and individuals—from colleges to couples on their big day—we know how to deliver on-time, on-budget, and above expectations.   

 

- Genuine Partnership: We collaborate closely with you from concept to final cut, making your vision our priority. 
"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
             
            title={
              <>
                How can <b>We </b>Help You
              </>
            }
            description="Whether you’re a school looking to boost admissions with a powerful promotional video, a nonprofit seeking to share an impactful testimonial, or an engaged couple wanting every wedding detail captured flawlessly—we’ve got you covered. We offer a range of services designed to amplify your voice and capture your most meaningful moments. "
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="https://res.cloudinary.com/di5zfjqlt/video/upload/v1741961749/photo/zwhhvtkt6n6kwlxe12k3.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="https://res.cloudinary.com/di5zfjqlt/video/upload/v1742013130/photo/j76kb7snz8xmudjnfja5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
