import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function Header() {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar sx={{ backgroundColor: "#3E8BFF", boxShadow: "none" }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img
                src="https://i.postimg.cc/tRKQH0Xr/Frame-1-22.png"
                alt="logo"
                width={220}
              />
            </Grid>
            <Grid item>
              <List
                component="nav"
                aria-labelledby="main navigation"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton component="a" to="/" padding={0}>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#pricing">
                    <ListItemText primary="Service" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#about">
                    <ListItemText primary="Portfolio" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" to="/About">
                    <ListItemText primary="AboutUs" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" to="/Contact">
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Button
              sx={{
                backgroundColor: "white",
                color: "#3E8BFF",
                borderRadius: "20px",
                textTransform: "capitalize",
                padding: "5px 20px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0055ff",
                  color: "white",
                },
              }}
            >
              Get In Touch
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
