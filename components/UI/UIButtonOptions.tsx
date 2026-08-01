"use client";

import { ReactNode, useState } from "react";

interface ActionButton {
    name:string;
    action: ()=> void
}

interface Props {
  children: ReactNode;
  options: ActionButton[];
}


const UIButtonOptions = ({ children, options }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (action: ()=> void) => {
    setOpen(false)
    action();

  }

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="bg-main inline-flex px-4 py-4 rounded-2xl cursor-pointer hover:bg-main/90 text-black transition-all hover:scale-105 relative font-semibold">{children}</div>
      {open && (
        <div className="absolute rounded-2xl bg-background min-w-[200px] mt-4 overflow-hidden">
          {options.map((o) => (
            <div onClick={()=>handleClick(o.action)} key={o.name} className="py-2 px-5 hover:bg-second cursor-pointer transition-all font-semibold">{o.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UIButtonOptions;
