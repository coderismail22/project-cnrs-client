import WhatWeDoCard1 from "../../../components/WhatWeDoCard1/WhatWeDoCard1";
import WhatWeDoCard2 from "../../../components/WhatWeDoCard2/WhatWeDoCard2";

// card-type-1 imports
import birds from "../../../assets/birds.jpg";
import sugarcaneman from "../../../assets/sugarcane-man.jpg";
import grandma from "../../../assets/vegetable-grandma.jpg";

// card-type-2 imports
import disaster from "../../../assets/whatwedo-disaster.jpg";
import health from "../../../assets/whatwedo-health.png";
import child from "../../../assets/whatwedo-child.jpg";
import institutional from "../../../assets/whatwedo-institution.jpg";
const WhatWeDoCards = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* Card Type 1 [3*3]*/}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-5 p-5">
          <WhatWeDoCard1
            title={"Environment and Climate Change"}
            imageUrl={birds}
            itemLink={
              "https://cnrs.org.bd/natural-resource-management-nrm-environment-and-water/"
            }
          />
          <WhatWeDoCard1
            title={"Food Security and Livelihood (FSL) "}
            imageUrl={sugarcaneman}
            itemLink={"https://cnrs.org.bd/livelihood-and-job-creation/"}
          />
          <WhatWeDoCard1
            title={"Community Development and Governance"}
            imageUrl={grandma}
            itemLink={"https://cnrs.org.bd/food-agriculture-and-nutrition/"}
          />
        </div>

        {/* Card Type 2 [4*4] */}
        <div className="flex flex-col md:flex-row   justify-center items-center gap-5 md:gap-2 p-5">
          <WhatWeDoCard2
            title={"Environment and Climate Change"}
            imageUrl={disaster}
            itemLink={
              "https://cnrs.org.bd/natural-resource-management-nrm-environment-and-water/"
            }
          />
          <WhatWeDoCard2
            title={"Food Security and Livelihood (FSL) "}
            imageUrl={health}
            itemLink={"https://cnrs.org.bd/livelihood-and-job-creation/"}
          />

          <WhatWeDoCard2
            title={"Community Development and Governance"}
            imageUrl={child}
            itemLink={"https://cnrs.org.bd/food-agriculture-and-nutrition/"}
          />
          <WhatWeDoCard2
            title={"Community Development and Governance"}
            imageUrl={institutional}
            itemLink={"https://cnrs.org.bd/food-agriculture-and-nutrition/"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCards;
