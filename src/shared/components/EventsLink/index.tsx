import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='parentDiv my-[150px] h-[349.46px] px-[100px]'>
                <div className="eventslink rounded-[20px] h-full w-full bg-textSkin flex justify-around items-center">
                    <div className="content w-[606px] h-[190px]">
                        <div className="title text-textBlack font-poppins font-semibold text-[32px] leading-[48px]">Join Eventslink</div>
                        <div className="description text-textBlack font-montserrat font-normal text-xl leading-[24.38px]">People use Eventslink to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.</div>
                        <button className='w-[140px] h-[46px] bg-textPink text-white font-poppins font-medium text-xl leading-5 items-center rounded-lg mt-6'>Sign Up</button>
                    </div>
                    <div className="icon w-[223px] !h-[229.46]"><img src="/images/Eventslink.svg" alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Index
