import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function MainLayout() {
  return (
    <Grid>
      <Grid>
        <Header />
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default MainLayout;
