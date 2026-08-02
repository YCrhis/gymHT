import {
  Bell,
  Heart,
  Search,
} from "lucide-react";

import IconContainer from "../containers/IconContainer";
import UIInput from "../UI/UIInput";

const HeaderIn = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#111111]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 w-[90%] max-w-7xl items-center justify-between gap-6">

        {/* Logo */}

        <h2 className="text-3xl font-black">
          GYM<span className="text-main">.</span>
        </h2>

        {/* Search */}

        <div className="hidden flex-1 md:block">
          <UIInput
            placeholder="Search exercises..."
          />
        </div>

        {/* Actions */}

        <div className="flex items-center gap-3">

          <IconContainer>
            <Heart className="text-main" />
          </IconContainer>

          <IconContainer>
            <Bell className="text-main" />
          </IconContainer>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main font-bold text-black">
            H
          </div>

        </div>

      </div>

    </header>
  );
};

export default HeaderIn;