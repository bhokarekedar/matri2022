import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function HedarImage() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (

        <Grid container component="main" sx={{ height: '80vh' }}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Grid container component="main" sx={{ height: '80vh' }} >
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <Grid container component="main"
                            sx={{
                                height: '30vh',
                                //paddingBottom: "10px",
                                //  backgroundImage: 'url(https://source.unsplash.com/random)',
                                background: 'rgba(255, 255, 255, 0.54)',
                                // backgroundRepeat: 'no-repeat',
                                // backgroundSize: 'cover',
                                // backgroundPosition: 'center',
                                paddingTop: "20px"
                            }} >
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="center"
                                sx={{

                                    paddingBottom: "20px"
                                }}
                            >
                                <Grid item>
                                    <Container maxWidth="sm" >
                                        <Grid
                                            container
                                            rowSpacing={1}
                                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                        >
                                            <Grid item xs={3} >
                                                <Item>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Item>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Item>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Item>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography sx={{ textAlign: 'center', marginTop: "10px" }} variant="h6" component="div">
                                                    te
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Item>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={age}
                                                            label="Age"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Item>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button fullWidth variant="contained">Contained</Button>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default HedarImage