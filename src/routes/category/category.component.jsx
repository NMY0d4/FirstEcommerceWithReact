import { OneCatContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <OneCatContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </OneCatContainer>
            )}
        </Fragment>
    );
};

export default Category;
