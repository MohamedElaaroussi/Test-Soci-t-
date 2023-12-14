import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TelegramIcon from '@mui/icons-material/Telegram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';



export function StickyNavbar() {

  return (
    <nav class="bg-[#101e44] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <div className='flex flex-wrap w-70'>

          <a href="#" class="flex items-center border-l-2 border-gray-600">
            <CallIcon className='text-[#f2f51a] mr-2 ml-4' />
            <span class="text-white self-center font-medium whitespace-nowrap dark:text-white">Etre Rapelé</span>
          </a>

          <a href="https://flowbite.com" class="flex items-center border-l-2 border-gray-600 ml-4">
            <DateRangeIcon className='text-[#f2f51a] mr-2 ml-4' />
            <span class="text-white self-center font-medium  whitespace-nowrap dark:text-white">Etre Rappelé</span>
          </a>

        </div>

        <div className='flex flex-wrap w-70'>

          <a href="https://flowbite.com" class="flex items-center border-l-2 border-gray-600">
            <TelegramIcon className='text-[#f2f51a] mr-2 ml-4' />
            <span class="text-white self-center font-medium whitespace-nowrap dark:text-white">Formilaire de contact</span>
          </a>

          <a href="https://flowbite.com" class="flex items-center border-l-2 border-gray-600 ml-4">
            <QuestionAnswerIcon className='text-[#f2f51a] mr-2 ml-4' />
            <span class="text-white self-center font-medium  whitespace-nowrap dark:text-white">Chat en ligne</span>
          </a>

        </div>
      </div>
    </nav >
  );
}