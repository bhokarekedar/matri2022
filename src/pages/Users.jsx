import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import FetchUsers  from "../features/user/userSlice";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import UserCard from "../components/UserCard";
import FallBackLoader from "../components/FallBackLoader";
import Button from "@mui/material/Button";
import { useFetchData } from "../util/customHooks/useFetchData";
import {allUserInfo}  from '../features/user/userSlice';

function Users() {
  const { t } = useTranslation(["Labels", "MenuLabels", "Errors"]);
  const { loading, error } = useFetchData("posts", FetchUsers);
  const [prevCount, setPrevCount] = useState(0);
  const [nextCount, setNextCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUserInfo(3));
}, [])
const fetchedUsers = useSelector(((state) => state.user), shallowEqual);

  const onPrevClick = () => {
    if(prevCount !== 0){
     setNextCount(nextCount - 9);
    setPrevCount(prevCount - 9);
    }
  };

  const onNextClick = () => {
   
    if(nextCount !== 0){
    setPrevCount(prevCount + 9);
    setNextCount(nextCount + 9);
    }
  };


  return fetchedUsers.allUserInfoState == "fulfilled" ?(
    <>
      <Grid container rowSpacing={8} columnSpacing={3} 
      sx={{paddingTop:"20px"}}
      >
        {fetchedUsers.allUserInfo.map((matchval, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <UserCard
                data={{
                  id: matchval.id,
                  userId: matchval.id,
                  title: "matchval.title",
                }}
              />
            </Grid>
          );
        })}
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
          <Grid item>
            <Button onClick={onPrevClick} variant="contained">
              Prev
            </Button>
          </Grid>

          <Grid item>
            <Button onClick={onNextClick} variant="contained">
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      {" "}
      <FallBackLoader />
    </>
  )
}

export default Users;
