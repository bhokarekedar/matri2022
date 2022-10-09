import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function FullHeight(props) {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        component="main"
        sx={{ height: "90vh" }}
      >
        <Grid item>{props.children}</Grid>
      </Grid>
    </Container>
  );
}

export default FullHeight;
