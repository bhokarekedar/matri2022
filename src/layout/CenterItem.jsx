import React from 'react'
import Grid from "@mui/material/Grid";

function CenterItem(props) {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
      <Grid item>
      {props.children}
      </Grid>

  </Grid>
  )
}

export default CenterItem