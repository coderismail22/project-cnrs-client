import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import Coordinator from "../Coordinator/Coordinator";
import JobCircular from "../JobCircular/JobCircular";
import UpperCards from "../UpperCards/UpperCards";

const JoinUs = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Join Us"}
        bgImage={"/assets/hero-img.jpg"}
      />
      <div className="lg:w-9/12 mx-auto">
        <UpperCards />
        <JobCircular />
        <Coordinator />
      </div>
    </div>
  );
};

export default JoinUs;
