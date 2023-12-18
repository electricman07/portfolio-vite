import Image from "../assets/images/values_1.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../assets/data1";
import Card from "../UI/Card";
// import { SiOpenaigym } from "react-icons/si";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__top">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>My Values standout from the crowd!</p>
        </div>
        <div className="values__bottom">
          <div className="values__left">
            <div className="values__image">
              <img src={Image} alt="Laptop" />
            </div>
          </div>
          <div className="values__right">
            <div className="values__wrapper">
              {values.map(({ id, icon, title, desc }) => {
                return (
                  <Card className="values__value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
