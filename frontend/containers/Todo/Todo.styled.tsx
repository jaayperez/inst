import { styled } from 'baseui';

export const TodoItem = styled('div', ({ $theme }) => ({
  padding: '15px',
  border: '2px solid transparent',
  margin: '5px 0',
  transition: 'all 0.3s ease',
  ':hover': {
    border: `2px solid ${$theme.colors.primary}`,
  },
  ':focus': {
    outline: 'none',
  },
}));

export const TodoItemWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const AddListWrapper = styled('div', {
  padding: '15px 20px 15px 15px',
});

export const AddButton = styled('button', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderWidth: 0,
  cursor: 'pointer',
  marginBottom: $theme.sizing.scale600,
  ...$theme.typography.font250,
  color: $theme.colors.primaryA,
  transition: 'color 0.3s ease',
  ':hover': {
    color: $theme.colors.contentSecondary,
  },
  ':focus': {
    outline: 'none',
  },
}));

export const RemoveButton = styled('button', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderWidth: 0,
  cursor: 'pointer',
  padding: '0 5px',
  color: $theme.colors.primaryA,
  ':focus': {
    outline: 'none',
  },
}));

export const EditButton = styled('button', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderWidth: 0,
  cursor: 'pointer',
  padding: '0 5px',
  color: $theme.colors.primaryA,
  ':focus': {
    outline: 'none',
  },
}));
