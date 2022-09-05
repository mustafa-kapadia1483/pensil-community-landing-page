import { useMantineTheme } from "@mantine/core";
import { createContext, useEffect, useState } from "react";

import pageInformationJson from "../pageInformation.json";

export const Context = createContext();

export const ContextProvider = ({ children, setPrimaryColor }) => {
  const [pageInformation, setPageInformation] = useState(pageInformationJson);

  return (
    <Context.Provider
      value={{
        pageInformation,
        setPageInformation,
        setPrimaryColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};
