import React from 'react';
import NotFoundWrapper, { Title } from './NotFound.styled';

type NotFoundProps = {
  title?: string;
};

const NotFound = ({ title }: NotFoundProps) => {
  return (
    <NotFoundWrapper>
      <Title>{title ? title : 'Page not found 😔'}</Title>
    </NotFoundWrapper>
  );
};

export default NotFound;
