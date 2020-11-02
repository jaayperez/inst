import { styled } from 'baseui';

const Wrapper = styled('div', {
  position: 'relative',
});

export const DefaultBtn = styled('button', {
  cursor: 'pointer',
  margin: '10px 3px',
});

export const BulletButton = styled('button', {
  cursor: 'pointer',
  width: '10px',
  height: '10px',
  margin: '4px',
  border: 0,
  padding: 0,
  outline: 'none',
  borderRadius: '50%',
  backgroundColor: '#d6d6d6',
});

export default Wrapper;
