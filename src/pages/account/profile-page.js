import Layout from "../../components/layout/layout";
import {Avatar, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {CalendarToday, Call, Edit, Person} from "@mui/icons-material";
import Info from "../../components/shared/info";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import moment from "moment";
import {UTILS} from "../../utils/utils";
import {grey, purple} from "@mui/material/colors";

const ProfilePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
            }
        }
    });

    const classes = useStyles();

    const {authData} = useSelector(selectAuth);

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid spacing={2} alignItems="center" justifyContent="space-between" container={true}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Profile</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                                color: "white",
                                backgroundColor: "primary.main"
                            }}
                            startIcon={<Edit fontSize="small" sx={{color: "white"}}/>}
                            variant="outlined"
                            fullWidth={true}
                            disableElevation={true}
                            size="large">
                            Update Profile
                        </Button>
                    </Grid>
                </Grid>

                <Divider light={true} sx={{my: 4}}/>

                <Grid spacing={2} container={true}>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={0} sx={{mb: 2}}>
                            <CardContent>
                                <Stack mb={2} direction="row" justifyContent="center">
                                    <Avatar
                                        sx={{
                                            width: 110,
                                            height: 110,
                                            backgroundColor: purple[50]
                                        }}>
                                        <Typography
                                            sx={{color: purple[600]}}
                                            variant="h4"
                                            align="center">
                                            {UTILS.getInitials(`${authData.firstName} ${authData.lastName}`)}
                                        </Typography>
                                    </Avatar>
                                </Stack>
                                <Typography
                                    mb={2}
                                    sx={{color: grey[600]}}
                                    variant="h6"
                                    align="center">
                                    {authData && `${authData.firstName} ${authData.lastName}`}
                                </Typography>
                                <Typography
                                    mb={2}
                                    variant="body2"
                                    align="center">
                                    {authData && authData.email}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center">
                                    {authData && authData.status}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid item={true} xs={12}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack
                                        mb={1}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Button
                                            color="primary"
                                            disableRipple={true}
                                            variant="text"
                                            size="small"
                                            startIcon={<Person/>}>
                                            Contact Details
                                        </Button>
                                    </Stack>

                                    <Divider light={true} sx={{my: 1}} variant="middle"/>

                                    <Grid spacing={2} container={true}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Call sx={{color: "primary.main"}}/>}
                                                title="Emergency Phone"
                                                value={authData.emergencyPhoneNumber}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Call sx={{color: "primary.main"}}/>}
                                                title="Phone"
                                                value={authData.phoneNumber}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<CalendarToday sx={{color: "primary.main"}}/>}
                                                title="Joined"
                                                value={moment(authData.createdAt).fromNow()}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                sx={{color: purple[50]}}
                                                icon={<Person sx={{color: "primary.main"}}/>}
                                                title="Username"
                                                value={authData.username}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ProfilePage;
