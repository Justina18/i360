import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TestimonialCarouselDesktop = () => {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      image: "https://framerusercontent.com/images/jCl7IxnOEN5iV2G3osyfKLdVdoU.jpg?scale-down-to=512",
      quote: "We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements.",
      name: "Sarah Johnson",
      title: "Small Business Owner, Sarah's Boutique",
      bgColor: "bg-white"
    },
    {
      image: "https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=512",
      quote: "As a fast-growing startup, we needed an efficient way to find skilled professionals from various regions. This AI tool exceeded our expectations.",
      name: "Luke Skywalker",
      title: "Digital Manager @ ABC Inc.",
      bgColor: "bg-[#dffab7]"
    },
    {
      image: "https://framerusercontent.com/images/H14E8S7hJnIxSEJdJ1uxSIdkr8E.jpg?scale-down-to=512",
      quote: "The platform's emphasis on diversity and inclusion impressed me, helping us create a more inclusive workforce.",
      name: "Majin Bu",
      title: "HR Manager @ Foster Partners",
      bgColor: "bg-white"
    }
  ];

  const totalWidth = testimonials.length * 1040; // 1000px card + 40px gap

  useEffect(() => {
    if (!isPaused) {
      const animate = async () => {
        await controls.start({
          x: [`68px`, `-${totalWidth - 1040}px`],
          transition: {
            duration: testimonials.length * 5, // 5 seconds per testimonial
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      };
      animate();
    } else {
      controls.stop();
    }
  }, [isPaused, controls, totalWidth, testimonials.length]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-start pl-[68px] w-full overflow-hidden relative h-[467px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={controls}
        className="flex gap-10 absolute left-[68px]"
      >
        {/* Render testimonials twice for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-row gap-[40px] items-center justify-center ${testimonial.bgColor} p-[40px] ${testimonial.bgColor === 'bg-[#dffab7]' ? 'py-0' : ''} rounded-[16px] w-[1000px] relative ${testimonial.bgColor === 'bg-[#dffab7]' ? 'max-h-[440px]' : ''}`}
          >
            <img
              src={testimonial.image}
              alt=""
              className="rounded-[16px] w-[496px] h-[360px] object-cover"
            />

            <img
              src="https://framerusercontent.com/images/WnkIoa1XyN6AiA7NvBYZZ7JIRC4.png"
              alt=""
              className="absolute top-[20px] w-[49px] left-[508px] rotate-[-20deg]"
            />

            <div className="flex flex-col items-start justify-between w-full gap-6">
              <h4 className="text-[32px] leading-[38.4px] tracking-[-1px] text-[#050505] w-full poppins-medium">
                "{testimonial.quote}"
              </h4>

              <div className="flex flex-col gap-1">
                <h5 className="text-[18px] leading-[28px] text-[#0f1728] font-semibold">
                  {testimonial.name}
                </h5>
                <p className="leading-[24px] text-[#475466]">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCarouselDesktop;