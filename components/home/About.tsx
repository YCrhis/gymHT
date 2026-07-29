import Image from "next/image";
import { ArrowUpRight, Flame } from "lucide-react";
import UIButton from "../UI/UIButton";

const About = () => {
  return (
    <section className="py-28">
      <div className=" mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative h-[650px] overflow-hidden rounded-3xl group">
            <Image
              src="/images/banner.webp"
              alt="Gym Trainers"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div>

            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <Flame size={18} className="text-main" />
              <span className="font-semibold">
                Your Fitness Journey Starts Here
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
              Building Strength,
              <br />
              One Rep at a Time.
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-lg leading-8 mb-10">
              We're more than just a gym, we're a community dedicated to helping
              you reach your full potential. With expert trainers,
              world-class equipment and personalized programs, every member gets
              the support they deserve to succeed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mb-10">

              <div className="rounded-3xl bg-second p-8">
                <h3 className="text-6xl font-light mb-4">
                  10<span className="text-main">+</span>
                </h3>

                <p className="text-zinc-400">
                  Years of Transforming Lives Through Fitness
                </p>
              </div>

              <div className="rounded-3xl bg-second p-8">
                <h3 className="text-6xl font-light mb-4">
                  550<span className="text-main">+</span>
                </h3>

                <p className="text-zinc-400">
                  Members Stronger, Healthier and Growing
                </p>
              </div>

            </div>

            <UIButton>
              Learn More About Us
              <ArrowUpRight size={18} />
            </UIButton>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;