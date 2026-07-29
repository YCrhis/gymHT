"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const revealText: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

const dividerAnimation: Variants = {
  hidden: {
    scaleX: 0,
  },

  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      delay: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="bg-[#0f150d]"
    >
      <div className="px-6 py-16">
        {/* BIG TEXT */}

        <Link href="/contact" className="group block overflow-hidden">
          <motion.h2
            variants={revealText}
            className="text-center text-[4rem] font-black uppercase tracking-[0.08em] leading-none text-transparent stroke-title transition-colors duration-300 md:text-[6rem] lg:text-[8rem] xl:text-[9rem]"
          >
            GO TO THE GYM NOW
          </motion.h2>
        </Link>

        {/* Divider */}

        <motion.div
          variants={dividerAnimation}
          className="my-10 h-px origin-left bg-white/10"
        />

        {/* Bottom */}

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} KillFat. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="font-semibold text-white">Follow Us:</span>

            <div className="flex items-center gap-4">
              {["facebook", "instagram", "x", "linkedin", "youtube"].map(
                (social, index) => (
                  <motion.div
                    key={social}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Link
                      href="#"
                      className="text-lime-400 transition hover:scale-110 hover:text-white block"
                    >
                      {social === "x" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-[18px] w-[18px] fill-current"
                        >
                          <path d="M18.901 2H22l-6.765 7.733L23.2 22h-6.245l-4.89-7.166L5.8 22H2.7l7.236-8.272L1 2h6.403l4.42 6.61L18.901 2Z" />
                        </svg>
                      ) : null}
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
