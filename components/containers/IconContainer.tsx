import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    action?: ()=> void;
}

const IconContainer = ({children, action}:Props) => {
  return (
    <div className="bg-background p-3 rounded-md hover:scale-105 transition-all hover:bg-background/80 cursor-pointer" onClick={action}>{children}</div>
  )
}

export default IconContainer