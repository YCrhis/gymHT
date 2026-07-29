import { motion, Variants } from "framer-motion";
import { Bot, Flame } from "lucide-react";
import IconContainer from "../containers/IconContainer";
import CardTrust from "../generics/CardTrust";

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

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Banner = () => {
  const headH1 =
    "md:text-7xl text-3xl md:text-left text-center font-black mb-5";

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url('/images/banner.webp')
        `,
      }}
    >
      <div className="w-[80%] h-full m-auto flex flex-col justify-center">
        {/* Main content */}
        <div className="flex items-center">
          <motion.div
            className="md:w-[50%]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 flex md:justify-start justify-center gap-1 items-center"
            >
              <Flame className="text-main" />
              <h5 className="md:text-xl font-semibold">Stronger every day</h5>
            </motion.div>

            <motion.h2 variants={fadeUp} className={headH1}>
              Transform Your Body.
            </motion.h2>

            <motion.h2 variants={fadeUp} className={headH1}>
              Elevate Your Life.
            </motion.h2>

            <motion.p variants={fadeUp} className="md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem doloremque, laboriosam voluptatibus eaque molestias
              repellendus deserunt adipisci aspernatur eligendi necessitatibus.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex justify-between items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="pb-10 flex md:flex-row flex-col items-center gap-4 m-auto md:m-0"
          >
            <h6 className="md:text-2xl md:text-left text-center font-semibold mr-4">
              Follow Us:
            </h6>

            <div className="flex gap-2">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    y: -6,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <IconContainer>
                    <Bot className="text-main" />
                  </IconContainer>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="absolute right-[7%] bottom-[7%] md:block hidden"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CardTrust />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
