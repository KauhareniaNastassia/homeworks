import React from 'react'
import Message from "./Message";

/*const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}*/

function HW1() {
    // @ts-ignore
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'}
                name={'Some Name'}
                message={'some text'}
                time={'22:00'}
            />
        </div>
    );
}

export default HW1
