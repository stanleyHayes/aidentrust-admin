import {Grid, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";

const MobileHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular">
            <Grid container={true} alignItems="center" spacing={2}>
                <Grid item={true}>
                    <Menu
                        sx={{
                            color: 'secondary.main',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderRadius: 1.2,
                            p: 0.2
                        }}
                        onClick={() => dispatch(UI_ACTION_CREATORS.openDrawer())}/>
                </Grid>
                <Grid item={true}>
                    <Link to="/" className={classes.link}>
                        <Typography sx={{color: 'secondary.main'}} variant="h6">
                            Aiden Trust
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader
