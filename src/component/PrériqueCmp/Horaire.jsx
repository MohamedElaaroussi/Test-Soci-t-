import React from 'react';
import { WidthNormal } from '@mui/icons-material';

import StarRateIcon from '@mui/icons-material/StarRate';

const Horaire = () => {
    return (
        <div className='flex'>
            <div className="relative w-[35rem] ml-[4rem] mb-6">
                <img
                    src="L00011.jpg"
                    alt="Description de l'image"
                    className=" h-[26rem] w-[26rem]"
                />
                <div className="absolute flex flex-col justify-start content-start ml-[2rem] top-10  text-white font-bold text-shadow-lg">
                    <div>
                        Horaire d'ouverture
                    </div>
                    <div className='flex flex-col gap-2 text-sm font-normal mt-4'>
                        <span>8, rue corvetto - 75008 Paris</span>
                        <span>Métro,Miromisnil(ligne 9 et 13)</span>
                        <span>Bus:94 (Lisbonne ou Mairie du 8éme)</span>
                    </div>
                    <div className='flex flex-col font-normal mt-3'>
                        <div className='flex flex-row'>
                            <div className='w-[5rem] '>Lundi  </div> <span> : de 13h à 17h</span>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-[5rem] '>Mardu </div> <span>: de 13h à 17h</span>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-[5rem] '>Mercredi  </div> <span> : de 13h à 17h</span>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-[5rem] '>jeudi  </div> <span> : de 13h à 17h</span>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-[5rem] '>vendredi  </div> <span> : de 13h à 17h</span>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-[5rem] '>samedi  </div> <span> : de 13h à 17h</span>
                        </div>
                    </div>
                    <div className='text-xl font-medium mt-2'>
                        <span className='text-[yellow]'>SUR RENDEZ-VOUS</span>
                        <div className='mt-2'>DE 17h à 19h00</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='border-2 '>
                    <div>
                        <div class="relative w-full h-96">
                            <iframe class="absolute top-0 left-0 w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                                frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Horaire;
