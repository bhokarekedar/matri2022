import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function ProfileCard(props) {
    debugger;
    console.log("propss", props);

    return (
        <Paper elevation={3}>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: '50vh' }}
            //  alignItems="center"
            >
                <Grid item>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            overflow: 'auto',
                            p: 2
                        }}
                    >
                        <Typography variant="h6" gutterBottom component="div">
                            {props.val.title}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',

                            }}
                        >
                            <Typography sx={{ color: "#424242" }} variant="body2" >
                                {props.val.questionOne}
                            </Typography>
                            <Typography variant="body2" >
                                {props.val.answerOne}
                            </Typography>

                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',

                            }}
                        >
                            <Typography variant="body2" >
                                {props.val.questionTwo}
                            </Typography>
                            <Typography variant="body2" >
                                {props.val.answerTwo}
                            </Typography>

                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',

                            }}
                        >
                            <Typography variant="body2" >
                                {props.val.questionThree}
                            </Typography>
                            <Typography variant="body2" >
                                {props.val.answeThree}
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    {props.val.ownProfile ? <Button fullWidth variant="contained">{props.val.btnLabel}</Button> : ""}
                </Grid>
            </Grid>
        </Paper>

        // <Paper elevation={3}>
        //     <Box
        //         component="main"
        //         sx={{
        //             flexGrow: 1,
        //             height: '50vh',
        //             overflow: 'auto',
        //             p: 2
        //         }}
        //     >
        //         <Typography variant="h6" gutterBottom component="div">
        //             {props.val.title}
        //         </Typography>
        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 justifyContent: 'space-between',

        //             }}
        //         >
        //             <Typography sx={{ color: "#424242" }} variant="body2" >
        //                 {props.val.questionOne}
        //             </Typography>
        //             <Typography variant="body2" >
        //                 {props.val.answerOne}
        //             </Typography>

        //         </Box>

        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 justifyContent: 'space-between',

        //             }}
        //         >
        //             <Typography variant="body2" >
        //                 {props.val.questionTwo}
        //             </Typography>
        //             <Typography variant="body2" >
        //                 {props.val.answerTwo}
        //             </Typography>

        //         </Box>
        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 justifyContent: 'space-between',

        //             }}
        //         >
        //             <Typography variant="body2" >
        //                 {props.val.questionThree}
        //             </Typography>
        //             <Typography variant="body2" >
        //                 {props.val.answeThree}
        //             </Typography>

        //         </Box>
        //         <Grid container component="main" sx={{ height: '50vh' }} >
        //             <Grid
        //                 container
        //                 direction="column"
        //                 justifyContent="flex-end"
        //                 alignItems="center"
        //             >
        //                 <Grid item>
        //                     <Button fullWidth variant="contained">Contained</Button>
        //                 </Grid>
        //             </Grid>
        //         </Grid>

        //     </Box>
        // </Paper>
    )
}

export default ProfileCard