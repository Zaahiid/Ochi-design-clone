const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-neue-montreal tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 mt-10">
        <div className="headings absolute bg-red-500 w-20 h-10"></div>
          <div className="cardcontainer w-1/2 h-[75vh]">
            <div className=" card w-full h-full rounded-xl overflow-hidden ">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh] ">
            <div className=" card w-full h-full rounded-xl overflow-hidden ">
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
