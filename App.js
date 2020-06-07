import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from "./src/navigation/AppNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#66afe9',
  },
};

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <AppNavigator/>
      </PaperProvider>
  );
}
