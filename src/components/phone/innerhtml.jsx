import React, { useRef, useState } from 'react'
import "./Phone.css";

export const Innerhtml = () => {

    const Standby = () => {
        return (
            <div className={"inner_html phonebg"}>
                <div className='time'>
                    03:13
                </div>
                <div className='date'>
                    5월 25일 수요일
                </div>
                <img id='message_icon' src='/model/message.png'></img>
                <img id='fingerprint' src='/model/fingerprint.png'></img>
            </div>
        )
    }
    const Main_screen = () => {
        return (
            <>
                <div className={"inner_html phonemain"}>
                    <img id='message_app' src='/model/message_app.png'></img>
                    <img id='message_main' src='/model/message_main.jpg'></img>
                </div>
            </>
        )
    }
    const Message_in=()=>{
        return(
            <div className='inner_html phone_message'>

            </div>
        )
    }
    return (
        <>
            <Standby/>
        </>
    )
}
