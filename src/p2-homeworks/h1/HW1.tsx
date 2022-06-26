import React from 'react'
import Message from "./Message";
import s from "../../p1-main/m1-ui/u1-app/App.module.css"


const messageData = {
    avatar: 'https://www.diamondpaintingclearance.com/image/cache/catalog/Products/2021011300082164-1000x1000.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div className={s.homework_title}>
                Homework 1
            </div>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}

export default HW1
