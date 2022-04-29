import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function UserCard(props) {
    const { id, title, userId } = props.data;
    let navigate = useNavigate();

const handleClick = (id) => {
navigate(`/UserInfo/${id}`, { state: id });
}
    return (
        <Container maxWidth="xs">
            <Paper elevation={3}>

                <Grid container component="main" sx={{ height: '60vh' }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    >
                        <Typography sx={{ background: 'rgba(255, 255, 255, 0.54)', textAlign: "center" }}
                            variant="h6" gutterBottom component="div">
                            {id}
                        </Typography>
                        <Grid container component="main" sx={{ height: '60vh' }} >
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-end"

                            >
                                <Grid container component="main"
                                    sx={{
                                        height: '20vh',
                                        background: 'rgba(255, 255, 255, 0.54)',
                                    }} >
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="flex-end"
                                        sx={{ paddingBottom: "10px" }}
                                    >
                                        <Grid item>
                                            <Typography sx={{ textAlign: "center" }}
                                                variant="h6" component="div">
                                                {id}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={{ textAlign: "center" }}
                                                variant="caption" component="div">
                                                {id}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                <Grid item xs={4}>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Grid item >
                                                            <Typography sx={{ textAlign: "center" }}
                                                                variant="body1" component="div">
                                                                {id}
                                                            </Typography>
                                                            <Typography sx={{ textAlign: "center" }}
                                                                variant="body1" component="div">
                                                                {id}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Grid item >
                                                            <Typography sx={{ textAlign: "center" }}
                                                                variant="body1" component="div">
                                                                {id}
                                                            </Typography>
                                                            <Typography sx={{ textAlign: "center" }}
                                                                variant="body1" component="div">
                                                                {id}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Grid item >
                                                            <Typography sx={{ textAlign: "center" }}
                                                                variant="body1" component="div">
                                                                {id}
                                                            </Typography>
                                                            <Typography sx={{ textAlign: "center" }}
                                                                variant="body1" component="div">
                                                                {id}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={() => handleClick(id)} fullWidth variant="contained">see prof</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </Container>
    )
}

export default UserCard