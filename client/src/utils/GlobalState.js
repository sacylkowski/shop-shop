import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

// creating our own functionality to manage state at a global level and make it available to all of our other 
// components through a special <Provider> component
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: "",
    });

    // use this to confirm it works
    console.log(state);
    // we receive two items, state (the most up-to-date version of our global state object) and
    // dispatch (the method we execute to update our state).
    // if we didn't include {...props} nothing would be rendered
    return <Provider value={[state, dispatch]} {...props} />;
};

// our own custom React Hook
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };