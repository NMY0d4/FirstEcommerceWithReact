import React from "react";

import {
    BackgroundImage,
    CategoryBodyContainer,
    CategoryContainer,
} from "./category-item.styles";

const CategoryItem = ({ categories }) => {
    const { title, imageUrl, route } = categories;
    return (
        <CategoryContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer to={route}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    );
};

export default CategoryItem;
