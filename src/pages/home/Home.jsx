import MainHeader from "../../components/MainHeader";
import Values from "../../components/Values";
import Programs from "../../components/Programs";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Values />
      <Programs />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
