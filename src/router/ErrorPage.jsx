import { useNavigate, useRouteError } from "react-router";
import { notfound3 } from "../assets/images";
import { CommonFooter, Navbar } from "../modules/shared/Layout";

const Errorpage = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[70vh] flex-col  my-10  ">
        <div className="flex-center flex-col  p-8 sm:p-20 rounded-2xl drop-shadow-2xl space-y-6 bg-gray-200">
          <h1 className="text-red-500 text-2xl text-center">
            {error?.statusText || error?.message}
          </h1>

          <img
            src={notfound3}
            className="max-w-[400px] rounded-2xl drop-shadow-2xl mx-auto"
          />
          <div className="flex gap-6  *:w-full">
            <div onClick={() => navigate("/")} className="flex-1 ">
              <button className="btn btn-block rounded-full">Go Home</button>
            </div>
            <div className="flex-1 " onClick={() => navigate(navigate(-1))}>
              <button className="btn btn-block rounded-full">Go Back</button>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default Errorpage;
