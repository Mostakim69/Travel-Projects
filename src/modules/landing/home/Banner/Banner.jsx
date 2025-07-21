import BannerCard from "./BannerCard";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <div className="banner-container xl:gap-16 min-h-[70vh]">
      <BannerImg />
      <BannerCard />
    </div>
  );
};

export default Banner;
