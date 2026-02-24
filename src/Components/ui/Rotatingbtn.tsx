import React from "react";
import { motion } from "framer-motion";


const TEXT = "A DONATION. A DONATION.";

export const RotatingButton: React.FC = () => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.44, 0, 0, 1],
                },
            }}
            viewport={{
                amount: "some",
                once: true,
            }}
            className="
        group
        relative
        grid
        place-content-center
        w-[72px]
        h-[72px]
        rounded-full
        bg-[#355900]
        text-white
        font-semibold
        overflow-hidden
        transition
        duration-300
        hover:bg-black
        hover:scale-105
      "
        >
            {/* Rotating Text */}
            <p className="text-[10px] absolute inset-0 animate-text-rotation">
                {TEXT.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{ "--index": index } as React.CSSProperties}
                        className="
              absolute
               inset-[5px]
 [transform:rotate(calc(15deg*var(--index)))]
            "
                    >
                        {char}
                    </span>
                ))}
            </p>

            {/* Inner Circle */}
            <div
                className="
          relative
         w-[28px]
h-[28px]
          rounded-full
          bg-white
          text-[#7808d0]
          flex
          items-center
          justify-center
          overflow-hidden
        "
            >
                {/* Icon */}
                <svg
                    viewBox="0 0 14 15"
                    width="12"
                    className="
            transition-transform
            duration-300
            ease-in-out
            group-hover:translate-x-[150%]
            group-hover:-translate-y-[150%]
            group-hover:text-black
          "
                    fill="currentColor"
                >
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                </svg>

                {/* Copy Icon */}
                <svg
                    viewBox="0 0 14 15"
                    width="12"
                    className="
            absolute
            translate-x-[-150%]
            translate-y-[150%]
            transition-transform
            duration-300
            delay-100
            ease-in-out
            group-hover:translate-x-0
            group-hover:translate-y-0
          "
                    fill="currentColor"
                >
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                </svg>
            </div>
        </motion.button>
    );
};
