import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2'


const Index: React.FC = () => {
    return (
        <>
            <div className='header h-[80px] bg-textBlack text-textWhite flex justify-between items-center px-[100px] py-[17px]'>
                <div className='header__left'>
                    <ul className='!flex !items-center w-[540px] h-[46px] justify-center gap-10'>
                        <li className='cursor-pointer flex justify-end w-[136px] h-[30px]'>
                            <img src="/images/title1.svg" alt="" />
                        </li>
                        <li className='cursor-pointer text-[20px] font-poppins leading-[30px]'>Events</li>
                        <li className='cursor-pointer text-[20px] font-poppins leading-[30px]'>About Us</li>
                        <li className='cursor-pointer text-[20px] font-poppins leading-[30px]'>Contact Us</li>
                    </ul>
                </div>
                <div className='header__right flex justify-between items-center w-[226px]'>
                    <div className='w-[46px] h-[30px] flex items-start justify-center'>
                        <select className="block w-full bg-inherit pr-0.5 cursor-pointer rounded leading-tight focus:outline-none">
                            <option value="EN" className='w-full hover:bg-black cursor-pointer'>EN</option>
                        </select>
                    </div>
                    <div className='w-[120px] h-[30px]'>
                        <ul className='icons flex items-center justify-between'>
                            <li className='icon1 cursor-pointer w-6 h-6 text-[26px]'><CiSearch /></li>
                            <li className='icon2 cursor-pointer w-6 h-6 text-[26px]'><HiOutlineUser /></li>
                            <li className='icon3 cursor-pointer w-6 h-6 text-[26px]'><HiOutlineShoppingBag /></li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Index
