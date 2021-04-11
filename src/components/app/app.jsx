import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './global/index';
import { Main } from './main/index';
import { Popup } from './popup/popup';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Popup />
      </Main>
    </>
  );
};

export default App;
