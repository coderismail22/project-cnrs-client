import CounterForAboutPage from "../../../components/CounterForAboutPage/CounterForAboutPage";
import Profile from "../../../components/Profile/Profile";
import Membership from "../Membership/Membership";
import KeyPartners from "../KeyPartners/KeyPartners";

const About = () => {
  return (
    <div>
      <Profile />
      <CounterForAboutPage />
      <Membership />
      <KeyPartners />
    </div>
  );
};

export default About;
