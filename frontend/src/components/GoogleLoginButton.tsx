// components/GoogleLoginButton.tsx
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function GoogleLoginButton() {
  const handleLoginSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;
    
    // Send ID token to your backend
    const response = await axios.post('http://localhost:8000/auth/google', {
      token: idToken,
    });

    // Save the returned JWT or user info in localStorage or context
    console.log('Backend response:', response.data);
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => console.log('Login Failed')}
    />
  );
}