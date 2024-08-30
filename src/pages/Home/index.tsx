import { Categories, Heading } from '@/shared/components'
import { Header } from '@/shared/layout'
import React from 'react'

const Index: React.FC = () => {
    return (
        <div>
            <Header />
            <Heading />
            <div className="coloured bg-textWhite">
                <Categories />
            </div>
        </div>
    )
}

export default Index
