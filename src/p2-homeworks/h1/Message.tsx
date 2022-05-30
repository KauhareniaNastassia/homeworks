import React from 'react'
import css from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={css.container}>
            <img className={css.avatar} src={props.avatar} />
            <div className={css.rightBlock}>
                <div className={css.name}>{props.name}</div>
                <div className={css.message}>{props.message}</div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    )
}


export default Message



