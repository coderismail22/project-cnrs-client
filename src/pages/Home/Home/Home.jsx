import HeroSection from "../HeroSection/HeroSection";
import HomeCards from "../HomeCards/HomeCards";
import Documentaries from "../Documentaries/Documentaries";
import Counter from "../../../components/Counter/Counter";
import Articles from "../Articles/Articles";
import BottomCards from "../BottomCards/BottomCards";
import ExecutiveDirector from "../ExecutiveDirector/ExecutiveDirector";
import MiniCaseStoryCard from "../../../components/MiniCaseStoryCard/MiniCaseStoryCard";
import MiniCaseStoryCards from "../../../components/MiniCaseStoryCards/MiniCaseStoryCards";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeCards />
      <Documentaries />
      <Counter />
      <Articles />
      <BottomCards />
      <ExecutiveDirector />
      <MiniCaseStoryCards />
    </div>
  );
};

export default Home;
