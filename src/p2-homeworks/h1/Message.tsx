import React from 'react'
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.inline}>
            <img className={s.img} src={props.avatar} alt=""/>
            <div className={s.bubble}>
                <p className={s.userName}>{props.name}</p>
                <p>{props.message}</p>
                <p className={s.timeMessage}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
