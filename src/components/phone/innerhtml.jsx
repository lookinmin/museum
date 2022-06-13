
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
const Message=({setindex,index,setondetail})=>{
    return(
        <div onClick={(e)=>{setindex(index);setondetail(true)}} className='message_date'>
            <p>{phone_his.phoneHistory[index].Year}</p>
            <div className='message' index={index}>
                <img src={ phone_his.phoneHistory[index].Img}></img><br></br>
                {phone_his.phoneHistory[index].Company+"에서 "+phone_his.phoneHistory[index].Img.slice(12,-6)+"출시!!"}<br></br>
            </div>
        </div>
        
    )
}
const Message_in=({pos,pos1,pagenum,time})=>{
    const [message_list, setmessage_list] = useState([<></>]);
    const [ondetail,setondetail]=useState(false);
    const [index,setindex]=useState(0);

    const num=useRef(0);
    return(
        <div className='inner_html phone_message'style={pagenum}>
            <div className='time'>
                {time.time}
            </div>
            <div 
             onClick={(e)=>{
                 if(num.current<=10){
                     var temp = [...message_list];
                     temp.push(<Message setindex={setindex} setondetail={setondetail} index={num.current} key={num.current} />);
                     num.current = num.current + 1;
                     setmessage_list(temp)
                 }
                    pos.current=new THREE.Vector3(-15, 132, 18);
                    pos1.current=new THREE.Vector3(-20, 0, -170);
                }} className='message_box'>
                {message_list}
            </div>
            <div className='left_info' style={ondetail?{opacity:0.5}:{opacity:0}}>
                <img src={phone_his.phoneHistory[index].Img}></img>
                <div>
                    <p>
                        {phone_his.phoneHistory[index].Year}
                    </p>
                    <p>
                        {phone_his.phoneHistory[index].Company}
                    </p>
                    <p>
                        {phone_his.phoneHistory[index].Info}
                    </p>
                </div>
            </div>
        </div>
    )
}
const Standby = ({chgpage,time,pagenum}) => {
    return (
        <div className={"inner_html phonebg"} style={pagenum}>
            <div className='time'>
                {time.time}
            </div>
            <div className='date'>
                {time.date}
            </div>
            <img id='message_icon' src='/model/message.png'></img>
            <img  onClick={()=>{chgpage([{visibility: "hidden"},{visibility: "visible"},{visibility: "hidden",display:"none"}])}} id='fingerprint' src='/model/fingerprint.png'></img>
        </div>
    )
}

const Main_screen = ({time,pagenum,chgpage}) => {
    const [click, setclick] = useState("message_main");
    return (
        <>
            <div className={"inner_html phonemain"} style={pagenum}>
                <div className='time'>{time.time}</div>
                <img onClick={() => { setclick("message_main_click") }} id='message_app' src='/model/message_app.png'></img>
                <div id={""+click}>
                    <div className='time'>{time.time}</div>
                    <div onClick={()=>{chgpage([{visibility: "visible"},{visibility: "hidden",display:"none"},{visibility: "hidden",display:"none"}])}}className='start'>
                        dkfskldf
                        <img src='/model/first.png'></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export const Innerhtml = ({pos,pos1}) => {
    const [time, settime] = useState(realtime());
    const [pagenum, setpagenum] = useState([{visibility: "hidden"},{visibility: "hidden"},{visibility: "visible"}]);
    
    const start_realtime=()=>{
        setInterval(() => {
            settime(realtime());
        }, 60000);
    }
    useEffect(() => {
        start_realtime();
    }, []);
    console.log("렌더")

    

    return (
        <>
            <Message_in time={time} pagenum={pagenum[0]} pos={pos} pos1={pos1}/>
            <Main_screen chgpage={setpagenum} time={time} pagenum={pagenum[1]}/>
            <Standby chgpage={setpagenum} pagenum={pagenum[2]} time={time}/>
        </>
    )
}
