import PropTypes from "prop-types";

const SectionHead = ({ icon, title, className }) => {
  return (
    <div className={`section__head ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

SectionHead.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SectionHead;
