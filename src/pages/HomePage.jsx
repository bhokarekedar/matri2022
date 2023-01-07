import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import ProfileCard from "../components/ProfileCard";
import Grid from "@mui/material/Grid";
import { FetchUsers } from "../features/user/userSlice";
import { useSelector } from "react-redux";
import HedarImage from "../components/HedarImage";
import MidBannerCard from "../components/MidBannerCard";
import ImageCard from "../components/ImageCard";
import logo from "../images/logo.png";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import HedaerTitle from "../components/HedaerTitle";
import Footer from "../components/Footer";
import { useFetchData } from "../util/customHooks/useFetchData";
import Typography from "@mui/material/Typography";

// import SliderImages from '../components/SliderImages';

function HomePage() {
  // const { t } = useTranslation(['Labels', 'MenuLabels', 'Errors']);
  // const fetcheddata = useSelector((state) => state.user.data);
  // const { loading, error } = useFetchData("posts", FetchUsers);

  const iconsData = [
    {
      icon: ModeEditIcon,
      header: "नाव नोंदणी",
      description: "आपल्या संपूर्ण माहितीसह आपली प्रोफाईल तयार करा.",
    },
    {
      icon: SearchIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      icon: PeopleIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      icon: MessageIcon,
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
  ];

  const MatchData = [
    {
      imageUrl: "circle.png",
      header: "abc",
      description: "hhhjhhjj nnhnh",
    },
    {
      imageUrl: logo,
      header: "dsd",
      description: "sdsd nnhnh",
    },
  ];

  return (
    <>
      {/* start HEADER */}
      <HedarImage />
      {/* END HEADER */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom component="div">
            तुमचा जोडीदार शोधण्याचा मार्ग ...
          </Typography>
        </Grid>
      </Grid>
      {/* start MidBannerCard */}
      {/* <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {iconsData.map((Icdata, index) => {
            return (
              <Grid item xl={3} sm={6} md={3} xs={12}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <MidBannerCard
                      Icdata={{
                        icon: Icdata.icon,
                        header: Icdata.header,
                        description: Icdata.description,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box> */}
      {/* END MidBannerCard */}

      {/* start image card */}
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {MatchData.map((matchval, index) => {
            return (
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  // rowSpacing={1}
                  // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item>
                    <ImageCard
                      data={{
                        imageUrl: matchval.imageUrl,
                        header: matchval.header,
                        description: matchval.description,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* end image card */}

      {/* start HEADER title */}
      <HedaerTitle
        val={{
          variant: "h6",
          title: "fddddddddddddddddddddfdfd",
          colorVal: "#3f50b5",
        }}
      />
      {/* END HEADER title */}
      {/* start SliderImage  */}
      {/* <SliderImages /> */}
      {/* end SliderImage  */}
      {/* start footer  */}
      <Footer />
      {/* end footer  */}
    </>
  );
}

export default HomePage;
