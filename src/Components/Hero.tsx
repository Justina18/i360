import { ChevronRight, ArrowUpRight, Sparkles, Sun } from "lucide-react";
import star from '/star.png'
import { motion } from "framer-motion";


const Hero = () => {

  return (
    <motion.section
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
      id="home" className=" flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Transforming Lives Through<br />Hope and Education
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A non-profit organisation inspiring teens and young adults to grow into their best selves and uplift their communities.
          </p>
          <button className="bg-[#C2FF66] hover:bg-#C2FF660 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center gap-2">
            Get Involved <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr] ">

            <div className="relative rounded-3xl bg-[#E0FFB2]">
              <img
                src="https://res.cloudinary.com/de6dwxq4l/image/upload/v1769492043/girls_z6qgk4.png"
                alt="girls smiling"
                className="h-full w-full rounded-2xl object-cover"
              />

              <span className="absolute -left-2 -top-2 text-2xl">
                <img src="/earth.png" alt="earth" />
              </span>
              <div className="absolute bottom-0 w-full">
                <div className="flex items-center gap-2 rounded-3xl bg-white px-5 py-3 text-sm font-medium shadow">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C7F970]">
                    <Sparkles size={16} />
                  </span>
                  Amplify Their Voice
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-2">
              <img src="/star.png" className="w-6" alt="star" />
              <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-5 py-3 text-sm">
                Help for 8,892 Youths in Nigeria
              </div>

              <div className="rounded-3xl bg-[#E0FFB2] p-6 h-[60%]">
                <p className="text-6xl font-medium">62%</p>
                <p className="mt-3 text-sm text-slate-700">
                    Nigeria grieves the passing of thousands, facing challenges in
                  the wake of catastrophe.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col justify-between h-[80%] rounded-3xl bg-[#E0FFB2] p-8">
                <div className="flex flex-col gap-2 mt-6 text-center items-center">
                  <Sun fill="#111" size={48} className="mb-2" />
                  <h3 className="text-lg font-semibold">Support</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Support a child in need. Make a meaningful connection. Help
                    break the cycle of poverty.
                  </p>
                </div>


              </div>
              <button className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium shadow">
                Find a Child <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <button className="w-full items-center flex text-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-medium">
                  Be a Volunteer <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="flex flex-col rounded-3xl bg-[#E0FFB2] p-4">

                <div className="bg-[#C0F66F]">
                  <img
                    src="https://res.cloudinary.com/de6dwxq4l/image/upload/v1769522413/download__6_-removebg-preview_2_adnj10.png"
                    alt="Helping hands"
                    className="h-48 w-full rounded-2xl object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold">Do Something Great</h4>
                  <p className="mt-2 text-sm text-slate-700">
                    Help others to move and grow and be in a better world.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.section>

  );
};

export default Hero;
