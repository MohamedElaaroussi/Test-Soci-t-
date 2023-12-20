import { WidthNormal } from '@mui/icons-material';
import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

const ImageLogo = () => {
    return (
        <div className="relative w-[35rem] ml-[4rem] mb-6">
            <img
                src="L00011.jpg"
                alt="Description de l'image"
                className=" h-auto"
            />
            <div className="absolute flex flex-col justify-center content-center ml-[34%] top-10 left-10 text-white font-bold text-shadow-lg">
                <div className='text-center mr-8'>9.9/10</div>
                <div>
                    <StarRateIcon className='text-[yellow]' />
                    <StarRateIcon className='text-[yellow]' />
                    <StarRateIcon className='text-[yellow]' />
                    <StarRateIcon className='text-[yellow]' />
                    <StarRateIcon className='text-[yellow]' />
                </div>
                <div className='text-2xl font-normal mt-3'> EXCELLENT</div>
                <span className='font-light text-sm text-center'>Basé sur 89 avis</span>
                <img className='mt-3 ' src="Google-Reviews.png" width={120} height={WidthNormal} />
            </div>
        </div>
    );
}

export default ImageLogo;
