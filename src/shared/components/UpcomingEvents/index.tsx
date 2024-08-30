import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SampleUpcomingArrow } from './SliderArrow';

const Index: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        nextArrow: <SampleUpcomingArrow onClick={() => { }} />,
    };

    return (
        <>
            <div className='w-full flex justify-center relative'>
                <div className='my-[120px] h-[453px] w-[1368px] flex flex-col gap-5 items-center'>
                    <div className="title w-[1240px] text-textBlack font-poppins font-semibold text-[28px] flex justify-between">
                        <p className='cursor-default'>Upcoming events</p>
                        <p className='text-[20px] cursor-pointer'>See all</p>
                    </div>
                    <div className="events w-full h-[391px]">
                        <Slider {...settings} className='h-[453px] !px-[64px] !m-0 !box-absolute w-[1392px]'>
                            <div className='!w-[295px] h-[362.77px] cursor-pointer'>
                                <div className="image w-full cursor-pointer !h-[220px] bg-[url('/images/outdoor.svg')]"></div>
                                <div className="content px-2 flex flex-col gap-1 w-full h-[140px]">
                                    <div className="title  text-textBlack font-poppins font-semibold leading-9 text-2xl ">Outdoor Movie Night</div>
                                    <div className="date flex gap-1 items-end justify-start h-6 text-textGrayer font-poppins font-normal text-base">
                                        <span><img src="/images/calendar.svg" alt="" /></span>
                                        <span>MON, JUL 21</span>
                                        <span className='bg-textGrayer mb-2.5 w-[5px] h-[5px] rounded-full mx-2'></span>
                                        <span>4:00 PM</span>
                                    </div>
                                    <div className="order h-6 flex gap-1 !items-center text-textGrayer font-poppins font-normal text-base">
                                        <div className="icon w-6 h-6"><img src="/images/check-circle.svg" alt="" /></div>
                                        <div className="orederContent mt-0.5">18 going</div>
                                    </div>
                                    <div className="price mt-2 text-textPink h-8 flex items-center gap-1 font-poppins font-semibold text-xl">
                                        <span className='ticketIcon w-8'><img src="/images/Ticket.svg" alt="" /></span>
                                        <span>$45</span>
                                    </div>
                                </div>
                            </div>
                            <div className='!w-[295px] h-[362.77px] cursor-pointer'>
                                <div className="image w-full cursor-pointer !h-[220px]  bg-[url('/images/tech.svg')]"></div>
                                <div className="content px-2 flex flex-col gap-1 w-full h-[140px]">
                                    <div className="title  text-textBlack font-poppins font-semibold leading-9 text-2xl ">Tech Meetup</div>
                                    <div className="date flex gap-1 items-end justify-start h-6 text-textGrayer font-poppins font-normal text-base">
                                        <span><img src="/images/calendar.svg" alt="" /></span>
                                        <span>MON, JUL 21</span>
                                        <span className='bg-textGrayer mb-2.5 w-[5px] h-[5px] rounded-full mx-2'></span>
                                        <span>4:00 PM</span>
                                    </div>
                                    <div className="order h-6 flex gap-1 !items-center text-textGrayer font-poppins font-normal text-base">
                                        <div className="icon w-6 h-6"><img src="/images/check-circle.svg" alt="" /></div>
                                        <div className="orederContent mt-0.5">18 going</div>
                                    </div>
                                    <div className="price mt-2 text-textPink h-8 flex items-center gap-1 font-poppins font-semibold text-xl">
                                        <span className='ticketIcon w-8'><img src="/images/Ticket.svg" alt="" /></span>
                                        <span>$15</span>
                                    </div>
                                </div>
                            </div>
                            <div className='!w-[295px] h-[382.77px] cursor-pointer'>
                                <div className="image w-full cursor-pointer !h-[220px]  bg-[url('/images/photograph.svg')]"></div>
                                <div className="content px-2 flex flex-col gap-1 w-full h-[140px]">
                                    <div className="title text-textBlack font-poppins font-semibold text-2xl leading-7 h-[56px]">Photography Workshop</div>
                                    <div className="date flex gap-1 items-end justify-start h-6 text-textGrayer font-poppins font-normal text-base">
                                        <span><img src="/images/calendar.svg" alt="" /></span>
                                        <span>MON, JUL 21</span>
                                        <span className='bg-textGrayer mb-2.5 w-[5px] h-[5px] rounded-full mx-2'></span>
                                        <span>4:00 PM</span>
                                    </div>
                                    <div className="order h-6 flex gap-1 !items-center text-textGrayer font-poppins font-normal text-base">
                                        <div className="icon w-6 h-6"><img src="/images/check-circle.svg" alt="" /></div>
                                        <div className="orederContent mt-0.5">18 going</div>
                                    </div>
                                    <div className="price mt-2 text-textPink h-8 flex items-center gap-1 font-poppins font-semibold text-xl">
                                        <span className='ticketIcon w-8'><img src="/images/Ticket.svg" alt="" /></span>
                                        <span>$15</span>
                                    </div>
                                </div>
                            </div>
                            <div className='!w-[295px] h-[362.77px] cursor-pointer'>
                                <div className="image w-full cursor-pointer !h-[220px]  bg-[url('/images/jazz.svg')]"></div>
                                <div className="content px-2 flex flex-col gap-1 w-full h-[140px]">
                                    <div className="pop  text-textBlack font-poppins font-semibold leading-9 text-2xl ">Live Jazz Concert</div>
                                    <div className="date flex gap-1 items-end justify-start h-6 text-textGrayer font-poppins font-normal text-base">
                                        <span><img src="/images/calendar.svg" alt="" /></span>
                                        <span>MON, JUL 21</span>
                                        <span className='bg-textGrayer mb-2.5 w-[5px] h-[5px] rounded-full mx-2'></span>
                                        <span>4:00 PM</span>
                                    </div>
                                    <div className="order h-6 flex gap-1 !items-center text-textGrayer font-poppins font-normal text-base">
                                        <div className="icon w-6 h-6"><img src="/images/check-circle.svg" alt="" /></div>
                                        <div className="orederContent mt-0.5">18 going</div>
                                    </div>
                                    <div className="price mt-2 text-textPink h-8 flex items-center gap-1 font-poppins font-semibold text-xl">
                                        <span className='ticketIcon w-8'><img src="/images/Ticket.svg" alt="" /></span>
                                        <span>$15</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
