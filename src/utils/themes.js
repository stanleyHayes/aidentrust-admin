import {createTheme} from "@mui/material/styles";

const lightTheme = createTheme({
    shape: {
        borderRadius: 0
    },
    typography: {
        fontFamily: 'Chakra Petch, Raleway, Quicksand, IBM Plex Mono,Raleway, Spartan, Inconsolata, Quicksand, IBM Plex Sans, IBM Plex Serif, Nunito'
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
        borderRadius: 0
    },
    typography: {
        fontFamily: 'Chakra Petch, Raleway, Quicksand, IBM Plex Mono, Spartan, Inconsolata, Chakra Petch, IBM Plex Sans, IBM Plex Serif, Nunito'
    },
    palette: {
        mode: "dark",
        background: {
            default: '#000000',
            paper: '#13132b'
        },
        primary: {
            main: '#5D3EBC',
        },
        secondary: {
            main: '#FFCD31',
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

export const THEMES = {lightTheme, darkTheme};
