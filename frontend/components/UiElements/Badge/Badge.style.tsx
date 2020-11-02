import { styled } from 'baseui';

const Wrapper = styled('a', {
  position: 'relative',
  cursor: 'pointer',
  display: 'inline-flex',
});

export const Count = styled('span', (props: any) => ({
  position: 'absolute',
  top: '-8px',
  right: '-14px',
  minWidth: '16px',
  minHeight: '14px',
  borderRadius: '50%',
  padding: '2px',
  backgroundColor: props.$bgColor
    ? props.$bgColor
    : props.$theme.colors.primary,
  color: props.$color ? props.$color : props.$theme.colors.primaryB,
  fontSize: props.$theme.sizing.scale500,
  lineHeight: '14px',
  fontWeight: 700,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default Wrapper;
