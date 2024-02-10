import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((text, index) => (
          <div key={index} className="maskers">
            <div className="w-fit flex">
            {index === 1  && (<div className="w-[9vw] h-[6vw] relative top-[1.5vw] bg-red-500"></div>)}
              <h1 className="uppercase font-founders-grotesk leading-[7vw] tracking-tighter text-[7.5vw] font-medium">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tighter leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border border-zinc-400  text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
