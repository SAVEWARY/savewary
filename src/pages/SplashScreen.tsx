
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Progress } from '@/components/ui/progress';

const SplashScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        navigate('/auth');
      }, 500);
    }, 2000);

    // Animation for progress bar
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = Math.random() * 10;
        const nextProgress = prevProgress + increment;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-secondary/20 dark:from-gray-900 dark:to-background">
      <div className="animate-fade-in flex flex-col items-center justify-center gap-8">
        <Logo size="lg" />
        
        <p className="text-lg text-center font-medium text-muted-foreground animate-slide-up px-6 mt-2">
          Épargnez ensemble, en toute transparence
        </p>
        
        <div className="w-64 mt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Progress value={progress} className="h-1.5" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
