import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/lab";
import {ChevronLeft, DetailsOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/users/users-reducer";
import {useNavigate, useParams} from "react-router";
import {useState} from "react";
import UserDetailTab from "../../components/shared/user-detail-tab";
import UserPermissionsTab from "../../components/shared/user-permissions-tab";
import UserTransactionsTab from "../../components/shared/user-transactions-tab";
import UserBankAccountTab from "../../components/shared/user-bank-account-tab";

const UserDetailPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    const {users, userDetail, userError, userLoading} = useSelector(selectUser);
    const {userID} = useParams();
    const navigate = useNavigate();

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, index) => {
        setSelectedTab(index);
    }

    const renderSelectedTab = index => {
        switch (index) {
            case 0:
                return <UserDetailTab userDetail={userDetail}/>;
            case 1:
                return <UserPermissionsTab/>;
            case 2:
                return <UserTransactionsTab/>;
            case 3:
                return <UserBankAccountTab/>;
            default:
                return <UserDetailTab/>;
        }
    }

    return (
        <Layout>
            {userLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    userError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {userError}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid
                    sx={{my: 4, mt: {xs: 8, md: 4}}}
                    container={true}
                    alignItems="center"
                    justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            onClick={() => navigate(-1)}
                            sx={{
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                fontSize: 16
                            }}
                            color="primary"
                            mb={4}
                            size="large"
                            startIcon={<ChevronLeft fontSize="medium"/>} variant="text">
                            Back
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Typography gutterBottom={true} align="center" variant="h4">
                            User Detail
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Card elevation={0}>
                    <CardContent>
                        <Tabs
                            orientation="horizontal"
                            textColor="primary"
                            indicatorColor="primary"
                            variant="scrollable" value={selectedTab} onChange={handleTabChange}>
                            <Tab
                                sx={{textTransform: 'capitalize'}}
                                value={0}
                                icon={<DetailsOutlined fontSize="small"/>}
                                iconPosition="top"
                                label="Personal Information"
                            />
                            <Tab
                                sx={{textTransform: 'capitalize'}}
                                value={1}
                                icon={<DetailsOutlined fontSize="small"/>}
                                iconPosition="top"
                                label="Permissions"
                            />
                            <Tab
                                sx={{textTransform: 'capitalize'}}
                                value={2}
                                icon={<DetailsOutlined fontSize="small"/>}
                                iconPosition="top"
                                label="Transactions"
                            />
                            <Tab
                                sx={{textTransform: 'capitalize'}}
                                value={3}
                                icon={<DetailsOutlined fontSize="small"/>}
                                iconPosition="top"
                                label="Bank Account"
                            />
                        </Tabs>
                        {renderSelectedTab(selectedTab)}
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    )
}

export default UserDetailPage;
