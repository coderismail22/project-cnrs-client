import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import WhatWeDoCards from "../WhatWeDoCards/WhatWeDoCards";
import WhatWeDoDescriptionSection from "../WhatWeDoDescriptionSection/WhatWeDoDescriptionSection";

const WhatWeDo = () => {
  return (
    <div className="bg-[#113418] ">
      <PageTitleWithImage
        pageName={"What We Do"}
        bgImage={"/assets/hero-img.jpg"}
      />
      <WhatWeDoDescriptionSection />
      <WhatWeDoCards />;
    </div>
  );
};

export default WhatWeDo;
