import { Categories, Heading, PopularEvents } from '@/shared/components'
import { Header } from '@/shared/layout'
import React from 'react'

const Index: React.FC = () => {
    return (
        <div>
            <Header />
            <Heading />
            <div className="coloured bg-textWhite">
                <Categories />
                <PopularEvents />
            </div>
        </div>
    )
}

export default Index
