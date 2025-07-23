// src/modules/landing/home/TourismAndGuides.jsx

import { Link } from "react-router";
import useFetchData from "../../../hooks/useFetchData";

const TourismAndGuides = () => {
  const { data: packages = [], loading } = useFetchData("packages/random");

  console.log(packages, "TourismAndGuides.jsx", 7);
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Our Featured Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {loading ? (
          <span className="loading loading-ring loading-lg col-span-3 mx-auto"></span>
        ) : (
          packages.map((pkg) => (
            <div
              key={pkg._id}
              className="card bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white border border-primary shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] pulse-glow"
            >
              <figure>
                <img
                  src={pkg.gallery?.[0]}
                  alt={pkg.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <p className="text-sm text-gray-300">{pkg.description}</p>
                <div className="flex flex-wrap gap-3 text-sm my-2">
                  <span className="badge badge-accent">{pkg.tripType}</span>
                  <span className="badge badge-secondary">{pkg.days} Days</span>
                  <span className="badge badge-outline text-white border-white">
                    {pkg.location}
                  </span>
                </div>
                <div className="text-lg font-semibold text-secondary">
                  ৳ {pkg.price.toLocaleString()}
                </div>
                <div className="card-actions justify-end mt-2">
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TourismAndGuides;
