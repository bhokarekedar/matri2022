import React from 'react'
import Typography from '@mui/material/Typography';

function ErrorField(props) {
  return (
    <Typography style={{color: "red"}} variant="body2">{props.children}</Typography>
  )
}

export default ErrorField