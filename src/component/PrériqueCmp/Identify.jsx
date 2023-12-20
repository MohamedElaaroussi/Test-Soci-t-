import React from 'react';

const Identify = () => {
    return (
        <div className=" flex justify-center mt-10 gap-[20rem]">
            <div className='flex '>
                <div className='w-[76px] h-[80px] bg-[#d27f06] flex justify-center pt-[7%]'>
                    <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 8H17M7 12H11M12 20L8 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H16L12 20Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='bg-[#fbf8f4] pt-3 pl-6 w-[20rem] h-[5.1rem]'>
                    <span className='flex justify-center w-[15rem] h-8'> N'oubliez pas de vous munir d'une piéce d'identité.</span>
                </div>
            </div>
            <div className='flex '>
                <div className='w-[76px] h-[80px] bg-[#d27f06] flex justify-center pt-[7%]'>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                </div>
                <div className='bg-[#fbf8f4] pt-3 pl-6 w-[20rem] h-[5.1rem]'>
                    <span className='flex justify-center w-[15rem] h-8'> N'oubliez pas de vous munir d'une piéce d'identité.</span>
                </div>
            </div>
        </div>
    );
}

export default Identify;
