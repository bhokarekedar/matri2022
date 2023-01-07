import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

function HedaerTitle({ val }) {
    let { colorVal, variant, title } = val;
    let colorValue = colorVal !== undefined ? colorVal : "#ba000d";
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                }}
            >
                <Typography sx={{ color: colorValue }} variant={variant} component="div" gutterBottom>
                    {title}
                </Typography>
            </Box>


        </div>
    )
}

export default HedaerTitle