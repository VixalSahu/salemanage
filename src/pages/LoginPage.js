// src/pages/LoginPage.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input } from '@chakra-ui/react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Attempting login...');
    if (username === 'admin123' && password === '12345') {
      localStorage.setItem('token', 'dummy-token');
      console.log('Login successful, navigating to dashboard...');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box p={5}>
      <Input 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        mb={3}
      />
      <Input 
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        mb={3}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
}

export default LoginPage;
