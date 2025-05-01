// src/emotion.d.ts или src/mui-theme.d.ts
import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  export type Theme = MuiTheme;
}
