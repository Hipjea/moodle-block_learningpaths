import React from "react";

interface IContext {
    apiUrl: string;
}
  
const defaultState = {
    apiUrl: ''
};

const AppContext = React.createContext<IContext>(defaultState);

export default AppContext;
