const HomeCard2 = () => {
  return (
    <div>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-5 p-5">
        <div className="order-1 md:order-2 md:col-span-1 p-5">
          <img
            src="/assets/infographics.jpg"
            alt="birds"
            className="w-[800px] rounded-md"
          />
        </div>
        <div className="md:col-span-1 order-2 md:order-1  bg-slate-100 rounded-md p-5 text-left flex flex-col md:justify-center md:items-center ">
          <div className="w-full p-5 flex flex-col items-center justify-center">
            {/* Text */}
            <h1 className="font-yeseva  text-black text-3xl  mb-5 text-center ">
              Research on Non-Communicable diseases (NCD) in Bangladesh
            </h1>
            <p className="font-lato text-[20px] text-gray-500  mb-8">
              With Infographics
            </p>
            {/* Link: Find Out More */}
            <div className="flex gap-2 items-center justify-center bg-black text-white p-3 w-[200px] text-[18px]">
              <button className="font-serif font-extralight">Read Infographic</button>
            </div>
          </div>
        </div>
        {/* Image */}
      </div>
    </div>
  );
};

export default HomeCard2;
