import { ArrowUpRight, Dumbbell } from "lucide-react";
import UIButton from "../UI/UIButton";

const RegisterSection = () => {
  return (
    <section className="py-9 min-h-125 bg-second flex items-center">
      <div className="w-[80%] m-auto flex items-center md:flex-row flex-col gap-7">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-8">
            <Dumbbell className="text-main" size={32} />
            <h4 className="text-2xl font-semibold">Your fitness Journey Starts Now</h4>
          </div>
          <h3 className="xl:text-7xl text-4xl mb-4 font-semibold">Take the First Step Toward a Stronger You</h3>
        </div>
        <div className="flex-1">
          <p className="mb-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            ducimus quas libero, voluptatibus obcaecati nemo placeat saepe
            laborum, perspiciatis soluta officia esse dolores quaerat quae
            reprehenderit tempora in ipsa nesciunt itaque ullam ipsam. Inventore
            delectus, suscipit mollitia magnam maiores impedit.
          </p>
          <UIButton>
            Get Your Account <ArrowUpRight size={18} />
          </UIButton>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
