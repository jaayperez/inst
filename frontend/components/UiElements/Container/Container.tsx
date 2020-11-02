import React from 'react';
import ContainerArea from './Container.styled';

const Container: React.FunctionComponent<{}> = ({ children }) => {
  return <ContainerArea>{children}</ContainerArea>;
};

export default Container;
