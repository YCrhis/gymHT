"use client";

import { ArrowUpRight, Dumbbell } from "lucide-react";
import { motion, Variants } from "framer-motion";
import UIButton from "../UI/UIButton";

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
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
    x: 50,
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

const RegisterSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="py-9 min-h-125 bg-second flex items-center"
    >
      <div className="w-[80%] m-auto flex items-center md:flex-row flex-col gap-7">
        {/* LEFT */}

        <motion.div variants={fadeLeft} className="flex-1">
          <motion.div className="flex items-center gap-2 mb-8">
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Dumbbell className="text-main" size={32} />
            </motion.div>

            <h4 className="text-2xl font-semibold">
              Your fitness Journey Starts Now
            </h4>
          </motion.div>

          <h3 className="xl:text-7xl text-4xl mb-4 font-semibold">
            Take the First Step Toward a Stronger You
          </h3>
        </motion.div>

        {/* RIGHT */}

        <motion.div variants={fadeRight} className="flex-1">
          <p className="mb-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            ducimus quas libero, voluptatibus obcaecati nemo placeat saepe
            laborum, perspiciatis soluta officia esse dolores quaerat quae
            reprehenderit tempora in ipsa nesciunt itaque ullam ipsam. Inventore
            delectus, suscipit mollitia magnam maiores impedit.
          </p>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <UIButton>
              Get Your Account
              <ArrowUpRight size={18} />
            </UIButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RegisterSection;
