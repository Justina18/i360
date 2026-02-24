import { stats } from "../data/content";
import { motion } from "framer-motion";

const Stats = () => (
    <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">

       
            <div className="w-full flex flex-col gap-[45px] items-center pb-[60px] md:pb-[120px]">
                <div className="w-full flex flex-col items-center gap-[15px] md:w-[850px]">
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
                         className="flex items-center py-2 px-3 bg-[#000] rounded-[11px]"
                       >
                         <h4 className="ibm-plex-mono-semibold text-white text-[12px] leading-[13.2px] text-center tracking-[1.2px]">
                           Our Impact
                         </h4>
                       </motion.div>
                    <motion.h1
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
                        className="w-full sm:w-[669px] poppins-medium text-[40px] leading-[48px] tracking-[-1.2px] md:text-[44px] md:leading-[52.8px] text-center text-[#0f1728] md:w-full"
                    >
                        Creating Lasting Change in Youthful Lives.
                    </motion.h1>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
                    <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    damping: 40,
                                    stiffness: 160,
                                    mass: 1,
                                    delay: 0.4,
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                        className="text-[#355900] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-semi bold md:leading-[80px] tracking-[-3px]"
                        >
                            75%
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    damping: 40,
                                    stiffness: 160,
                                    mass: 1,
                                    delay: 0.5,
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                            className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
                        >
                            of youths we support graduate high school and pursue higher education
                        </motion.p>
                    </div>
                    <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:border-r border-[#B9BED1] md:pr-2.5 xl:pr-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    damping: 40,
                                    stiffness: 160,
                                    mass: 1,
                                    delay: 0.6,
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                        className="text-[#355900] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-semi bold md:leading-[80px] tracking-[-3px]"
                        >
                            4,000+
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    damping: 40,
                                    stiffness: 160,
                                    mass: 1,
                                    delay: 0.7,
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                            className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
                        >
                            youths currently enrolled in our education programs across 12 states in Nigeria.
                        </motion.p>
                    </div>
                    <div className="flex flex-col gap-3 items-center w-full md:w-1/3 xl:w-[445px] md:pr-2.5 xl:pr-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    damping: 40,
                                    stiffness: 160,
                                    mass: 1,
                                    delay: 0.8,
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                        className="text-[#355900] font-medium text-[48px] leading-[48px] md:text-[62px] xl:text-[80px] md:font-semi bold md:leading-[80px] tracking-[-3px]"
                        >
                            78%
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    damping: 40,
                                    stiffness: 160,
                                    mass: 1,
                                    delay: 0.9,
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                            className="text-[18px] leading-[24.3px] md:text-[20px] text-center md:leading-[27px] tracking-[-0.5px]"
                        >
                            improvement in literacy rates among program participants within first year
                        </motion.p>
                    </div>
                </div>
            </div>
    </section>
);

export default Stats;
