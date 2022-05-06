import PropTypes from "prop-types";

function EstablismentCard({ id, name, type }) {
  <div key={id}>
    <div>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  </div>;
}

EstablismentCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default EstablismentCard;
