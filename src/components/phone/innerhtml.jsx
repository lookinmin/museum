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
  const GetMonth = (num) => {
    switch (num) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
    }
  };

  const month = GetMonth(date.getMonth() + 1);
  const day = date.getDate();
  const WEEKDAY = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];
  const week = WEEKDAY[date.getDay()];
  return {
    time: hours + ":" + minutes,
    date: month + ". " + day + " " + week,
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
        {phone_his.phoneHistory[index].Img.slice(12, -6) +" is released from " +phone_his.phoneHistory[index].Company+"!!!!"}
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
        <div className="top">
          <span className="Oblique">{phone_his.phoneHistory[index].Company}</span>
          <span>{phone_his.phoneHistory[index].Year}</span>
        </div>
        <img src={phone_his.phoneHistory[index].Img}></img>
          <div className="namebox">
            <p className="Oblique">{phone_his.phoneHistory[index].name}</p>
          </div>
          <div  className="info">
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
            DynaTAC8000X is released ...
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
