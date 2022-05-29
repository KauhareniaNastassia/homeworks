import React from 'react'



type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <img src={props.avatar} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}


export default Message



