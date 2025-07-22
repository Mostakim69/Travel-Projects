// import Banner from "./Banner/Banner";
import UseHelmet from "../../../hooks/useHelmet";
import FAQ from "../../../pages/faq/FAQ";
import Features from "../../../pages/features/Features";
import Banner from "./Bannnerr/Banner";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <FAQ />
      <Features />
    </div>
  );
};

export default Home;
