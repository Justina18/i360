import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import TestimonialCarouselDesktop from './testimonial-carousel-desktop'
import TestimonialCarouselMobile from './testimonial-carousel-mobile'

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col mt-24 items-center gap-[80px]">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="text-[40px] leading-[42px] tracking-[-1.6px] md:text-[56px] md:leading-[56px] md:tracking-[-2px] flex flex-col items-center w-full poppins-medium relative"
      >  
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 40,
            stiffness: 150,
            mass: 1,
            delay: 0.2,
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="flex items-center py-2 px-3 mb-4 bg-[#000] rounded-[11px]"
      >
          <h4 className="ibm-plex-mono-semibold text-white text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
            Testimonials
          </h4>
        </motion.div>
        <h3 className="text-[#a3a6ae]">Real stories.</h3>
        <h3 className="text-[#0f1728] mt-[-8px] md:mt-0 text-center md:text-left">
          Don't take our word for it.
        </h3>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          src="https://framerusercontent.com/images/VL43VhHmWPuTeXXKbTYxdaAoyU.png?scale-down-to=512"
          alt=""
          className="absolute w-[152px] hidden xl:block top-[-30.5px] right-[223px] rotate-[-43deg]"
        />
      </motion.div>
      <div className="flex md:hidden w-full items-center">
        <TestimonialCarouselMobile />
      </div>
      <div className="hidden md:flex w-full items-center">
        <TestimonialCarouselDesktop />
      </div>
    </div>
  )
}

export default Testimonials