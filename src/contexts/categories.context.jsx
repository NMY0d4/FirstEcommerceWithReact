// import { createContext, useEffect, useReducer } from "react";

// import {
//     /*addCollectionAndDocuments*/ getCategoriesAndDocuments,
// } from "../utils/firebase/firebase.utils";
// import { createAction } from "../utils/reducer/reducer.utils";

// // import SHOP_DATA from "../shop-data";

// export const CategoriesContext = createContext({
//     categoriesMap: {},
// });

// const INITIAL_STATE = {
//     categoriesMap: {},
// };

// const CATEGORIES_ACTION_TYPE = {
//     SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
// };

// const categoryReducer = (state, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
//             return {
//                 ...state,
//                 categoriesMap: payload,
//             };

//         default:
//             throw new Error(`Unhandled type ${type} in cartReducer`);
//     }
// };

// export const CategoriesProvider = ({ children }) => {
//     // const [categoriesMap, setCategoriesMap] = useState({});

//     /////////////////////////// USEREDUCER
//     const [{ categoriesMap }, dispatch] = useReducer(
//         categoryReducer,
//         INITIAL_STATE
//     );

//     useEffect(() => {
//         const getCategoriesMap = async () => {
//             const categoriesMap = await getCategoriesAndDocuments();
//             dispatch(
//                 createAction(
//                     CATEGORIES_ACTION_TYPE.SET_CATEGORY_MAP,
//                     categoriesMap
//                 )
//             );
//         };
//         getCategoriesMap();
//     }, []);

//     const value = { categoriesMap };
//     return (
//         <CategoriesContext.Provider value={value}>
//             {children}
//         </CategoriesContext.Provider>
//     );
// };
