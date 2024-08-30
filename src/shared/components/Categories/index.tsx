import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className="categories py-[58px] text-textBlack">
                <ul className='h-[234px] px-[100px] flex justify-between'>
                    <li className='w-[190px] h-[234px] cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <div className="icon w-[190px] h-[190px] flex justify-center items-center border border-solid border-textBlack rounded-full"><img src='/images/workshops.svg' alt="" className='w-[60px] h-[60.65px]' /></div>
                        <div className="title font-poppins font-[500] text-[24px]">Workshops</div>
                    </li>
                    <li className='w-[190px] h-[234px] cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <div className="icon w-[190px] h-[190px] flex justify-center items-center border border-solid border-textBlack rounded-full"><img src='/images/exhibitions.svg' alt="" className='w-[60px] h-[60.65px]' /></div>
                        <div className="title font-poppins font-[500] text-[24px]">Exhibitions</div>
                    </li>
                    <li className='w-[190px] h-[234px] cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <div className="icon w-[190px] h-[190px] flex justify-center items-center border border-solid border-textBlack rounded-full"><img src='/images/food and drinks.svg' alt="" className='w-[60px] h-[60.65px]' /></div>
                        <div className="title font-poppins font-[500] text-[24px]">Food & Drinks</div>
                    </li>
                    <li className='w-[190px] h-[234px] cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <div className="icon w-[190px] h-[190px] flex justify-center items-center border border-solid border-textBlack rounded-full"><img src='/images/Holidays.svg' alt="" className='w-[60px] h-[60.65px]' /></div>
                        <div className="title font-poppins font-[500] text-[24px]">Holidays</div>
                    </li>
                    <li className='w-[190px] h-[234px] cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <div className="icon w-[190px] h-[190px] flex justify-center items-center border border-solid border-textBlack rounded-full"><img src='/images/sports icon.svg' alt="" className='w-[60px] h-[60.65px]' /></div>
                        <div className="title font-poppins font-[500] text-[24px]">Sports</div>
                    </li>
                    <li className='w-[190px] h-[234px] cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <div className="icon w-[190px] h-[190px] flex justify-center items-center border border-solid border-textBlack rounded-full"><img src='/images/concerts.svg' alt="" className='w-[60px] h-[60.65px]' /></div>
                        <div className="title font-poppins font-[500] text-[24px]">Concerts</div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Index
