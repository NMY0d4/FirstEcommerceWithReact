import React from "react";
import { Link } from "react-router-dom";
import { CategoryContainer } from "./category-item.styles";

const CategoryItem = ({ title, imageUrl }) => {
    return (
        <CategoryContainer>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <Link className="category-body-container" to={`shop/${title}`}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Link>
        </CategoryContainer>
    );
};

export default CategoryItem;
