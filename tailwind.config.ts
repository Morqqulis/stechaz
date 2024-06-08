const { nextui } = require('@nextui-org/react')
import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xxs: {
                max: '489.99px',
            },
            ssm: {
                max: '566.99px',
            },
            mmd: {
                max: '766.99px',
            },
            llg: {
                max: '991.99px',
            },
            mxl: {
                max: '1199.99px',
            },
            m2xl: {
                max: '1439.99px',
            },
            xs: '489.99px',
            sm: '566.99px',
            md: '767.99px',
            lg: '991.99px',
            xl: '1199.99px',
            '2xl': '1439.99px',
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'bounce-slow': 'bounce .2s linear infinite',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            preffix: 'nextui',
            addCommonColors: true,
            defaultTheme: 'dark', // default theme from the themes object
            defaultExtendTheme: 'dark', // default theme to extend on custom themes
            themes: {
                light: {
                    layout: {},
                    colors: {
                        background: '#FFFFFF', // or DEFAULT
                        foreground: '#11181C', // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            foreground: '#FFFFFF',
                            DEFAULT: '#006FEE',
                        },
                    },
                },
                dark: {
                    layout: {},
                    colors: {
                        background: '#010409', // or DEFAULT
                        foreground: '#e6edf3', // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            foreground: '#FFFFFF',
                            DEFAULT: '#006FEE',
                        },
                    },
                },
                'purple-dark': {
                    extend: 'dark', // <- inherit default values from dark theme
                    colors: {
                        background: '#0D001A',
                        foreground: '#ffffff',
                        primary: {
                            50: '#3B096C',
                            100: '#520F83',
                            200: '#7318A2',
                            300: '#9823C2',
                            400: '#c031e2',
                            500: '#DD62ED',
                            600: '#F182F6',
                            700: '#FCADF9',
                            800: '#FDD5F9',
                            900: '#FEECFE',
                            DEFAULT: '#DD62ED',
                            foreground: '#ffffff',
                        },
                        focus: '#F182F6',
                    },
                    layout: {
                        disabledOpacity: '0.3',
                        radius: {
                            small: '4px',
                            medium: '6px',
                            large: '8px',
                        },
                        borderWidth: {
                            small: '1px',
                            medium: '2px',
                            large: '3px',
                        },
                    },
                },
                blue: {
                    colors: {
                        background: '#FFFFFF', // or DEFAULT
                        foreground: '#11181C', // or 50 to 900 DEFAULT
                        primary: {
                            50: '#e6f0ff',
                            100: '#bdd2f5',
                            200: '#93b4eb',
                            300: '#6896e3',
                            400: '#4078db',
                            500: '#2a5ec2',
                            600: '#1f4998',
                            700: '#15346d',
                            800: '#0a1f42',
                            900: '#000a1a',
                            foreground: '#FFFFFF',
                            DEFAULT: '#006FEE',
                        },
                    },
                },
            },
        }),
        require('@tailwindcss/typography'),
        // ...
    ],
}
export default config
