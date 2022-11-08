export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("ℹ currentState: ", store.getState());

    next(action);

    console.log("ℹℹ next state: ", store.getState());
};
