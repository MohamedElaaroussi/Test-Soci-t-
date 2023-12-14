import React from 'react';
import { StickyNavbar } from './Header/StickyNavbar';
import Contact from './Header/Contact';
import HeaderLogo from './Header/HeaderLogo';
import LocalistionHeader from './Header/LocalistionHeader';
import ListeTitle from './Header/HeaderTitle';
import {  CarouselWithContent } from './Carousel/CarouselCp';

const Index = () => {
  return (
    <div>
      <StickyNavbar/>
      <div className='flex flex-row align-center justify-around border-b-2 border-green pb-8'>
        <Contact/>
        <HeaderLogo/>
        <LocalistionHeader/>
      </div>
      <div>
        <ListeTitle/>
      </div>
      <div>
      <CarouselWithContent/>
      </div>
    </div>
  );
}

export default Index;
