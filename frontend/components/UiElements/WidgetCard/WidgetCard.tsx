import React from 'react';
import Wrapper, {
  Content,
  Icon,
  Info,
  Title,
  Action,
  Button,
  Label,
} from './WidgetCard.styled';

type WidgetCardType = {
  icon?: React.ReactNode;
  color?: string;
  title?: string;
  description?: string;
  btntext?: string;
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const WidgetCard = ({
  icon,
  color,
  title,
  description,
  btntext,
  label,
  onClick,
  style,
}: WidgetCardType) => {
  return (
    <Wrapper style={style}>
      <Content>
        {icon && <Icon $color={color}>{icon}</Icon>}
        <Info>
          <Title>{title}</Title>
          <Label>{description}</Label>
        </Info>
      </Content>
      {btntext || label ? (
        <Action>
          <Button $color={color} onClick={onClick}>
            {btntext}
          </Button>
          <Label>{label}</Label>
        </Action>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default WidgetCard;
