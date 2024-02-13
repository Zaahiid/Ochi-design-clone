const About = () => {
  return (
    <div className="w-full py-20 bg-[#cdea68] rounded-t-3xl text-black ">
      <h1 className="font-neue-montreal text-[3.5vw] p-20 leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] mt-20 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <button className="flex items-center gap-10 bg-zinc-900 text-white rounded-full px-10 py-5 mt-10 uppercase">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"/>
            </button>
        </div> 
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#a1b562]"></div>
      </div>
    </div>
  );
};

export default About;
