import React from 'react'

const Index: React.FC = () => {
    return (
        <>
            <div className='destination px-[100px] py-[43px] flex flex-col gap-4 '>
                <div className="destinations__title font-poppins text-textBlack font-semibold text-2xl leading-[42px] cursor-default">Popular destinations</div>
                <div className="destinationsContent h-[343px] flex justify-between">
                    <div className="card cursor-pointer flex flex-col items-center gap-3 w-[295px] h-full">
                        <div className="card__icon w-full h-[295px] rounded-full bg-cover bg-center bg-no-repeat bg-[url('/images/ibiza.svg')]"></div>
                        <div className="card__title font-poppins font-medium text-textBlack text-2xl leading-[36px]">Ibiza</div>
                    </div>
                    <div className="card cursor-pointer flex flex-col items-center gap-3 w-[295px] h-full">
                        <div className="card__icon w-full h-[295px] rounded-full bg-cover bg-center bg-no-repeat bg-[url('/images/Paris.svg')]"></div>
                        <div className="card__title font-poppins font-medium text-textBlack text-2xl leading-[36px]">Paris</div>
                    </div>
                    <div className="card cursor-pointer flex flex-col items-center gap-3 w-[295px] h-full">
                        <div className="card__icon w-full h-[295px] rounded-full bg-cover bg-center bg-no-repeat bg-[url('/images/Dubai.svg')]"></div>
                        <div className="card__title font-poppins font-medium text-textBlack text-2xl leading-[36px]">Dubai</div>
                    </div>
                    <div className="card cursor-pointer flex flex-col items-center gap-3 w-[295px] h-full">
                        <div className="card__icon w-full h-[295px] rounded-full bg-cover bg-center bg-no-repeat bg-[url('/images/Portofino.svg')]"></div>
                        <div className="card__title font-poppins font-medium text-textBlack text-2xl leading-[36px]">Portofino</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
