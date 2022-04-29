import React from 'react'
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';

function MidBannerCard({ Icdata }) {

    return (<>
        <div style={{ position: "relative", }}>
            <CircleIcon sx={{ color: "#000", fontSize: 200 }} />
            <div style={{ position: "absolute", left: "32%", top: "33%" }}>
                <Icdata.icon sx={{ color: "#757ce8", fontSize: 70 }} />
            </div>
        </div>
        <Typography sx={{ textAlign: 'center' }} variant="h6" component="div">
            {Icdata.header}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="body1" component="div">
            {Icdata.description}
        </Typography>
    </>
    )
}

export default MidBannerCard