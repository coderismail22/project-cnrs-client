const CardWithBigImage = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 justify-center items-center  md:flex-row md:col-span-2 p-5">
      {/* Image */}
      <div className="col-span-1">
        <img
          src="/src/assets/birds.jpg"
          alt="birds"
          className="w-[1000px] h-[500px] object-cover object-center"
        />
      </div>

      <div className="col-span-1 bg-slate-100 md:bg-white rounded-md p-5 text-center md:text-left ">
        {/* Text */}
        <h1 className="font-oswald font-extrabold text-[#2C5B1A] text-3xl  mb-3">
          Environment and Climate Change
        </h1>
        <p className="font-lato text-[14px] md:text-[15px] text-[#7a7f84] mb-3 md:max-w-96">
          The &quot;Environment and Climate Change&quot; sector program focuses
          on enhancing resilience by co-creating knowledge and emphasizing
          sustainable resource utilization. It prioritizes themes such as
          Climate Change, Biodiversity, Waste Management, Water Resource
          Management, the Blue Economy, and Green Growth.
        </p>
        <a href="/findoutmore" className="font-bold hover:underline">
          Find out more
        </a>
        {/* Link: Find Out More */}
      </div>
    </div>
  );
};

export default CardWithBigImage;
