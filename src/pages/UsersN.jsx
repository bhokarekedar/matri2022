import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import { FetchUsers } from '../redux/userSlice';
import { useSelector } from 'react-redux'
import UserCard from '../components/UserCard';
import { useFetchData } from '../util/customHooks';
import FallBackLoader from '../components/FallBackLoader';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Users() {
    const { t } = useTranslation(['Labels', 'MenuLabels', 'Errors']);
    const { loading, error } = useFetchData("posts", FetchUsers);
    const fetchedUsers = useSelector((state) => state.user.data);

    const [nextCount, setNextCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onPrevClick = () => {
        setPrevCount(pageSize - 10)
    }

    const onNextClick = () => {
        setNextCount(pageSize + 10)
    }

    return (
        loading ? <> <FallBackLoader /></> :
            <>
                <Grid container rowSpacing={8} columnSpacing={3}>
                    {
                        fetchedUsers.slice(0, 5).map((matchval, index) => {

                            return (

                                <Grid item xs={12} md={4} key={index}>
                                    <UserCard data={{
                                        id: matchval.id,
                                        userId: matchval.userId,
                                        title: matchval.title
                                    }} />
                                </Grid>


                            );
                        })
                    }

                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: "100px" }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item >
                            <Button onClick={onPrevClick} variant="contained">Prev</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={onNextClick} variant="contained">Next</Button>
                        </Grid>

                    </Grid>
                </Grid>

            </>



    )
}

export default Users