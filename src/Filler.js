import React from "react";
import PropTypes from "prop-types";

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

Filler.propTypes = {};

export default Filler;
