import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgImage from "../assets/login_bg.png";
import logoImage from "../assets/login_logo.png";
import Header from "../component/Header";
import { CustomSwitchWithLabel } from "../component/CustomSwitchWithLabel";
import Footer from "../component/Footer";
import CommonTextField from "../component/CommonTextField";

// Custom theme for consistent styling
const theme = createTheme({
  palette: {
    primary: {
      main: "#62c2b3", // Your teal color
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "24px",
        },
      },
    },
  },
});

const Login = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Header position="absolute" />

          {/* Left Side - Paper with Form */}
          <Box
            sx={{
              width: "51.4%",
              minWidth: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "30%",
                minWidth: "350px",
                padding: "48px",
                borderRadius: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mb: 4.5,
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1.06,
                    color: "#4FD1C5",
                    fontSize: "32px",
                    lineHeight: "130%",
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#A0AEC0",
                    fontSize: "14px",
                    lineHeight: "140%",
                    fontWeight: 700,
                  }}
                >
                  Enter your email and password to sign in
                </Typography>
              </Box>

              <Box component="form" noValidate>
                <Box sx={{
                    marginBottom:3
                }}>
                  <CommonTextField
                    label="Email"
                    placeholder="Your email address"
                    type="email"
                  />
                </Box>
                <Box sx={{
                    marginBottom:3
                }}>
                  <CommonTextField
                    label="Password"
                    placeholder="Your password"
                    type="password"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Box>
                    <CustomSwitchWithLabel
                      label="Remember me"
                      switchProps={{
                        activeColor: "#62c2b3",
                        inactiveColor: "#E2E8F0",
                      }}
                    />
                  </Box>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ color: "#62c2b3", textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    backgroundColor: "#62c2b3",
                    "&:hover": {
                      backgroundColor: "#52b2a3",
                    },
                  }}
                >
                  Submit
                </Button>

                <Grid container justifyContent="center">
                  <Typography variant="body2" sx={{ color: "#718096" }}>
                    Don't have an account?{" "}
                    <Link
                      href="/signup"
                      variant="body2"
                      sx={{
                        color: "#62c2b3",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Grid>
              </Box>
            </Paper>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "862px",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderBottomLeftRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="Logo"
              sx={{ width: 357.5, height: 91.8 }}
            />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
