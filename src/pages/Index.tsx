
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to SplashScreen
    navigate('/splash');
  }, [navigate]);

  // This component doesn't render anything, it just redirects
  return null;
};

export default Index;
