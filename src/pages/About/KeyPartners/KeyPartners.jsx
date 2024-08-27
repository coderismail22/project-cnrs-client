const KeyPartners = () => {
  return (
    <div>
      <div className="max-w-[1480px] p-[50px]  ">
        <div className="grid grid-cols-1 md:grid-cols-2  md:justify-center">
          {/* Image */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/about-cnrs-partners.jpg"
              alt="partners"
              className="md:max-w-[400px] rounded-md"
            />
          </div>
          {/* Text */}

          <div>
            <h1 className="font-palanquin font-bold text-[35px] mb-5">
              Key Partners
            </h1>
            <p className="mb-5">
              <span className="font-bold ">International: </span>
              WorldFish Center (CGIAR Center based in Malaysia), HELVETAS
              Swis-Inter Cooperation (Switzerland), HELVETAS (Germany), ITDG
              (UK), Winrock International (USA), ITAD (UK), Reading University
              (UK), Newcastle University (UK), Oriental Bird Club (UK), MRAG
              (UK), IUCN-Bangladesh,
              <span className="text-[#687279]">
                CARE Bangladesh, Practical Action (UK), Action Aid, NRSP and{" "}
              </span>
              FMSP/Huntings-DFID, GOPA World Wide Consultant, Concern Worldwide,
              Manitoba University-Canada, SCiBD, HKI, iDE, ICDDRB, GIZ, NVF,
              DELTARES, Sinopec International Petrolium Service Corporation,
              Christian Aid, NIPPON KOEI CO. LTD., IC NET Limited, ICCCAD.
            </p>
            <p>
              <span className="font-bold">National: </span>
              MoEF, MoFL, MoFD, WARPO, BWDB, DoF, DoE, LGED, DPHE, Disaster
              Management Bureau, BRAC, PROSHIKA, CARITAS, Concern World Wide,
              Channel I, Dhaka University, Bangladesh Agriculture University,
              Rajshahi University, BARI, BRRI, DAE, BARC, BRAC University, North
              South University, CEGIS and many other government agencies and
              NGOs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPartners;
