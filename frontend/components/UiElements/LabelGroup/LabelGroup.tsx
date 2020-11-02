import React from 'react';
import Wrapper, { LabelButton, Indicator } from './LabelGroup.styled';

type LabelGroup = {
  items: {
    color?: string;
    label?: string;
  }[];
  style?: React.CSSProperties;
  onClick?: () => void;
};

const LabelGroup = ({ items, style, onClick }: LabelGroup) => {
  return (
    <Wrapper style={style}>
      {items.map(item => (
        <LabelButton key={`labelGroup-key${item.label}`} onClick={onClick}>
          <Indicator
            style={{ backgroundColor: item.color ? item.color : '#eeeeee' }}
          />
          &nbsp;&nbsp;
          {item.label}
        </LabelButton>
      ))}
    </Wrapper>
  );
};

export default LabelGroup;
