"use client"
import React from 'react'
import MUIThemeProvider from './MUIThemeProvider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReCaptchaProvider } from "next-recaptcha-v3";

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReCaptchaProvider reCaptchaKey="6Ld4vUwmAAAAAMnW6010GiI6YJ1GbvDhn47Ol5S1">
            <MUIThemeProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {children}
                </LocalizationProvider>
            </MUIThemeProvider >
        </ReCaptchaProvider>

    )
}

export default Providers