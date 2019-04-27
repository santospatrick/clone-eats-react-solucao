import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Place({ id, img, title, category }) {
  return (
    <Link className="place" to={`/${id}`}>
      <div style={{ backgroundImage: `url('/assets/${img}')` }} />
      <h3>{title}</h3>
      <h4>{category}</h4>
    </Link>
  );
}

Place.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Place;
