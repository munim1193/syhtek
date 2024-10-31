import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assects/Vector (1).png'

const Navbar = () => {
    return (
        <div className='rounded-tl-[15px] rounded-tr-[15px] flex flex-col items-center w-full z-20'>
            <div className='flex flex-row justify-between w-[65%] items-center p-[25px] pb-[50px]'>
                <Link className=' hover:border-b-4 hover:border-[#7CBAA9]  text-[18px]'>Home</Link>
                <Link className=' hover:border-b-4 hover:border-[#7CBAA9]  text-[18px]'>About Us</Link>
                <Link className=' hover:border-b-4 hover:border-[#7CBAA9]  text-[18px]'>Wholesale</Link>

                <Link className=''>
                    <img src={logo} alt='logo' />
                </Link>

                <Link className=' hover:border-b-4 hover:border-[#7CBAA9]  text-[18px]'>Service</Link>
                <Link className=' hover:border-b-4 hover:border-[#7CBAA9]  text-[18px]'>News</Link>
                <Link className=' hover:border-b-4 hover:border-[#7CBAA9]  text-[18px]'>How to Works</Link>
            </div>
        </div>
    )
}

export default Navbar