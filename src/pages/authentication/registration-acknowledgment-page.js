import {Box, Button, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const RegistrationAcknowledgmentPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: '100vw',
                minHeight: '100vh',
                alignItems: "center",
                backgroundColor: 'background.default'
            }}>
            <Container>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={0} variant="elevation">
                            <CardContent>
                                <Typography
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}
                                    gutterBottom={true}
                                    align="center"
                                    variant="h4">
                                    Aiden Trust Admin
                                </Typography>

                                <Box mb={4}>
                                    <Grid container={true} mb={2} justifyContent="center">
                                        <Grid item={true}>
                                            <img
                                                alt="Success"
                                                src="/assets/images/success.png"
                                            />
                                        </Grid>
                                    </Grid>

                                    <Typography mb={2} gutterBottom={true} variant="h6" align="center">
                                        Welcome Aboard!!!
                                    </Typography>

                                </Box>

                                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                    <Button
                                        sx={{
                                            fontWeight: 'bold',
                                            textTransform: 'capitalize',
                                            backgroundColor: 'primary.main',
                                            color: 'secondary.main',
                                            '&:hover': {
                                                color: 'secondary.main'
                                            },
                                            '&:focus': {
                                                color: 'secondary.main'
                                            },
                                            '&:active': {
                                                color: 'secondary.main'
                                            },
                                        }}
                                        size="large"
                                        variant="contained"
                                        disableElevation={true}
                                        fullWidth={true}>
                                        Go to login
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default RegistrationAcknowledgmentPage;
