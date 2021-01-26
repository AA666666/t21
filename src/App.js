/*
 * @Descripttion: []
 * @version: 1.0.0
 * @Author: Athena
 * @Date: 2020-12-24 17:35:53
 * @LastEditors: Athena
 * @LastEditTime: 2021-01-23 18:00:20
 */
import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import 'src/assets/styles/style.scss';
import routes from 'src/routes';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
