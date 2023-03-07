import {createTheme} from "@mui/material/styles";

const lightTheme = createTheme({
    shape: {
        borderRadius: 8
    },
    typography: {
        fontFamily: 'Outfit, Chakra Petch, Raleway, Nunito ,IBM Plex Mono, Spartan, Raleway, Quicksand, Raleway, Quicksand, IBM Plex Sans, IBM Plex Serif, Nunito'
    },
    palette: {
        mode: "light",
        primary: {
            main: '#5D3EBC',
        },
        secondary: {
            main: '#FFCD31',
        },
        background: {
            default: '#F5F6FA',
            paper: '#ffffff'
        },
        text: {
            primary: '#323130',
            secondary: '#909091',
            title: '#323130',
            light: '#909091',
            link: '#5D3EBC'
        },
        action: {
            active: '#5D3EBC',
            disabledOpacity: 0.55,
            special: '#5D3EBC',
            focusOpacity: 0.85,
        }
    }
});


const darkTheme = createTheme({
    shape: {
        borderRadius: 8
    },
    typography: {
        fontFamily: 'Outfit, Chakra Petch, Raleway, Nunito ,Spartan, Chakra Petch, Quicksand, IBM Plex Mono, Spartan, Inconsolata, Chakra Petch, IBM Plex Sans, IBM Plex Serif, Nunito'
    },
    palette: {
        mode: "dark",
        background: {
            default: '#0c0c23',
            paper: '#1c1c3c'
        },
        primary: {
            main: '#1c1c3c',
        },
        secondary: {
            main: '#FFCD31',
        },
        text: {
            primary: '#e9e9e9',
            secondary: '#909091',
            title: '#e9e9e9',
            light: '#e9e9e9',
            link: '#5D3EBC'
        },
        action: {
            active: '#5D3EBC',
            disabledOpacity: 0.55,
            special: '#5D3EBC',
            focusOpacity: 0.85,
        }
    }
});

export const THEMES = {lightTheme, darkTheme};
