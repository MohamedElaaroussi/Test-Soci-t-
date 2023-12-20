import React from 'react';

const Experte = () => {
    return (
        <div className='mr-[19.4rem] mt-10'> 
            <div className='font-bold text-[#feba03] text-xl'>Expertise gratuit</div>
            <div className='flex mt-4 gap-4'>
                <span className=''> 
                    <svg class="h-8 w-8 text-[#feba03]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                </span>
                <h4 className='mt-2 flex gap-2 font-semibold'>En boutique à Paris ( Cadre de Sécurisé )</h4>
            </div>
            <div className='flex mt-4 gap-4'>
                <span className=''> 
                    <svg class="h-8 w-8 text-[#feba03]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                </span>
                <h4 className='mt-2 flex gap-2 font-semibold'>Ou à votre Domicile ( Sur rendez-vous ) </h4>
            </div>
            
        </div>
    );
}

export default Experte;
