// src/modules/landing/home/TourismAndGuides.jsx
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // DaisyUI overrides this
import useFetchData from "../../../hooks/useFetchData";

const TourismAndGuides = () => {
  const { data: packages = [], loading: loadingPackages } = useFetchData(
    "/packages/random",
    { limit: 3 },
  );
  const { data: guides = [], loading: loadingGuides } = useFetchData(
    "/guides/random",
    { limit: 6 },
  );

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Tourism & Travel Guide
      </h2>

      <div role="tablist" className="tabs tabs-bordered justify-center mb-8">
        <a role="tab" className="tab tab-active" aria-selected="true">
          Our Packages
        </a>
        <a role="tab" className="tab">
          Tour Guides
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {loadingPackages ? (
          <span className="loading loading-bars loading-lg col-span-3 mx-auto"></span>
        ) : (
          packages.map((pkg) => (
            <div
              key={pkg._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-base-200"
            >
              <figure>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">{pkg.title}</h3>
                <p className="text-sm text-gray-500">{pkg.tourType}</p>
                <div className="text-xl font-semibold text-primary">
                  ৳ {pkg.price}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    View Package
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="divider"></div>

      <div className="grid md:grid-cols-3 gap-6">
        {loadingGuides ? (
          <span className="loading loading-spinner text-primary col-span-3 mx-auto"></span>
        ) : (
          guides.map((guide) => (
            <div
              key={guide._id}
              className="card bg-gradient-to-br from-base-100 via-neutral to-base-100 shadow-xl border border-primary hover:scale-[1.02] transition-all duration-300 pulse-glow"
            >
              <div className="card-body">
                <h3 className="text-xl font-semibold text-accent">
                  {guide.name}
                </h3>
                <p>{guide.specialty}</p>
                <p className="text-sm text-gray-400">{guide.location}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-sm text-primary">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TourismAndGuides;
