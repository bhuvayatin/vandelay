import {
  Box,
  Typography,
  Button,
  Link,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import bgImage from "../assets/login_bg.png";
import logoImage from "../assets/login_logo.png";
import Header from "../component/Header";
import { CustomSwitchWithLabel } from "../component/CustomSwitchWithLabel";
import Footer from "../component/Footer";
import CommonTextField from "../component/CommonTextField";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = () => {
    navigate("/dashboard")
  }
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "",
            height: "100vh",
            overflow: "hidden",
            justifyContent: isMobile ? "center" : "",
            alignItems: isMobile ? "center" : "",
            position: "relative",
          }}
        >
          <Header position="absolute" />
          <Box
            sx={{
              width: isMobile ? "90%" : "51.4%",
              minWidth: isMobile ? "300px" : "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              order: isMobile ? 1 : "",
              margin: isMobile ? "20px auto" : "0 auto",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: isMobile ? "100%" : "30%",
                minWidth: isMobile ? "" : "350px",
                padding: isMobile ? "24px" : "48px",
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
                    fontSize: isMobile ? "28px" : "32px",
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
                  marginBottom: 3
                }}>
                  <CommonTextField
                    label="Email"
                    placeholder="Your email address"
                    type="email"
                  />
                </Box>
                <Box sx={{
                  marginBottom: 3
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
                  onClick={handleSubmit}
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

          {!isMobile && (
            <Box sx={{
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
            }}>
              <Box
                component="img"
                src={logoImage}
                alt="Logo"
                sx={{ width: "357.5px", height: "91.8px" }}
              />
            </Box>
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
