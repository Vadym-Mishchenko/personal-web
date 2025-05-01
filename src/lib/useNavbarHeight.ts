import { useEffect, useState } from 'react';

export const useNavbarHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleResize = () => {
      setHeight(navbar.offsetHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
};
