import '../styles/globals.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/themeOfficial'
import React from 'react'
import {ThemeProvider} from '@material-ui/styles';


function MyApp({Component, pageProps}) {
  React.useEffect(() => { // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
      }
  }, []);

  return (
      <React.Fragment>
      <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
      </React.Fragment>
  );
}

export default MyApp
