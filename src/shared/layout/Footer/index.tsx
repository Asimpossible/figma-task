import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='footer flex flex-col justify-between mt-[13px] py-8 px-[100px] h-[168px] bg-textBlack'>
                <div className="footer__heading flex justify-end w-full text-textWhite h-[22px] font-inter text-base leading-[22.4px]">
                    <div className='w-[352px]'>
                        <ul className='flex justify-between'>
                            <li className='cursor-pointer'>Events</li>
                            <li className='cursor-pointer'>About Us</li>
                            <li className='cursor-pointer'>Contact Us</li>
                            <li className='cursor-pointer text-textGrayer'>Sign in</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__footing flex items-start justify-between ">
                    <div className="footing__left w-[136px] h-[30px]"><img src="/images/title2.svg" alt="" /></div>
                    <div className="footing__right flex gap-3 items-center cursor-pointer">
                        <span className='w-6 h-6'><img src="/images/mail.svg" alt="" /></span>
                        <span className='font-inter font-medium text-[16px] leading-6 text-[#FFF5F6]'>eventslink@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
