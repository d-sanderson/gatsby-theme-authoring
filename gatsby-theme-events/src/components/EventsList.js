import React from 'react'

const EventsList = ({events}) => {
    
    return (
        <pre>
         {JSON.stringify(events, null, 2)}   
        </pre>
    )
}

export default EventsList
