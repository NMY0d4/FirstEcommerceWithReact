import React from "react";
import "./categories-pilot.component.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoriesPilot = ({ categories }) => {
    return (
        <div className="categories-pilot">
            {categories.map(({ title, id, imageUrl }) => (
                <CategoryItem title={title} imageUrl={imageUrl} key={id} />
            ))}
        </div>
    );
};

export default CategoriesPilot;
