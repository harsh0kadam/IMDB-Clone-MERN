import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MovieCarousel from "../MovieCarousel/MovieCarousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Explore() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1 style={{ color: "yellow", marginLeft: "40px" }}>
        Explore What is Streaming
      </h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ marginLeft: "40px" }}
          >
            <Tab label="Prime Video" sx={{ color: "#fff" }} />
            <Tab label="Netflix" sx={{ color: "#fff" }} />
            <Tab label="Hotstar" sx={{ color: "#fff" }} />
            <Tab label="MX Player" sx={{ color: "#fff" }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MovieCarousel
            heading="included with Prime"
            api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
          ></MovieCarousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MovieCarousel
            heading="With Subscription"
            api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
          ></MovieCarousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MovieCarousel
            heading="Go to hotstar.com"
            api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
          ></MovieCarousel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <MovieCarousel
            heading="Go to mxplayer.in"
            api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
          ></MovieCarousel>
        </CustomTabPanel>
      </Box>
    </>
  );
}
