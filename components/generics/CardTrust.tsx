import { StarCheck, TrendingUp } from "lucide-react";
import UIButton from "../UI/UIButton";

const images = [
  "/images/users/user-1.webp",
  "/images/users/user-2.webp",
  "/images/users/user-3.webp",
  "/images/users/user-4.webp",
];

const CardTrust = () => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-main/10 px-8 py-8 backdrop-blur-2xl max-w-[450px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <StarCheck className="text-main" />
        <p className="font-semibold text-xl!">Trusted By</p>
      </div>
      {/* body */}
      <div className="flex gap-1 items-center">
        <div className="flex items-center">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              className={`w-15 h-15 rounded-full object-cover border-2 border-white ${
                index !== 0 ? "-ml-4" : ""
              }`}
            />
          ))}
        </div>
        <p className="text-zinc-300 text-[12px]! ml-2">
          100+ Menbers Who Won Life
        </p>
      </div>
      <p className="mt-3">
        Join a community that trains, grows, and achieves together
      </p>

      <UIButton>Start Your New Life <TrendingUp /></UIButton>
    </div>
  );
};

export default CardTrust;
