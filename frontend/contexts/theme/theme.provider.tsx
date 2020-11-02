import { createCtx } from '../context.utils';
export const THEME = {
  light: 'light',
  dark: 'dark',
};
const [useThemeSwitcherCtx, ThemeSwitcherProvider] = createCtx<any>();
export { useThemeSwitcherCtx, ThemeSwitcherProvider };
