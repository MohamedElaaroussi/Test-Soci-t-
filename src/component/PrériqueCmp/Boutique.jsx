import React from 'react';

const Boutique = () => {
    return (
        <div>
            <div className='mt-10 text-center'>
                <div className='text-sm text-[#feba03]'>
                    Anthéor Paris
                </div>
                <div className='text-xl font-semibold'>
                    Se Rendre en Boutique
                </div>
                <div className='flex justify-center'>
                    <span className='text-gray-300 '>________________ </span>
                    <span><svg class="h-4 w-4 text-[#feba03] mt-[11px] mr-2 ml-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="4" /></svg></span>
                    <span className='text-gray-300'> ________________ </span>
                </div>

            </div>
        </div>
    );
}

export default Boutique;
