import React, { createContext, useState } from "react";

interface IContext {
  apiUrl: string;
  setUrl: (data: string) => void;
  currentData: any;
  setCurrentData: (data: any) => void;
}
  
const defaultState = {
  apiUrl: '',
  setUrl: () => '',
  currentData: null,
  setCurrentData: () => {}
};

export const AppContext = createContext<IContext>(defaultState);

const AppProvider = ({ children }: any) => {
  const [apiUrl, setApiUrl] = useState<string>('');
  const setUrl = (newUrl: any) => setApiUrl((_: any) => newUrl);
  
  const [currentData, setData] = useState<any>(null);
  const setCurrentData = (newData: any) => setData((_: any) => newData);

  return (
    <AppContext.Provider
      value={{
        apiUrl,
        setUrl,
        currentData,
        setCurrentData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
  
export default AppProvider;

