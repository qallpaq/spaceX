import React, {useContext} from "react";
import SpaceServer from "../../services/space-server";


const SpaceContext = React.createContext();

export const useSpace = () => {
    return useContext(SpaceContext);
};

const MySpaceContext = ({children}) => {
    const spaceX = new SpaceServer();
    return (
        <SpaceContext.Provider value={spaceX}>
            {children}
        </SpaceContext.Provider>
    );
};

export default MySpaceContext;