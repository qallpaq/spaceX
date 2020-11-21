import React, {useContext} from 'react';
import {useSelector} from "react-redux";


const SelectorContext = React.createContext();

export const useSelectorContext = () => {
    return useContext(SelectorContext)
}

const SelectorContextProvider = ({children}) => {
    const selectors = {
        currentPage: useSelector(state => state.basic.currentPage)
    }

    return (
        <SelectorContext.Provider value={selectors}>
            {children}
        </SelectorContext.Provider>
    )
};

export default SelectorContextProvider;