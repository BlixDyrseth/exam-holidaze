import PropTypes from "prop-types";

export default function Subheader({ children }) {
  return <h2>{children}</h2>;
}

Subheader.propTypes = {
  children: PropTypes.string,
};
