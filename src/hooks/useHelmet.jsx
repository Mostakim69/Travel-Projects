import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || DeshGuide</title>
    </Helmet>
  );
};

export default UseHelmet;
