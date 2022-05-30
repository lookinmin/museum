
import React, { useRef, useEffect,useState } from 'react'
import "./Phone.css";
import * as THREE from 'three'
const phone_his= require('./phoneHistory.json'); 

const realtime=()=>{
    const date=new Date();
    var hours=date.getHours();
    if(hours<10){
        hours="0"+hours;
    }
    var minutes=date.getMinutes();
    if(minutes<10){
        minutes="0"+minutes;
    }
    const month=date.getMonth()+1;
    const day=date.getDate();
    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const week=WEEKDAY[date.getDay()];
    return {time:hours+":"+minutes,date:month+"월 "+day+"일 "+week};
}
const Message=({phone_detail})=>{
    return(
        <div className='message_date'>
            <p>{phone_his.phoneHistory[0].Year}</p>
            <div className='message'>
                <img src={"/pic/Phone/" + phone_his.phoneHistory[0].Img}></img><br></br>
                {phone_his.phoneHistory[0].Info+"나왔데 깔깔"}
            </div>
        </div>
        
    )
}
const Message_in=({pos,pos1})=>{
    const [message_list, setmessage_list] = useState([<></>]);
    console.log("메세지 렌더")

    return(
        <div className='inner_html phone_message'>
            <div onScroll={(e)=>{console.log(e)}}
             onClick={(e)=>{console.log(message_list); 
                var temp=[...message_list];
                temp.push(<Message/>);
                pos.current=new THREE.Vector3(-15, 128, 14);
                pos1.current=new THREE.Vector3(-15, 0, -170);
                setmessage_list(temp)}} className='message_box'>
                {message_list}
            </div>
            <div className='left_info'>
                <img src={"/pic/Phone/"+phone_his.phoneHistory[0].Img}></img>
                <div>
                    <p>
                        {phone_his.phoneHistory[0].Year}
                    </p>
                    <p>
                        {phone_his.phoneHistory[0].Company}
                    </p>
                    <p>
                        {phone_his.phoneHistory[0].Info}
                    </p>
                </div>
            </div>
        </div>
    )
}
const Standby = ({time}) => {
    return (
        <div className={"inner_html phonebg"}>
            <div className='time'>
                {time.time}
            </div>
            <div className='date'>
                {time.date}
            </div>
            <img id='message_icon' src='/model/message.png'></img>
            {/* <img onClick={()=>{setpagenum({    visibility: "visible",display: "block"})}} id='fingerprint' src='/model/fingerprint.png'></img> */}
        </div>
    )
}
export const Innerhtml = ({pos,pos1}) => {
    const [time, settime] = useState(realtime());
    const [pagenum, setpagenum] = useState({    visibility: "hidden",display: "none"});
    
    
    const start_realtime=()=>{
        setInterval(() => {
            settime(realtime());
        }, 60000);
    }
    useEffect(() => {
        start_realtime();
    }, []);
    console.log("렌더")

    const Main_screen = () => {
        return (
            <>
                <div className={"inner_html phonemain"} style={pagenum}>
                    <img id='message_app' src='/model/message_app.png'></img>
                    <img id='message_main' src='/model/message_main.jpg'></img>
                </div>
            </>
        )
    }
    

    return (
        <>
            <Message_in pos={pos} pos1={pos1}/>
        </>
    )
}
