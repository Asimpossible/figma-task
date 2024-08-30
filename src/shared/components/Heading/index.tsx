import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='heading relative h-[691px] bg-cover bg-center bg-no-repeat bg-[url("/images/heading.svg")]'>
                <div className='content absolute top-[409px] left-[100px] flex flex-col items-start gap-[40px] cursor-default'>
                    <div>
                        <div className="contentTitle font-poppins font-semibold text-[44px] leading-[66px] text-white">ENJOY YOUR CITY TO THE FULLEST</div>
                        <div className="contentDescription text-[#FFF5F6] text-[20px] w-[727px] font-montserrat font-medium leading-6">Find events that match your interests and book your tickets effortlessly. From theater shows to sports events, we have it all!</div>
                    </div>
                    <button className="contentButton text-white py-[16px] px-[32px] bg-textPink rounded-[8px] font-poppins font-[500] text-[20px]">Find Events</button>
                </div>
            </div >
        </>
    )
}

export default Index

