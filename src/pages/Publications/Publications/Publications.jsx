import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import PDF from "../PDF/PDF";

const Publications = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Publications"}
        bgImage={"/assets/hero-img.jpg"}
      />
      <PDF />
    </div>
  );
};

export default Publications;
