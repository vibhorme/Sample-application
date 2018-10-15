import React from "react";
import PropTypes from "prop-types";

import magnifying_glass from "../../assets/images/magnifying_glass.png";

import "./search.scss";

const Search = ({ className, placeholder }) => {
    return (
        <div className="dt-search-bar">
            <img
                src={magnifying_glass}
                alt=""
                width="16"
                height="16"
                className="dt-search-bar-icon-position"
            />
            <input
                type="text"
                placeholder={placeholder ? placeholder : "Search"}
                className="dt-search-bar-input"
            />
        </div>
    );
};

Search.propTypes = {
    className: PropTypes.string,
};

export default Search;
