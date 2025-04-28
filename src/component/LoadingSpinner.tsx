import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress 
        sx={{
          color: '#62c2b3',
          '&.MuiCircularProgress-indeterminate': {
            animationDuration: '800ms', 
          }
        }}
        size={60}
        thickness={4}
      />
    </Box>
  );
};

export default LoadingSpinner;