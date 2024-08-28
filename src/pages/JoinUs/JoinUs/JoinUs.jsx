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
      <UpperCards />
      <JobCircular />
      <Coordinator />
    </div>
  );
};

export default JoinUs;
