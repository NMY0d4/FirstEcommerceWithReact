import React from "react";

import {
    BackgroundImage,
    CategoryBodyContainer,
    CategoryContainer,
} from "./category-item.styles";

const CategoryItem = ({ categories }) => {
    const { title, imageUrl, route } = categories;
    return (
        <CategoryContainer to={route}>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    );
};

export default CategoryItem;
