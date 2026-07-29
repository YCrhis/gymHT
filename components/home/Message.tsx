import { motion, Variants } from "framer-motion";

interface Props {
  description?: string;
}

const quoteAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
    },
  },
};

const Message = ({ description }: Props) => {
  const desc =
    description ??
    "Strength doesn't come from what you can do, it comes from overcoming what you thought you couldn't.";

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12">
      <motion.h2
        variants={quoteAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="text-center font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        "{desc}"
      </motion.h2>
    </section>
  );
};

export default Message;