import { Bot, Flame } from "lucide-react";
import IconContainer from "../containers/IconContainer";
import CardTrust from "../generics/CardTrust";

const Banner = () => {
  const headH1 = "md:text-7xl text-3xl md:text-left text-center font-black mb-5";
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
        <div className="flex items-center bg-pink">
          <div className="md:w-[50%]">
            <div className="mb-4 flex md:justify-start justify-center gap-1 items-center">
               <Flame className="text-main"/>
               <h5 className="md:text-xl font-semibold ">Stronger every day</h5>
            </div>
            
            <h2 className={headH1}>Transform Your Body.</h2>
            <h2 className={headH1}>Elevate Your Life.</h2>
            <p className="md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex justify-between items-center">
          <div className="pb-10 flex md:flex-row flex-col items-center gap-4 m-auto md:m-0">
            <h6 className="md:text-2xl md:text-left text-center font-semibold mr-4">Follow Us:</h6>
            <div className="flex gap-2">

            <IconContainer>
              <Bot className="text-main" />
            </IconContainer>

            <IconContainer>
              <Bot className="text-main" />
            </IconContainer>

            <IconContainer>
              <Bot className="text-main" />
            </IconContainer>
             <IconContainer>
              <Bot className="text-main" />
            </IconContainer>
          </div>
          </div>
          <div className="absolute right-[7%] bottom-[7%] md:block hidden">
            <CardTrust />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
