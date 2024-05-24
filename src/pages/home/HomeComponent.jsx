import React from 'react';
import clsx from 'clsx';
import HomeCarousell from './HomeCarousell';
import HeroHome from '../common/HeroHome';

const HomeComponent = () => {
  return (
    <div className={clsx('flex flex-col w-full h-full items-center')}>
      <HomeCarousell />
      <HeroHome />
    </div>
  );
};

export default HomeComponent; // Make sure to export the component
