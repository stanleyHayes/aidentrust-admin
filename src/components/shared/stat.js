import {Card, CardContent, Grid, Typography} from "@mui/material";
import Feint from "./feint";
import {green, grey, purple, red} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";

const Stat = ({title, value, icon, color}) => {
    const renderColor = color => {
        switch (color) {
            case 'red':
                return red[800];
            case 'green':
                return green[800];
            case 'grey':
                return grey[800];
            case 'purple':
                return purple[800];
            default:
                return grey[800];
        }
    }

    const useStyles = makeStyles(theme => {
        return {
            card: {
                backgroundColor: theme.palette.background.paper
            }
        }
    });

    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.card}>
            <CardContent>
                <Grid sx={{mb: 2}} container={true} justifyContent="center">
                    <Grid item={true}>
                        {icon}
                    </Grid>
                </Grid>
                <Typography mb={2} variant="h3" align="center">{value}</Typography>
                        <Typography
                            sx={{fontWeight: 600, color: renderColor(color)}}
                            variant="body2"
                            align="center">{title}</Typography>
            </CardContent>
        </Card>
    )
}

export default Stat;
