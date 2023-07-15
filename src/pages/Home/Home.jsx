import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Carousel, Layout, Logo, Socials } from '.';
import { dataStore } from '../../store/dataStore';

export const Home = () => {
  const location = useLocation();
  const { theme, setTheme, setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  
  useEffect(() => { location.pathname === '/' && setLogoPosition('top right'); }, [location]);

  return (
    <>
      <Logo />
      {location.pathname === '/' && (
        <>
          <Carousel />
          <Layout />
          <Socials />
        </>
      )}
    </>
  );
};
