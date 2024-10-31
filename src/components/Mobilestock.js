import React from 'react';
import iphone from '../Assects/Iphone.png';
import footer from '../Assects/footer.png';
import dots from '../Assects/dots.png'

const Mobilestock = () => {
    return (
        <div className='flex flex-col w-full items-center justify-center gap-10'>
            <div>
                <img src={dots} alt='qwerty' className='mr-[100px] mt-[-300px] w-[120px] absolute right-0 transform  animate-spin-custom z-10 left-0' />
            </div>
            <div className='text-[48px] font-bold'>
                <span className='text-white bg-gradient-to-b from-[#7CC140] to-[#388FCB] rounded-[50%] p-4 '>
                    Mobile
                </span>

                <span className='text-[#388FCB]'> Stock</span>
            </div>
            <div>
                <img src={dots} alt='qwerty' className='mr-[100px] mt-[-100px] w-[120px] absolute right-0 transform  animate-spin-custom z-10 left-0' />
            </div>
            <div className='text-[20px] font-medium'>
                We stay up to date with the latest technology trends and offer innovative solutions that help you stay ahead in competition.
            </div>
            <div className='flex flex-row w-full justify-between px-[80px]'>
                {Array(4).fill().map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center p-[2px] rounded-xl bg-gradient-to-b from-[#7CC140] to-[#388FCB]"
                        style={{ width: "fit-content" }}
                    >
                        <div className="flex flex-col items-center justify-center bg-[#F2FBFF] p-7 rounded-xl">
                            <img src={iphone} alt="iphone" className="w-[91px] h-[109px]" />
                            <p className="text-[20px]">iPhone 14 Pro Max</p>
                            <p className="text-[12px]">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
                        </div>
                    </div>
                ))}
            </div>
            <img src={footer} alt='footer' />
        </div>
    );
};

export default Mobilestock;
