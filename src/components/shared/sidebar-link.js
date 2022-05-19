import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import {purple} from "@mui/material/colors";

const SidebarLink = ({active, path, label, icon}) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
        dispatch(UI_ACTION_CREATORS.changeURL(path));
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    return (
        <Button
            startIcon={icon}
            sx={{
                borderRightWidth: active ? 3 : 0,
                borderRightStyle: active ? 'solid' : 'none',
                borderRightColor: active ? "primary.main" : 'none',
                backgroundColor: active ? purple[50] : 'none',
                color: active ? "text.link" : "text.secondary",
                fontWeight: active ? 700 : 500,
                borderRadius: 0,
                justifyContent: 'flex-start',
                textTransform: 'capitalize',
                fontSize: 14,
                paddingLeft: 4,
                py: 1.8
            }}
            variant="text"
            size="large"
            fullWidth={true}
            onClick={handleClick}>
            {label}
        </Button>
    )
}

export default SidebarLink;
