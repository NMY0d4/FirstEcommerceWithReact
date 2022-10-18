import "./category-item.styles.scss";

import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ title, imageUrl }) => {
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <Link className="category-body-container" to={`shop/${title}`}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Link>
        </div>
    );
};

export default CategoryItem;
