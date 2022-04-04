import UI_ACTION_TYPES from "./ui-action-types";

const changeURL = path => {
    return {
        type: UI_ACTION_TYPES.CHANGE_URL,
        payload: path
    }
}


const closeDrawer = () => {
    return {
        type: UI_ACTION_TYPES.CLOSE_DRAWER
    }
}


const openDrawer = () => {
    return {
        type: UI_ACTION_TYPES.OPEN_DRAWER
    }
}

const toggleTheme = () => {
    return {
        type: UI_ACTION_TYPES.TOGGLE_THEME
    }
}

const UI_ACTION_CREATORS = {changeURL, closeDrawer, openDrawer, toggleTheme};

export default UI_ACTION_CREATORS;
