// CardDataContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeCardData } from './cardData'; // Adjust the import path

const CardDataContext = createContext({ cardData: null, isLoaded: false });

export const CardDataProvider = ({ children }) => {
  const [cardData, setCardData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    initializeCardData().then(() => {
      const storedData = JSON.parse(window.sessionStorage.getItem("cardData"));
      if (storedData) {
        setCardData(storedData);
        setIsLoaded(true);
      }
    });
  }, []);

  return (
    <CardDataContext.Provider value={{ cardData, isLoaded }}>
      {children}
    </CardDataContext.Provider>
  );
};

export const useCardData = () => useContext(CardDataContext);
