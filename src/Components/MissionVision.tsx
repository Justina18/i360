import { ChevronRight } from 'lucide-react';
import { missionItems, visionItems } from '../data/content';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section  className="py-16 px-4 sm:px-6 lg:px-8">
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
        <h3 className="text-[#a3a6ae]">Empowering Children,</h3>
        <h3 className="text-[#0f1728] mt-[-8px] md:mt-0 text-center md:text-left">
          Creating Futures
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
          src="/earth-globe.png"
          alt=""
          className="absolute w-[140px] hidden xl:block right-[300px] rotate-[-43deg]"
        />

      </motion.div>
      <p className="text-gray-600 text-[18px] text-center mb-16 max-w-3xl mx-auto">
        We believe every child deserves access to quality opportunities to reach their full potential
      </p>

      <div className="max-w-7xl mx-auto">

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-lime-100 rounded-3xl transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=600&fit=crop" alt="Children studying" className="relative rounded-3xl w-full h-96 object-cover shadow-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Mission
              <ChevronRight className="w-6 h-6 text-#C2FF660" />
            </h3>
            <div className="space-y-4">
              {missionItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-#C2FF66 rounded-xl">
                    <div className="text-#C2FF660 mt-1"><Icon className="w-6 h-6" /></div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Vision
              <ChevronRight className="w-6 h-6 text-#C2FF660" />
            </h3>
            <div className="space-y-4">
              {visionItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-#C2FF66 rounded-xl">
                    <div className="text-#C2FF660 mt-1"><Icon className="w-6 h-6" /></div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-lime-100 rounded-3xl transform -rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop" alt="Teacher and student" className="relative rounded-3xl w-full h-96 object-cover shadow-xl" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default MissionVision
