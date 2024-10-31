import React from 'react'
import mobile from '../Assects/mobile.png'
import p from '../Assects/p.png'
import i1 from '../Assects/1.png'
import i2 from '../Assects/2.png'
import i3 from '../Assects/3.png'
import i5 from '../Assects/5.png'
import sicon1 from '../Assects/pi1.png'
import sicon2 from '../Assects/pi2.png'
import sicon3 from '../Assects/pi3.png'
import hbimg from '../Assects/hbimg.png'
import '../App.css'
import vector from '../Assects/Vector.png'



const HeroSection = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between items-center w-full px-[100px] bg-[#EEF9FF] overflow-hidden'>

                <img
                    src={vector}
                    alt='vector'
                    className='absolute right-0 transform  animate-spin-slow z-0'
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div className='flex flex-col w-[50%] gap-4 z-10'>
                    <div className='text-[48px] font-bold'>Largest <span className='text-[#388FCB]'>Wholesalers</span><br /> of <span className='text-[#388FCB]'>Mobile Phones</span></div>
                    <div className='text-[16px] font-normal'>Supply that meets Demand. Get the best wholesale prices of used and refurbished Mobile Stocks</div>
                    <div className='text-[18px] font-normal text-[#388FCB]'>Learn More →</div>
                    <div className='flex w-full justify-between'>
                        <input placeholder='✉ Email' className='p-[10px] rounded-[25px] w-[50%] border-solid border-2' />
                        <button className='bg-[#7CC140] py-[15px] px-[25px] text-white rounded-[25px]'>Subscribe →</button>
                        <button className='bg-[#388FCB] py-[15px] px-[25px] text-white rounded-[25px]'>↓ Stock List</button>
                    </div>
                    <div className='flex flex-row w-full gap-4'>
                        <div className='flex flex-row gap-[6px]'>
                            <img src={i1} alt='icon' />
                            <img src={i2} alt='icon' />
                            <img src={i3} alt='icon' />
                            <img src={i3} alt='icon' />
                            <img src={i5} alt='icon' />
                        </div>
                        <div className='flex flex-row w-[40%] items-center gap-1'>
                            <img src={p} alt='icon' />
                            <div className='text-[16px] font-semibold'><span className='text-[#388FCB]'>400k </span><span className='text-[#7CC140]'>people Registered</span> </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-[50%] items-center justify-center z-10'>
                    <img src={mobile} alt='mobile' className='w-[270px] h-[495px] z-1' />
                </div>
            </div>
            <div className='bg-[#EEF9FF] flex flex-col gap-1'>
                <div className='p-1 w-[30%] bg-[#7CC140] rounded-tr-[5px] rounded-br-[5px]'></div>
                <div className='p-1 w-[40%] bg-[#388FCB] rounded-tr-[5px] rounded-br-[5px]'></div>
            </div>
            <div
                style={{
                    overflow: "hidden",
                    width: "100%",
                    backgroundColor: "#EEF9FF",
                    paddingTop: "30px",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        animation: "slide 15s linear infinite",
                        minWidth: "150%",
                    }}
                    className="flex flex-row justify-between"
                >
                    <img src={sicon1} alt="sicon" />
                    <img src={sicon2} alt="sicon" />
                    <img src={sicon3} alt="sicon" />
                    <img src={sicon1} alt="sicon" />
                    <img src={sicon2} alt="sicon" />
                    <img src={sicon3} alt="sicon" />
                    <img src={sicon1} alt="sicon" />
                    <img src={sicon2} alt="sicon" />
                    <img src={sicon3} alt="sicon" />
                    <img src={sicon1} alt="sicon" />
                    <img src={sicon2} alt="sicon" />
                    <img src={sicon3} alt="sicon" />
                    <img src={sicon1} alt="sicon" />
                    <img src={sicon2} alt="sicon" />
                    <img src={sicon3} alt="sicon" />
                    <img src={sicon1} alt="sicon" />
                    <img src={sicon2} alt="sicon" />
                    <img src={sicon3} alt="sicon" />
                </div>

                <style>
                    {`
      @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-40%); }
      }
    `}
                </style>
            </div>


            <img src={hbimg} className='w-full mt-[-4px]' alt='sicon' />
        </div>
    )
}

export default HeroSection