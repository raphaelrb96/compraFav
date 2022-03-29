import UserProvider from '../context/userContext';
import React from 'react';
import "./global.css";

import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserProvider>
        
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
    
  )
}
