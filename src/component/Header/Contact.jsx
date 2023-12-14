import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-row gap-3 ml-6 mt-6'>
            <div>
                <img src='phone.png' className='mt-1/3' width={35} height={35} />
            </div>
            <div className='' >
                <h5>
                    01 42 89 53 18
                </h5>

                <h5 className=''>
                    contact@antheor-paris.fr
                </h5>
            </div>
        </div >
    );
}

export default Contact;
