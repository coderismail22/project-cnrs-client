const CardWithBigImage = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row md:col-span-2 p-5">
      {/* Image */}
      <div>
        <img
          src="/src/assets/birds.jpg"
          alt="birds"
          className="w-full h-64 object-cover object-center"
        />
      </div>

      <div>
        {/* Text */}
        <h1>Environment and Climate Change</h1>
        <p>
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
