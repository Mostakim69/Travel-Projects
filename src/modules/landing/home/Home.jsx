import UseHelmet from "../../../hooks/useHelmet";
import Banner from "./Bannnerr/Banner";
import Overview from "./Overview/Overview";
import RandomGuides from "./RandomGuides/RandomGuides";
import TourismAndGuides from "./TourismAndGuides";
import Faqs from "../../../pages/faq/FAQ.jsx";
import Stories from "./Overview/Stories/Stories.jsx";
import LiveStats from "./LiveStats/LiveStats.jsx";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import PartnerWithUs from "./PartnerWithUs/PartnerWithUs.jsx";
import HowItWorks from "./HowItWorks/HowItWorks.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import CallToActionFull from "./CallToActionFull/CallToActionFull.jsx";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <Overview />
      <TourismAndGuides />
      <RandomGuides />
      <Stories />
      <LiveStats />
      <Testimonials />
      <PartnerWithUs />
      <HowItWorks />
      <WhyChooseUs />
      <NewsletterSignup />
      <Faqs />
      <CallToActionFull />
    </div>
  );
};

export default Home;
