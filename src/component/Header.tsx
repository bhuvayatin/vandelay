import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinks = [
    { label: "Dashboard", to: "#", icon: <DashboardIcon /> },
    { label: "Profile", to: "#", icon: <PersonIcon /> },
    { label: "Sign Up", to: "#", icon: <AppRegistrationIcon /> },
    { label: "Sign In", to: "#", icon: <LoginIcon /> },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          py: 2,
        }}
      >
        <Typography fontWeight={700} color="white">
          VANDELAY INDUSTRIES
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: 200, p: 2 }} role="presentation">
                <List>
                  {navLinks.map((item) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.to}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>

                {/* Free Download Button inside Drawer */}
                <Button
                  fullWidth
                  sx={{
                    mt: 2,
                    borderRadius: "34.5px",
                    padding: "5.5px 16px",
                    backgroundColor: "white",
                    fontSize: "10px",
                    color: "black",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  Free Download
                </Button>
              </Box>
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={3}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                startIcon={item.icon}
                sx={{
                  color: "white", // sets the text and icon color to white
                  "&:hover": {
                    color: "#f0f0f0", // optional: subtle hover effect
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        )}

        <Button
          sx={{
            display: { xs: "none", md: "inline-flex" }, // hide on xs, show on md+
            borderRadius: "34.5px",
            padding: "5.5px 30.25px",
            backgroundColor: "white",
            fontSize: "10px",
            color: "black",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          Free Download
        </Button>
      </Box>
    </>
  );
};

export default Header;
