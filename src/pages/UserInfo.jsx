import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

import ProfileCard from "../components/ProfileCard";
import Grid from '@mui/material/Grid';
import HttpService from "../util/http";
import { getUserById }  from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import ImageCard from '../components/ImageCard';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function UserInfo() {
    const theme = useTheme();
    const matchessm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation(['Labels', 'MenuLabels', 'Errors']);
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
     const data = {
         id : location.state
     }
      dispatch(getUserById(data));
  }, [])
   console.log(user)
    //const [data, setdata] = useState({})


    function isRealValue(obj) {
        return obj && obj !== 'null' && obj !== 'undefined';
    }


    const profileQuestionAns = [
        {
            title: "about",
            questionOne: "whats the name",
            answerOne: user.name,
            questionTwo: "whats the name",
            answerTwo: user.email,
            questionThree: "whats the name",
            answeThree: user.username,
            btnLabel: "gggh"

        },
        {
            title: "about",
            questionOne: "whats the name",
            answerOne: user.name,
            questionTwo: "whats the name",
            answerTwo: user.email,
            questionThree: "whats the name",
            answeThree: user.username,
            btnLabel: "gggh"

        },
        {
            title: "home",
            questionOne: "whats the name",
            answerOne: user.email,
            questionTwo: "whats the name",
            answerTwo: user.name,
            btnLabel: "gggh"

        },
        {
            title: "ff",
            questionOne: "whats the name",
            answerOne: user.username,
            questionTwo: "whats the name",
            answerTwo: user.email,
            questionThree: "whats the name",
            answeThree: user.name,
            btnLabel: "gggh"
        },
    ]

    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                rowSpacing={{ xs: 3, sm: 3, md: 3 }}

            >
                <Grid item xs={12} sm={6} md={6} >
                    <Container maxWidth={matchessm ? "xl" : "xs"}>
                        <Grid container component="main" sx={{ height: '60vh' }}>
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
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                {profileQuestionAns.map((val, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} >
                            {isRealValue(user) && <ProfileCard val={val} index={index} />}
                        </Grid>
                    )
                })}


                {/* <Grid item xs={12} sm={6} md={6} >
                    {isRealValue(user) && <ProfileCard val={{ username }} />}
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    {isRealValue(user) && <ProfileCard val={{ email }} />}
                </Grid> */}
            </Grid>
        </Container>
    )
}

export default UserInfo