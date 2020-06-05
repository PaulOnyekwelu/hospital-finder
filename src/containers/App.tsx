import React from "react";
import {Box} from '@material-ui/core';

import { Header, Footer, Main } from "../components";

const customStyles = {
  body: {
    width: "100vw",
    height: "100vh",
    overflow: 'hidden'
  },
};

const App = (): JSX.Element => {
  return (
    <Box component='div' position="relative" style={customStyles.body}>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
};

export default App;
