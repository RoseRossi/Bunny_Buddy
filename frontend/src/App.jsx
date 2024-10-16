import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import LandingPage from './LandingPage'; 
import logo from '/bunnycon.svg'
import ChatPage from './ChatPage';
import Login from './Login';
import SignUp from './SignUp';

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setIsAuthenticated(false); 
  };

  return (
    <div>
      <AppBar position="sticky" sx={{backgroundColor:"#3a5a60 "}} elevation={1}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            
            <Button variant="h6" sx={{ flexGrow: 0 }} component={Link} to="/">
              <img src={logo} alt="Logo" style={{ width: '40px' }} />
            </Button>
          </Box>
          <Box>
            {isAuthenticated ? (
              <>
                <Button color="inherit" component={Link} to="/stories">
                  Mi chat
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/signup">
                  Sign Up
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}
