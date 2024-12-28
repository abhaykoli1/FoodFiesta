import { lightColors, darkColors } from "./Colors";

import { useColorScheme } from "react-native";
import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = (Props) => {
  const colorScheme = useColorScheme(colorScheme == "dark");
  const [isDark, setIsDark] = useState(colorScheme == "dark");

  //
  useEffect(() => {
    setIsDark(colorScheme == "dark");
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme) => setIsDark(scheme === "dark"),
  };
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {Props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
