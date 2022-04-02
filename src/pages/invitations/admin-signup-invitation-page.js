import Layout from "../../components/layout/layout";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const AdminSignUpInvitationPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography>Admin Sign Up Invitation Page</Typography>
            </Container>
        </Layout>
    )
}

export default AdminSignUpInvitationPage;
