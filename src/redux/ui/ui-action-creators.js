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

const UI_ACTION_CREATORS = {changeURL, closeDrawer, openDrawer};

export default UI_ACTION_CREATORS;
