import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Coaching from "@/components/home/Coaching";
import Message from "@/components/home/Message";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="w-[80%] m-auto">
      <Coaching/>
      <Message/>
      <About/>
      </div>
    </div>
  );
}
