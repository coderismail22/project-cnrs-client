import WhatWeDoCards from "../WhatWeDoCards/WhatWeDoCards";
import WhatWeDoDescriptionSection from "../WhatWeDoDescriptionSection/WhatWeDoDescriptionSection";

const WhatWeDo = () => {
  return (
    <div className="bg-[#113418]">
      <WhatWeDoDescriptionSection />
      <WhatWeDoCards />;
    </div>
  );
};

export default WhatWeDo;
