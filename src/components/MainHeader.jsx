import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  background: #0078d7;
  color: white;
  display: flex;
  flex-grow: 0;
  font-size: 5em;
  justify-content: center;
  align-items: center;
  height: 4em;
`;

const MainHeader = () => (
  <HeaderStyle>Cwitter!</HeaderStyle>
);

export default MainHeader;
