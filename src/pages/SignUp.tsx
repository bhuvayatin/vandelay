import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Switch,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import bgImage from "../assets/Image.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CommonButton from "../component/CommonButton";
import { CustomSwitchWithLabel } from "../component/CustomSwitchWithLabel";
import CommonTextField from "../component/CommonTextField";

const SignUp = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            height: "520px",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />

          <Container
            sx={{
              mt: 6,
              mb: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                mb: 4,
                color: "white",
                maxWidth: 350,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "130%",
                }}
              >
                Welcome!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  lineHeight: "140%",
                }}
              >
                Use these awesome forms to login or create new account in your
                project for free.
              </Typography>
            </Box>
            <Paper
              elevation={3}
              sx={{
                px: { xs: 2, sm: 4, md: 6.44 },
                py: { xs: 2, sm: 4, md: 5.69 },
                borderRadius: 4,
                width: "100%",
                maxWidth: 350,
              }}
            >
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "140%",
                }}
              >
                Register with
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{
                  marginBottom: { xs: "2", sm: "4", md: "45.5px" },
                }}
              >
                <CommonButton
                  variant="outlined"
                  sx={{
                    minWidth: 0,
                    p: "24px",
                    borderRadius: "15px",
                    borderColor: "#e2e8f0",
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 32, color: "#2d3748" }} />
                </CommonButton>
                <CommonButton
                  variant="outlined"
                  sx={{
                    minWidth: 0,
                    p: "24px",
                    borderRadius: "15px",
                    borderColor: "#e2e8f0",
                  }}
                >
                  <AppleIcon sx={{ fontSize: 32, color: "#2d3748" }} />
                </CommonButton>
                <CommonButton
                  variant="outlined"
                  sx={{
                    minWidth: 0,
                    p: "24px",
                    borderRadius: "15px",
                    borderColor: "#e2e8f0",
                  }}
                >
                  <GoogleIcon sx={{ fontSize: 32, color: "#2d3748" }} />
                </CommonButton>
              </Stack>

              <Typography
                sx={{
                  mb: 3,
                  textAlign: "center",
                  color: "#A0AEC0",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "140%",
                }}
              >
                or
              </Typography>

              <Stack spacing={3}>
                <Box sx={{
                    marginBottom:3
                }}>
                  <CommonTextField
                    label="Name"
                    placeholder="Your full name"
                    type="text"
                  />
                </Box>

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

                <Box>
                  <CustomSwitchWithLabel
                    label="Remember me"
                    switchProps={{
                      activeColor: "#62c2b3",
                      inactiveColor: "#E2E8F0",
                    }}
                  />
                </Box>
                <Box>
                  <CommonButton
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 1.5,
                      height: "45px",
                      color: "#fff",
                      backgroundColor: "#62c2b3",
                      "&:hover": { backgroundColor: "#4bb9aa" },
                    }}
                  >
                    Sign Up
                  </CommonButton>
                </Box>
              </Stack>

              <Typography
                variant="body2"
                align="center"
                mt={2.75}
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#A0AEC0",
                }}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ color: "#62c2b3", textDecoration: "none" }}
                >
                  Sign in
                </Link>
              </Typography>
            </Paper>
          </Container>

          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
