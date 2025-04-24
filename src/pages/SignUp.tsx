import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  IconButton,
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


const SignUp = () => {


  return (
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
      {/* Header */}
<Header/>

      {/* Main content */}
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
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="subtitle1">
            Use these awesome forms to login or create new account in your
            project for free.
          </Typography>
        </Box>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4, md: 6 },
            borderRadius: 4,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Register with
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            <IconButton
              size="large"
              sx={{
                border: "1px solid #e2e8f0", // soft gray border
                borderRadius: "20%", // rounded square
                width: 64,
                height: 64,
              }}
            >
              <FacebookIcon sx={{ fontSize: 32, color: "#2d3748" }} />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                border: "1px solid #e2e8f0",
                borderRadius: "20%",
                width: 64,
                height: 64,
              }}
            >
              <AppleIcon sx={{ fontSize: 32, color: "#2d3748" }} />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                border: "1px solid #e2e8f0",
                borderRadius: "20%",
                width: 64,
                height: 64,
              }}
            >
              <GoogleIcon sx={{ fontSize: 32, color: "#2d3748" }} />
            </IconButton>
          </Stack>

          <Typography
            sx={{
              mb: 3,
              textAlign: "center",
              color: "#A0AEC0",
              fontSize: "18px",
            }}
          >
            or
          </Typography>

          <Stack spacing={2}>
            <label style={{ fontWeight: 600, fontSize: "14px", color: "#555" }}>
              Name
            </label>
            <TextField
              placeholder="Enter your name"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "white",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  "& fieldset": {
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#E2E8F0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#E2E8F0",
                  },
                },
              }}
            />

            <label style={{ fontWeight: 600, fontSize: "14px", color: "#555" }}>
              Email
            </label>
            <TextField
              placeholder="Enter your email"
              type="email"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "white",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  "& fieldset": {
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#E2E8F0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#E2E8F0",
                  },
                },
              }}
            />

            <label style={{ fontWeight: 600, fontSize: "14px", color: "#555" }}>
              Password
            </label>
            <TextField
              placeholder="Enter your password"
              type="password"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "white",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  "& fieldset": {
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#E2E8F0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#E2E8F0",
                  },
                },
              }}
            />
          </Stack>

          <FormControlLabel
            control={<Switch />}
            label="Remember me"
            sx={{ mt: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, bgcolor: "#62c2b3", ":hover": { bgcolor: "#4bb9aa" } }}
          >
            Sign Up
          </Button>

          <Typography variant="body2" align="center" mt={2}>
            Already have an account? <Link to="/login">Sign in</Link>
          </Typography>
        </Paper>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: "center", py: 2, color: "white" }}>
        <Typography variant="caption">
          © 2025, Made with Lorem for a better web
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
