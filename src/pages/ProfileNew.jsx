import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";
import ProfileCard from "../components/ProfileCard";
import Grid from '@mui/material/Grid';
import HttpService from "../util/http";
import { FetchUser } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux'

function Profile() {
    const { t } = useTranslation(['Labels', 'MenuLabels', 'Errors']);
    const user = useSelector((state) => state.user.userInfo);

    let { name, username, email } = user
    let id = 1;
    //const [data, setdata] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        let result = await HttpService.GetData(`users/${id}`);
        dispatch(FetchUser(result.data));

        setTimeout(() => {
            console.log("user", user);
        }, 5000);
    }

    function isRealValue(obj) {
        return obj && obj !== 'null' && obj !== 'undefined';
    }

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
                    {isRealValue(user) && <ProfileCard val={{ name }} />}
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    {isRealValue(user) && <ProfileCard val={{ username }} />}
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    {isRealValue(user) && <ProfileCard val={{ email }} />}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile