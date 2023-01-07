import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch, useSelector, shallowEqual} from'react-redux';
import { useNavigate } from 'react-router-dom';
import {http} from '../http-common';
import ErrorField from "../components/errorField";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://bhoimangalvivah.com">
        Bhoi Mangal Vivah
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const errorSet = {
    email: null,
    password: null,
    general: null
  }
  const hasErrorInField = {
    email: false,
    password: false,
    general: false
  }
  const [errors, setErrors] = useState(errorSet);
  const [hasError, setHasError] = useState(hasErrorInField);
  let navigate = useNavigate();

  

  const handleSubmit =async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      email: data.get('email'),
      password: data.get('password'),
    }
    console.log(obj);
    const response = await http.post("auth/login", obj)
    console.log("responsefrom login", response)
    if(response.status == 200){
      localStorage.setItem("tokenBhoi", response?.data);
      setHasError(false);
      navigate("/profile");

    }
    else if(response.status == 404){
      setHasError(true);
      errorSet.general = response.data
      setErrors(errorSet);
    }
    else if(response.status == 204){
      setHasError(true);
      errorSet.general = response.data
      setErrors(errorSet);
    }
    else if(response.status == 400){
      setHasError(true);
      errorSet.general = response.data
      console.log("errorSet", errorSet)
      setErrors(errorSet);
    }
    else{
      errorSet.general = response.data
      setHasError(true);
    }
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={errors.email}
              error={hasError.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={errors.password}
              error={hasError.password}
            />
            <ErrorField>{errors.general}</ErrorField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

