import React from "react";

import CategoryItem from "../category-item/category-item.component";
import { CategoriesPilotStyle } from "./categories-pilot.styles";

const CategoriesPilot = ({ categories }) => {
    return (
        <CategoriesPilotStyle>
            {categories.map(({ title, id, imageUrl }) => (
                <CategoryItem title={title} imageUrl={imageUrl} key={id} />
            ))}
        </CategoriesPilotStyle>
    );
};

export default CategoriesPilot;
