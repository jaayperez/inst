import { withStyle } from 'baseui';
import { StyledTable, StyledHeadCell, StyledBodyCell } from 'baseui/table-grid';

export const StyledTableWrapper = withStyle(StyledTable, {
  borderWidth: 0,
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

export const StyledTableHead = withStyle(StyledHeadCell, ({ $theme }) => ({
  borderWidth: 0,
  boxShadow: 'none',
  backgroundColor: $theme.colors.backgroundSecondary,
  paddingTop: '20px',
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingBottom: '20px',
  ...$theme.typography.font250,
}));

export const StyledTableHeadAlt = withStyle(StyledHeadCell, ({ $theme }) => ({
  alignItems: 'center',
  ...$theme.typography.font250,
}));

export const StyledTableBodyCell = withStyle(StyledBodyCell, (props: any) => ({
  display: 'inline-flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px',
  cursor: props.$isCursor === true ? 'pointer' : 'default',
  justifyContent: props.$isCenter === true ? 'center' : 'flex-start',
}));
