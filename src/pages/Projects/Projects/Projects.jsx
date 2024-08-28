import ProjectsCards from "../ProjectCards/Projects";
import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";

const Projects = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Projects"}
        bgImage={"/assets/hero-img.jpg"}
      />
      <ProjectsCards />
    </div>
  );
};

export default Projects;
