import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './Global/Global';
import { Main } from '../shared/main';
import { Popup } from './Popup/Popup';

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
