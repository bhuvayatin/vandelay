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
          width: isMobile ? "100%" : "939.5px",
          ...(position
            ? {
                position: position,
                left: "50%",
                transform: "translateX(-50%)",
                color: "#2D3748",
                bgcolor: "#fff",
                py: { xs: 2, md: 3, xl: 2.19 },
                top: "24px",
                border: "1.5px solid #FFFFFF",
                backdropFilter: "blur(21px)",
                boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)",
                px: { xs: 2, md: 3, xl: 3 },
                borderRadius: "15px",
              }
            : {
                marginLeft: "auto",
                marginRight: "auto",
                py: { xs: 2, md: 3, xl: 4.313 },
              }),
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            ...(position
              ? {
                  color: "#2D3748",
                }
              : {
                  color: "white",
                }),
          }}
        >
          VANDELAY INDUSTRIES
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color:position ? "#000" : "#fff"
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
                  color:"#FFFFFF"
                  }
                : {
                  background:"white"
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
