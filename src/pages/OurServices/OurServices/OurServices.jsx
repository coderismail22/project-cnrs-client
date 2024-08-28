import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const OurServices = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Our Services"}
        bgImage={"/assets/hero-img.jpg"}
      />
      <ServiceDetails />
    </div>
  );
};

export default OurServices;
