import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
  background: lightblue;
  color: white;
  display flex;
  flex-grow: 0;
  font-size: 4em;
  justify-content: center;
  align-items: center;
  height: 3em;
`

const MainHeader = () => (
    <HeaderStyle>Cwitter</HeaderStyle>
);

export default MainHeader;