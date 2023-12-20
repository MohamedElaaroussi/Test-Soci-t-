import React from 'react';
import Section1_Info from './Section1_Info';
import ImageLogo from './ImageLogo';
import Question from './Question';
import Experte from './Experte';

const IndexInfo = () => {
  return (
    <div >
      <div  className='flex ml-14'>
        <div >
          <Section1_Info />
          <ImageLogo />
        </div>
        <div className='ml-4 mt-20'>
          <img src="Rectangle-581.jpg" className='w-[34rem] h-[44rem]' />
        </div>
      </div>
      <div className='flex justify-between'>
        <Question/>
        <Experte/>
      </div>
    </div>
  );
}

export default IndexInfo;
