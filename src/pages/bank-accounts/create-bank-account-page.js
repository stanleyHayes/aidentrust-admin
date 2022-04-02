import Layout from "../../components/layout/layout";
import {Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const CreateBankAccountPage = () => {

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
                <Typography>Create Bank Account Page</Typography>
            </Container>
        </Layout>
    )
}

export default CreateBankAccountPage;
