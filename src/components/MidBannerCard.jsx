import React from 'react'
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import Container from '@mui/material/Container';

function MidBannerCard({ Icdata }) {

    return (<Container maxWidth="sm">
        <div style={{ position: "relative", left: "20%"}}>
            <CircleIcon sx={{ color: "#000", fontSize: 200 }} />
            <div style={{ position: "absolute", left: "22%", top: "33%" }}>
                <Icdata.icon sx={{ color: "#757ce8", fontSize: 70 }} />
            </div>
        </div>
        <Typography sx={{ textAlign: 'center' }} variant="h6" component="div">
            {Icdata.header}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="body1" component="div">
            {Icdata.description}
        </Typography>
        
        </Container>
    )
}

export default MidBannerCard