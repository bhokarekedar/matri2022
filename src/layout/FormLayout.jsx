import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

function FormLayout(props) {
  const matchesMd = useMediaQuery('(min-width:600px)');

  return (
    <Container component="main" maxWidth="md" sx={{mt:2}}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Paper elevation={3} >
        <Container component="main" maxWidth="sm">
        <Grid item sx={{mt:2, mb:2}}>{props.children}</Grid>
        </Container>
        </Paper>
      </Grid>
    </Container>
  );
}

export default FormLayout;
