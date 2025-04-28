import {
  Box,
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
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CommonButton from "./CommonButton";

const Header = ({ position }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    width: "100%",
    maxWidth: { xs: "90%", sm: "670px", md: "900px", lg: "1200px" },
    mx: "auto",
    py: { xs: 2, sm: 2.5, md: 3 },
    px: { xs: 2, sm: 3, md: 4 },
    ...(position && {
      position: position,
      top: "24px",
      left: "50%",
      transform: "translateX(-50%)",
      border: "1.5px solid #FFFFFF",
      bgcolor: "#fff",
      color: "#2D3748",
      boxShadow: "0px 7px 23px rgba(0, 0, 0, 0.05)",
      backdropFilter: "blur(21px)",
      borderRadius: "15px",
    }),
  }}
>


        <Typography
          fontWeight={700}
          fontSize={{ xs: "1rem", sm: "1.25rem", md: "1.5rem" }}
          sx={{
            color: position ? "#2D3748" : "#fff",
          }}
        >
          VANDELAY INDUSTRIES
        </Typography>


        {isMobile ? (
          <>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: position ? "#000" : "#fff"
              }}
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

                <CommonButton
                  fullWidth
                  isRounded
                  sx={{ mt: 2, backgroundColor: "white", color: "black" }}
                >
                  Free Download
                </CommonButton>
              </Box>
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={3} alignItems="center">
            {navLinks.map((item) => (
              <CommonButton
                key={item.label}
                component={Link}
                to={item.to}
                startIcon={item.icon}
                variant="text"
                isWhite
                sx={{
                  ...(position
                    ? {
                      color: "#2D3748",
                    }
                    : {
                      color: "#fff",
                    }),
                }}
              >
                {item.label}
              </CommonButton>
            ))}
            <CommonButton isRounded
              sx={{
                ...(position
                  ? {
                    background: "linear-gradient(to right, #313860, #151928)",
                    color: "#FFFFFF"
                  }
                  : {
                    background: "white"
                  }),
              }}
            >
              Free Download
            </CommonButton>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Header;
