import React from 'react';
import { StickyNavbar } from './Header/StickyNavbar';
import Contact from './Header/Contact';
import HeaderLogo from './Header/HeaderLogo';
import LocalistionHeader from './Header/LocalistionHeader';
import ListeTitle from './Header/HeaderTitle';
import { CarouselWithContent } from './Carousel/CarouselCp';
import IndexInfo from './SociéteInfo/Index';
import Prérique from './PrériqueCmp/Prérique';
import Identify from './PrériqueCmp/Identify';
import Achat from './PrériqueCmp/Achat';
import Overlay_Card from './PrériqueCmp/Overlay_Card';
import Overly_Card2 from './PrériqueCmp/Overly_Card2';
import Boutique from './PrériqueCmp/Boutique';
import Horaire from './PrériqueCmp/Horaire';
import IndexContact from "./Contact/IndexContact"
const Index = () => {
  return (
    <div>
      <StickyNavbar />
      <div className='flex flex-row align-center justify-around border-b-2 border-green pb-8'>
        <Contact />
        <HeaderLogo />
        <LocalistionHeader />
      </div>
      <div>
        <ListeTitle />
      </div>
      <div>
        <CarouselWithContent />
      </div>
      <div >
        <IndexInfo />
      </div>
      <div>
        <Prérique />
      </div>
      <div>
        <Identify />
      </div>
      <div>
        <Achat />
        <Overlay_Card/>
        <Overly_Card2/>
      </div>
      <div>
        <Boutique/>
        <Horaire/>
      </div>
      <div>
        <IndexContact/>
      </div>
    </div>
  );
}

export default Index;
