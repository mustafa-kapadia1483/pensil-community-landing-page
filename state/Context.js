import { createContext, useState } from "react";

import pageInformationJson from "../pageInformation.json";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [pageInformation, setPageInformation] = useState(pageInformationJson);
  return (
    <Context.Provider
      value={{
        pageInformation,
        setPageInformation,
      }}
    >
      {children}
    </Context.Provider>
  );
};
