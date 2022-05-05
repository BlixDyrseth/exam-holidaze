import PropTypes from "prop-types";

export default function Header({ children }) {
  return <h1>{children}</h1>;
}

Header.propTypes = {
  children: PropTypes.string,
};
