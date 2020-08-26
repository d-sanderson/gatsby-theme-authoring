import React from 'react'

const Event = (props) => {
    return (
        <>
        <pre>
           {JSON.stringify(props, 2, null)} 
        </pre>
        <h1>{props.name}</h1>
        <strong>{props.startDate} - {props.endDate}</strong>
        </>
    )
}

export default Event
