import React from 'react';
import Wrapper from './IconButton.styled';

const IconButton: React.FunctionComponent<{
  onClick?: () => void;
}> = ({ onClick, children }) => <Wrapper onClick={onClick}>{children}</Wrapper>;

export default IconButton;
