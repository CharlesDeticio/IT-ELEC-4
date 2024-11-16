import React from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Divider,
  FormControlLabel,
  FormGroup,
  Checkbox,
  AppBar
} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const RedditSignUp = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'lightgray',
      }}
    >
        <AppBar sx={{border: 2, borderColor: 'lightgray', }}>
      <Box
        sx={{
          position: 'absolute',
          left: '40px',
        }}
      >
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo.png"
          alt="Reddit"
          style={{ width: '150px' }}
        />
      </Box>
      </AppBar>
        
      <Box
        component="form"
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
          padding: 8,
          paddingLeft:10,
          paddingRight:10,
          borderRadius: 5,
          boxShadow: 3,
          height:'2000px',
          width:'500px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="left" sx={{ width: '100%', fontWeight: 'bold' }}>
          Sign Up
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: '20px', color: 'gray' }}
        >
          By continuing, you agree to our <Link href="#">User Agreement</Link> and acknowledge that you understand our <Link href="#">Privacy Policy</Link>.
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="I agree to get emails about cool stuff on Reddit" />
        </FormGroup>
        <Button
  fullWidth
  variant="outlined"
  startIcon={<PhoneAndroidIcon />}
  sx={{
    marginBottom: 1,
    borderRadius: '20px',
    color: 'black',
    paddingLeft: 2, borderColor: 'lightgray',
  }}
>
  Continue with Phone Number
</Button>
<Button
  fullWidth
  variant="outlined"
  startIcon={<GoogleIcon />}
  sx={{
    marginBottom: 1,
    borderRadius: '20px',
    color: 'black',
    paddingLeft: 2, borderColor: 'lightgray',
  }}
>
  Continue with Google
</Button>
<Button
  fullWidth
  variant="outlined"
  startIcon={<AppleIcon />}
  sx={{
    marginBottom: 2,
    borderRadius: '20px',
    color: 'black',
    paddingLeft: 2, 
    borderColor: 'lightgray',
  }}
>
  Continue with Apple
</Button>

        <Divider sx={{ width: '100%', marginY: 2 }}>OR</Divider>

        <TextField
          required
          id="email"
          label="Email"
          name="email"
          
          autoComplete="email"
          sx={{ marginBottom: 2 , border: 'none',backgroundColor: 'lightgray'}}
        />


        <Typography variant="body2" align="Left" sx={{ marginTop: 2 }}>
          Already a Redditor?{' '}
          <Link href="#" variant="body2">
            Login
          </Link>
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: 'lightgray',
            color: 'white',
            '&:hover': {
              backgroundColor: 'lightgray',
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default RedditSignUp;
