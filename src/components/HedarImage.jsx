import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import bhoi from "../images/bhoi-mangal-vivah.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HedarImage() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container component="main" sx={{ height: "80vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          backgroundImage: `url(${bhoi})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container component="main" sx={{ height: "80vh" }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid
              container
              component="main"
              sx={{
                height: "30vh",
                //paddingBottom: "10px",
                //  backgroundImage: 'url(https://source.unsplash.com/random)',
                background: "rgba(255, 255, 255, 0.54)",
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                paddingTop: "20px",
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                sx={{
                  paddingBottom: "20px",
                }}
              >
                <Grid item>
                  <Container maxWidth="sm">
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={3}>
                        <Item>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              शोध...
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="शोध..."
                              onChange={handleChange}
                            >
                              <MenuItem value={"वधू"}>वधू </MenuItem>
                              <MenuItem value={"वर"}>वर</MenuItem>
                            </Select>
                          </FormControl>
                        </Item>
                      </Grid>
                      <Grid item xs={3}>
                        <Item>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              वय
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="वय"
                              onChange={handleChange}
                            >
                              <MenuItem value="">निवडा</MenuItem>
                              <MenuItem value="21">21</MenuItem>
                              <MenuItem value="22">22</MenuItem>
                              <MenuItem value="23">23</MenuItem>
                              <MenuItem value="24">24</MenuItem>
                              <MenuItem value="25">25</MenuItem>
                              <MenuItem value="26">26</MenuItem>
                              <MenuItem value="27">27</MenuItem>
                              <MenuItem value="28">28</MenuItem>
                              <MenuItem value="29">29</MenuItem>
                              <MenuItem value="30">30</MenuItem>
                              <MenuItem value="31">31</MenuItem>
                              <MenuItem value="26">26</MenuItem>
                              <MenuItem value="27">27</MenuItem>
                              <MenuItem value="28">28</MenuItem>
                              <MenuItem value="29">29</MenuItem>
                              <MenuItem value="30">30</MenuItem>
                              <MenuItem value="31">31</MenuItem>
                              <MenuItem value="32">32</MenuItem>
                              <MenuItem value="33">33</MenuItem>
                              <MenuItem value="34">34</MenuItem>
                              <MenuItem value="35">35</MenuItem>
                              <MenuItem value="36">36</MenuItem>
                              <MenuItem value="37">37</MenuItem>
                              <MenuItem value="38">38</MenuItem>
                              <MenuItem value="39">39</MenuItem>
                              <MenuItem value="40">40</MenuItem>
                              <MenuItem value="41">41</MenuItem>
                              <MenuItem value="42">42</MenuItem>
                              <MenuItem value="43">43</MenuItem>
                              <MenuItem value="44">44</MenuItem>
                              <MenuItem value="45">45</MenuItem>
                            </Select>
                          </FormControl>
                        </Item>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography
                          sx={{ textAlign: "center", marginTop: "10px" }}
                          variant="h6"
                          component="div"
                        >
                          ते
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Item>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              वय
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="वय"
                              onChange={handleChange}
                            >
                             <MenuItem value="21">21</MenuItem>
                              <MenuItem value="22">22</MenuItem>
                              <MenuItem value="23">23</MenuItem>
                              <MenuItem value="24">24</MenuItem>
                              <MenuItem value="25">25</MenuItem>
                              <MenuItem value="26">26</MenuItem>
                              <MenuItem value="27">27</MenuItem>
                              <MenuItem value="28">28</MenuItem>
                              <MenuItem value="29">29</MenuItem>
                              <MenuItem value="30">30</MenuItem>
                              <MenuItem value="31">31</MenuItem>
                              <MenuItem value="26">26</MenuItem>
                              <MenuItem value="27">27</MenuItem>
                              <MenuItem value="28">28</MenuItem>
                              <MenuItem value="29">29</MenuItem>
                              <MenuItem value="30">30</MenuItem>
                              <MenuItem value="31">31</MenuItem>
                              <MenuItem value="32">32</MenuItem>
                              <MenuItem value="33">33</MenuItem>
                              <MenuItem value="34">34</MenuItem>
                              <MenuItem value="35">35</MenuItem>
                              <MenuItem value="36">36</MenuItem>
                              <MenuItem value="37">37</MenuItem>
                              <MenuItem value="38">38</MenuItem>
                              <MenuItem value="39">39</MenuItem>
                              <MenuItem value="40">40</MenuItem>
                              <MenuItem value="41">41</MenuItem>
                              <MenuItem value="42">42</MenuItem>
                              <MenuItem value="43">43</MenuItem>
                              <MenuItem value="44">44</MenuItem>
                              <MenuItem value="45">45</MenuItem>
                            </Select>
                          </FormControl>
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Button fullWidth variant="contained">
                        शोधा...
                        </Button>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HedarImage;
