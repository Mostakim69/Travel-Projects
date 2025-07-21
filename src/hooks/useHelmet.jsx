import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || EduVerse</title>
    </Helmet>
  );
};

export default UseHelmet;
