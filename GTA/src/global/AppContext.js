import React, { createContext, useContext, useState } from 'react';

// Context 생성
const AppContext = createContext();

// 커스텀 훅 생성
export const useAppContext = () => {
  return useContext(AppContext);
};

// Context Provider
export const AppContextProvider = ({ children }) => {
  const [ position , setPosition] = useState({
    lat : 35.15955454,
    lng : 126.8526012,
  });

  return (
    <AppContext.Provider value={{ position, setPosition }}>
      {children}
    </AppContext.Provider>
  );
};