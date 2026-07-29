"use client";

import { Menu } from "lucide-react";
import UIButtonOptions from "../UI/UIButtonOptions";

const optionsHeader = [
  { id: 1, name: "Explore Our Services", link: "/" },
  { id: 2, name: "Get Started Today", link: "/" },
  { id: 3, name: "See Our Plans", link: "/" },
];

const subOptions = [
  { id: 1, name: "Log In", action: () => {} },
  { id: 2, name: "Sign In", action: () => {} },
];

const HeaderApp = () => {
  return (
    <header className="py-5 fixed top-0 left-0 right-0 m-auto w-[80%] z-50">
      <div className="flex w-full items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img className="w-12 rounded-md" src={"/images/logo.jfif"} />
          <h3 className="font-bold text-xl">JIMAPP</h3>
        </div>
        {/* OPTIONS */}
        <div className="flex items-center gap-5">
          <div className="items-center gap-7 rounded-2xl bg-second/60 py-5 px-9 backdrop-blur-2xl opacity-80 md:flex hidden">
            {optionsHeader.map((o) => (
              <a href={o.link} key={o.id} className="font-semibold">
                {o.name}
              </a>
            ))}
          </div>
          <UIButtonOptions options={subOptions}>
            <Menu />
          </UIButtonOptions>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
