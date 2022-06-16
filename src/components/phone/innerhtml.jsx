import React, { useRef, useEffect, useState } from "react";
import "./Phone.css";
import * as THREE from "three";
const phone_his = require("./phoneHistory.json");

const realtime = () => {
  //핸드폰 화면 내에서 실시간 시간 및 일자 계산
  const date = new Date();
  var hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const WEEKDAY = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const week = WEEKDAY[date.getDay()];
  return {
    time: hours + ":" + minutes,
    date: month + "월 " + day + "일 " + week,
  };
};
const Message = ({ setindex, index, setondetail }) => {
  //메시지 앱 내에서 메시지 하나하나 만들어서 출력 컴포넌트
  return (
    <div
      onClick={(e) => {
        setindex(index);
        setondetail(true);
      }}
      className="message_date"
    >
      <p>{phone_his.phoneHistory[index].Year}</p>
      <div className="message" index={index}>
        <img src={phone_his.phoneHistory[index].Img}></img>
        <br></br>
        {phone_his.phoneHistory[index].Company +
          "에서 " +
          phone_his.phoneHistory[index].Img.slice(12, -6) +
          "출시!!"}
        <br></br>
      </div>
    </div>
  );
};
const Message_in = ({ pos, pos1, pagenum, time }) => {
  //메시지 앱 내부
  const [ondetail, setondetail] = useState(false);
  const [index, setindex] = useState(0);
  const [message_list, setmessage_list] = useState([
    <Message setindex={setindex} setondetail={setondetail} index={0} key={0} />,
  ]);
  const num = useRef(1);

  return (
    <div className="inner_html phone_message" style={pagenum}>
      <div className="time">{time.time}</div>
      <div
        onClick={(e) => {
          if (num.current <= 10) {
            var temp = [...message_list];
            temp.push(
              <Message
                setindex={setindex}
                setondetail={setondetail}
                index={num.current}
                key={num.current}
              />
            );
            num.current = num.current + 1;
            setmessage_list(temp);
          }
          pos.current = new THREE.Vector3(-15, 132, 18);
          pos1.current = new THREE.Vector3(-20, 0, -170);
        }}
        className="message_box"
      >
        {message_list}
      </div>
      <div
        className="left_info"
        style={ondetail ? { opacity: 0.5 } : { opacity: 0 }}
      >
        <img src={phone_his.phoneHistory[index].Img}></img>
        <div>
          <p className="Oblique">{phone_his.phoneHistory[index].name}</p>
          <p className="Oblique">{phone_his.phoneHistory[index].Company}</p>
          <p>{phone_his.phoneHistory[index].Year}</p>
          <p>{phone_his.phoneHistory[index].Info}</p>
        </div>
      </div>
    </div>
  );
};
const Standby = ({ chgpage, time, pagenum }) => {
  //잠금화면
  return (
    <div className={"inner_html phonebg"} style={pagenum}>
      <div className="time">{time.time}</div>
      <div className="date">{time.date}</div>
      <img id="message_icon" src="/model/message.png"></img>
      <img
        onClick={() => {
          chgpage([
            { visibility: "hidden" },
            { visibility: "visible" },
            { visibility: "hidden", display: "none" },
          ]);
        }}
        id="fingerprint"
        src="/model/fingerprint.png"
      ></img>
    </div>
  );
};

const Main_screen = ({ time, pagenum, chgpage }) => {
  //잠금화면 이후 배경화면 및 메시지 앱
  const [click, setclick] = useState("message_main");
  return (
    <>
      <div className={"inner_html phonemain"} style={pagenum}>
        <div className="time">{time.time}</div>
        <img
          onClick={() => {
            setclick("message_main_click");
          }}
          id="message_app"
          src="/model/message_app.png"
        ></img>
        <div id={"" + click}>
          <div className="time">{time.time}</div>
          <div
            onClick={() => {
              chgpage([
                { visibility: "visible" },
                { visibility: "hidden", display: "none" },
                { visibility: "hidden", display: "none" },
              ]);
            }}
            className="start"
          >
            Motorola DynaTAC에서 DynaTAC8000X출시!!
            <img src="/model/first.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export const Innerhtml = ({ pos, pos1 }) => {
  //휴대폰 화면 내부
  const [time, settime] = useState(realtime());
  const [pagenum, setpagenum] = useState([
    { visibility: "hidden" },
    { visibility: "hidden" },
    { visibility: "visible" },
  ]);

  const start_realtime = () => {
    //실시간 시간 및 날짜 계산 시작 함수
    setInterval(() => {
      settime(realtime());
    }, 60000);
  };
  useEffect(() => {
    //처음 렌더링 될때 실시간 시간 및 날짜 계산 함수 시작
    start_realtime();
  }, []);
  console.log("렌더");

  return (
    <>
      <Message_in time={time} pagenum={pagenum[0]} pos={pos} pos1={pos1} />
      <Main_screen chgpage={setpagenum} time={time} pagenum={pagenum[1]} />
      <Standby chgpage={setpagenum} pagenum={pagenum[2]} time={time} />
    </>
  );
};
