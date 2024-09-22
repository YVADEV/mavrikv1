import {
  Alert,
  Button,
  TextField,
  Box,
  Typography,
  styled,
  keyframes,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/user";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Import your image
import rightSideImage from '../../assets/auth.png';

// Define the animation
const subtleGoldPulse = keyframes`
  0% { box-shadow: 0 0 15px 0 rgba(236, 190, 23, 0.4); }
  50% { box-shadow: 0 0 20px 5px rgba(236, 190, 23, 0.5); }
  100% { box-shadow: 0 0 15px 0 rgba(236, 190, 23, 0.4); }
`;

const FormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '420px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  padding: theme.spacing(3),
  border: '1px solid rgba(236, 190, 23, 0.3)',
  animation: `${subtleGoldPulse} 3s infinite ease-in-out`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 0 25px 10px rgba(236, 190, 23, 0.6)',
  },
}));

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    city: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData, navigate));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        bgcolor: 'black',
      }}
    >
      {/* Left side - Register form */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          flexDirection: 'column',
        }}
      >
        <FormContainer>
          <Typography component="h1" variant="h4" color="white" mb={2}>
            Create Account
          </Typography>
          <Typography color="white" mb={4}>
            Fill in the details below to create your account.
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              type="text"
              id="firstName"
              autoComplete="given-name"
              value={userData.firstName}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              id="lastName"
              autoComplete="family-name"
              value={userData.lastName}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              type="text"
              id="username"
              autoComplete="username"
              value={userData.username}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="tel"
              id="phone"
              autoComplete="tel"
              value={userData.phone}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="email"
              value={userData.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              type="text"
              id="city"
              autoComplete="address-level2"
              value={userData.city}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="new-password"
              value={userData.password}
              onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { borderColor: 'whiteAlpha.400' },
                  '&.Mui-focused': { borderColor: 'white' },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end" sx={{ color: 'white' }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ 
                mt: 3, 
                mb: 2, 
                color: 'white', 
                borderColor: 'gold',
                borderRadius: '15px',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
              }}
              disabled={isFetching}
            >
              {isFetching ? "Registering..." : "Register"}
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Link to="/auth/login" style={{ color: 'white', textDecoration: 'none' }}>
                Already have an account? Sign In
              </Link>
            </Box>
          </Box>
        </FormContainer>
        <Typography color="white" fontSize="xs" textAlign="left" mt={3} maxWidth="420px">
          * Note that Expert Casa Nova CRM is made only for Desktop. 
          Copyright: EXPERT CASA NOVA REALESTATE L.L.C
        </Typography>
      </Box>
      {/* Right side - Image */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: { xs: '0%', md: '50%' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img 
          src={rightSideImage} 
          alt="Expert Casa Nova CRM"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Typography
          color="white"
          fontSize={{ xs: '36px', md: '48px', lg: '60px' }}
          fontWeight="bold"
          textAlign="center"
          zIndex={1}
          px={4}
          position="absolute"
        >
          Welcome to Expert Casa Nova CRM
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
