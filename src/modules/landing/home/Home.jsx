import Banner from "./Banner/Banner";
import UseHelmet from "../../../hooks/useHelmet";
import FAQ from "../../../pages/faq/FAQ";
import Features from "../../../pages/features/Features";

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
