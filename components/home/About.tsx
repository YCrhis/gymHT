import Image from "next/image";
import { ArrowUpRight, Flame } from "lucide-react";
import { motion, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import UIButton from "../UI/UIButton";


const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};


const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};


const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


// Counter animation
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
};


const About = () => {
  return (
    <section className="py-28">
      <div className="mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-162.5 overflow-hidden rounded-3xl group"
          >
            <Image
              src="/images/banner.webp"
              alt="Gym Trainers"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>



          {/* Right Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >


            {/* Badge */}
            <motion.div
              variants={fadeRight}
              className="flex items-center gap-2 mb-5"
            >
              <Flame size={18} className="text-main" />
              <span className="font-semibold">
                Your Fitness Journey Starts Here
              </span>
            </motion.div>



            {/* Title */}
            <motion.h2
              variants={fadeRight}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8"
            >
              Building Strength,
              <br />
              One Rep at a Time.
            </motion.h2>



            {/* Description */}
            <motion.p
              variants={fadeRight}
              className="text-zinc-400 text-lg leading-8 mb-10"
            >
              We're more than just a gym, we're a community dedicated to helping
              you reach your full potential. With expert trainers,
              world-class equipment and personalized programs, every member gets
              the support they deserve to succeed.
            </motion.p>



            {/* Stats */}
            <motion.div
              variants={fadeRight}
              className="grid grid-cols-2 gap-5 mb-10"
            >

              <div className="rounded-3xl bg-second p-8">
                <h3 className="text-6xl font-light mb-4">
                  <Counter value={10}/>
                  <span className="text-main">+</span>
                </h3>

                <p className="text-zinc-400">
                  Years of Transforming Lives Through Fitness
                </p>
              </div>



              <div className="rounded-3xl bg-second p-8">
                <h3 className="text-6xl font-light mb-4">
                  <Counter value={550}/>
                  <span className="text-main">+</span>
                </h3>

                <p className="text-zinc-400">
                  Members Stronger, Healthier and Growing
                </p>
              </div>

            </motion.div>



            <motion.div
              variants={fadeRight}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UIButton>
                Learn More About Us
                <ArrowUpRight size={18} />
              </UIButton>
            </motion.div>


          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;