import React, { createContext, useState } from "react";

interface IContext {
  apiUrl: string;
  setUrl: (data: string) => void;
  currentData: any;
  setCurrentData: (data: any) => void;
  loader: boolean;
  setLoader: (data: boolean) => void;
}
  
const defaultState = {
  apiUrl: '',
  setUrl: () => '',
  currentData: null,
  setCurrentData: () => {},
  loader: false,
  setLoader: () => false
};

export const AppContext = createContext<IContext>(defaultState);

const AppProvider = ({ children }: any) => {
  const [apiUrl, setApiUrl] = useState<string>('');
  const setUrl = (newUrl: any) => setApiUrl((_: any) => newUrl);
  
  const [currentData, setData] = useState<any>(null);
  const setCurrentData = (newData: any) => setData((_: any) => newData);

  const [loader, setLoaderState] = useState<boolean>(false);
  const setLoader = (newState: boolean) => setLoaderState((_: boolean) => newState);

  return (
    <AppContext.Provider
      value={{
        apiUrl,
        setUrl,
        currentData,
        setCurrentData,
        loader,
        setLoader
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
  
export default AppProvider;

