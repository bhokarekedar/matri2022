import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Footer() {
    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth="xl">

                <Grid container
                    rowSpacing={2}
                    columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                    {/* 1st */}
                    <Grid item xs={12} md={3} sm={6}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item >
                                header
                            </Grid>
                            <Grid item >
                                descriptionfffdgfgf
                            </Grid>

                        </Grid>
                    </Grid>
                    {/* 2nd */}
                    <Grid item xs={12} md={3} sm={6}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item >
                                header
                            </Grid>
                            <Grid item >
                                descriptionfffdgfgf
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* 3rd */}
                    <Grid item xs={12} md={3} sm={6}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item >
                                header
                            </Grid>
                            <Grid item >
                                descriptionfffdgfgf
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* 4th */}
                    <Grid item xs={12} md={3} sm={6}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item >
                                header
                            </Grid>
                            <Grid item >
                                descriptionfffdgfgf
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Footer