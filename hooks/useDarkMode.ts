import { useTheme } from "next-themes"
import { useEffect } from "react"
import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT, DEFAULT_COLOR_SCHEME } from "@/lib/constants";

export const useDarkModeListener = () => {
    const { theme, systemTheme } = useTheme();
    useEffect(() => {
        if (theme === "system") {
            document.cookie = `color_scheme=; Path=/; Secure; expires=Thu, 01 Jan 1970 00:00:00 GMT`
            return;            
        }
        const isDarkMode = theme === "dark";
        const colorScheme = isDarkMode ? COLOR_SCHEME_DARK : COLOR_SCHEME_LIGHT;
        const date = new Date();
        date.setFullYear(date.getFullYear() + 10);
        document.cookie = `color_scheme=${colorScheme}; Path=/; expires=${date.toUTCString()}`
    }, [theme, systemTheme]);    
}

export const useIsDark = () => {    
}