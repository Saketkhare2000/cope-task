import React, { useContext, useState } from "react";

const WebContext = React.createContext();

export const useWebContext = () => {
  return useContext(WebContext);
};

export const WebProvider = ({ children }) => {
  const [pageview, setPageview] = useState(true);
  const value = {
    pageview,
    setPageview,
  };
  return (
    <WebContext.Provider value={value}>
      <div>{children}</div>
    </WebContext.Provider>
  );
};
