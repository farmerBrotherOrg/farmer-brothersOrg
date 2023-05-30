import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            "main": "#FDB836"
        },
        secondary: {
            main: '#aaa',
        },
        darkBrown: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        darkBrown: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        darkBrown?: PaletteOptions['primary'];
    }
}

export default function MUIThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}