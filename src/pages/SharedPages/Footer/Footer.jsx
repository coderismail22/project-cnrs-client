const Footer = () => {
  return (
    <div className="p-10 md:p-15 lg:p-20">
      <div className="lg:flex gap-10 justify-between">
        <div className="max-w-[1100px] mb-10">
          <h1 className="font-bold text-xl">
            Center for Natural Resource Studies (CNRS)
          </h1>
          <div>
            <p>
              <img
                src="/src/assets/cnrs.png"
                alt="CNRS Logo"
                className="float-left w-16 h-16 mr-4"
              />
            </p>
            <p>
              CNRS is one of the most recognized pro-environmental national NGOs
              in Bangladesh. It was conceptualized in 1993, from Bangladesh
              Flood Action Plan (FAP16) Environmental Study; and the formal
              journey started in 1994. Since formation, CNRS has been active in
              this field and has drawn attention of relevant local, national and
              international actors including government and funding agencies
              through demonstrating innovations in its approaches and producing
              tangible learning outcomes. On behalf of its General Committee, an
              Executive Committee (EC) governs CNRS. CNRS aims to join with
              others in influencing the national development strategy towards
              directions that support sustainable environment in Bangladesh.
            </p>
          </div>
        </div>
        <div className="min-w-56">
          <h1 className="font-bold">Our Office Address:</h1>
          <p>
            House 13, Level 4-6, <br />
            Road 17, Block D, Banani <br />
            Dhaka 1213, Bangladesh <br />
          </p>
          <p className="mt-10">Tel: 880-2-222274127-8</p>
        </div>
      </div>
      <h1 className="flex-1 mt-5">Copyright © 2024 CNRS | Developed by CNRS</h1>
    </div>
  );
};

export default Footer;
