import { createContext, useEffect, useReducer } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

// as the actual value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

// export const UserProvider = ({ children }) => {
//     // USE REDUCER
//     const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//     const setCurrentUser = (user) => {
//         dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     };

//     const value = { currentUser, setCurrentUser };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((user) => {
//             if (user) {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//         });
//         return unsubscribe;
//     }, []);

//     return (
//         <UserContext.Provider value={value}>{children}</UserContext.Provider>
//     );
// };
