import {Avatar, Button, Container, Grid, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {KeyboardArrowDown} from "@mui/icons-material";
import {useState} from "react";

const DesktopHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            },
            dropDownLink: {
                textDecoration: 'none',
                display: 'block',
                width: '100%'
            }
        }
    });

    const classes = useStyles();


    const getInitials = name => {
        const names = name.split(' ');
        if (names.length === 0)
            return 'A';
        else if (names.length === 1)
            return names[0][0];
        else return `${names[0][0]}${names[1][0]}`
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    return (
        <Toolbar variant="regular"
                 sx={{borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: '#e5e5e5'}}>
            <Container>
                <Grid container={true} alignItems="center" justifyContent="space-around">
                    <Grid item={true} lg={3}>
                        <Link to="/" className={classes.link}>
                            <Typography sx={{color: 'text.primary'}} variant="h4">
                                Windy Craft
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid alignItems="center" container={true} lg={9} spacing={2} justifyContent="flex-end">
                        <Grid item={true}>
                            <Avatar
                                sx={{
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: 'secondary.main',
                                    backgroundColor: 'primary.main'
                                }}
                                variant="rounded">
                                <Typography
                                    sx={{fontWeight: 'bold', color: 'secondary.main'}}
                                    variant="body1">
                                    {getInitials("Stanley Hayford")}
                                </Typography>
                            </Avatar>
                        </Grid>
                        <Grid item={true}>
                            <Button
                                color="secondary"
                                onClick={handleMenuClick}
                                endIcon={<KeyboardArrowDown color="secondary"/>}
                                size="large" variant="text">
                                {"Stanley Hayford"}
                            </Button>
                            <Menu open={menuOpen} onClose={handleMenuClose} anchorEl={anchorEl}>
                                <MenuItem>
                                    <Link to="/account/profile" className={classes.dropDownLink}>
                                        <Button variant="text" size="large">Profile</Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Grid>
                        <Grid item={true}>
                            <Link className={classes.link} to="/auth/login">
                                <Button
                                    color="secondary"
                                    size="medium"
                                    variant="outlined"
                                    sx={{
                                        borderWidth: 2,
                                    }}>
                                    Logout
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader
