import amazon from "/Amazon.png";
import framer from "/Framer.png";
import openai from "/OpenAI.png";
import splice from "/Splice@4x.png";
import spotify from "/Spotify.png";
import tesla from "/Tesla.png";
import { motion } from "framer-motion";

const StartupCarousel = () => {
  const logos = [
    { src: amazon, alt: "Amazon" },
    { src: framer, alt: "Framer" },
    { src: openai, alt: "OpenAI" },
    { src: splice, alt: "Splice" },
    { src: spotify, alt: "Spotify" },
    { src: tesla, alt: "Tesla" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.44, 0, 0.56, 1],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="w-full flex flex-col items-center justify-center gap-4  bottom-[10px] md:bottom-[50px] px-[20px] sm:px-[60px]"
    >
      <h4 className="text-[20px] text-[#68708c] leading-[27px] tracking-[-0.5px]">
        Our sponsors:
      </h4>

      <div className="relative w-full h-[100px] overflow-hidden">
        <div
          className="flex w-full h-full place-items-center m-0 p-[10px] list-none opacity-100 relative"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
          }}
        >
          <motion.ul
            className="flex h-full place-items-center m-0 p-0 list-none gap-[80px] flex-row absolute"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Render logos 3 times for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <li key={index} className="w-[121px] flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="w-[121px]" />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default StartupCarousel;