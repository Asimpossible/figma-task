import { Categories, EventsLink, Heading, PopularDestinations, PopularEvents, UpcomingEvents } from '@/shared/components'
import { Footer, Header } from '@/shared/layout'
import React from 'react'

const Index: React.FC = () => {
    return (
        <div>
            <Header />
            <Heading />
            <div className="coloured bg-textWhite">
                <Categories />
                <PopularEvents />
                <UpcomingEvents />
                <PopularDestinations />
                <EventsLink />
                <Footer />
            </div>
        </div>
    )
}

export default Index
