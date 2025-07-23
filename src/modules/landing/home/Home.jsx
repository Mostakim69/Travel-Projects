import UseHelmet from "../../../hooks/useHelmet";
import Banner from "./Bannnerr/Banner";
import Overview from "./Overview/Overview";
import RandomGuides from "./RandomGuides/RandomGuides";
import TourismAndGuides from "./TourismAndGuides";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <Overview />
      <TourismAndGuides />
      <RandomGuides />
    </div>
  );
};

export default Home;
