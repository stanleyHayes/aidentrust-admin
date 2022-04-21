import {Box, CircularProgress, Container, LinearProgress, Stack, Typography} from "@mui/material";
import React from "react";

const Splash = () => {

    return (
        <React.Fragment>
            <LinearProgress color="primary" variant="query"/>
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    height: '99.5vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                }}>
                <Container>
                    <Typography color="primary" mb={2} gutterBottom={true} align="center" variant="h3">
                        Aiden Trust
                    </Typography>
                    <Typography mb={2} gutterBottom={true} align="center" variant="h5">
                        Setting up account
                    </Typography>
                    <Typography mb={2} gutterBottom={true} align="center" variant="body1">
                        Please wait...
                    </Typography>
                    <Stack direction="row" justifyContent="center">
                        <CircularProgress color="primary"/>
                    </Stack>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Splash;
