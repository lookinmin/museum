import React, { Suspense } from 'react'
import "./About.css"

export const About = () => {
  return (
    <div className="AboutWrapper">
      <Suspense>
        <img id='mainPic' src="./pic/dia2.png" alt="diamond" width="800px"/>
      </Suspense>

      <h2 id='Atitle' style={{color : "rgb(63, 63, 63)"}}>ABOUT US</h2>
      <h2 id='AteamName'>Team : Diamonds</h2>
      <h3 style={{marginBottom : "30px"}}># Explanation</h3>
      <h5>Project : Diamonds is a Web Page made in First term in 2022</h5>
      <h5>All of Members are in CBNU Software Engineering Department 3rd Grade</h5>
      <h5 style={{marginBottom : "100px"}}>We state that not all of the content on our website is for commercial purposes.</h5>
      <h3 style={{marginBottom : "60px"}}># Members</h3>
      <Suspense>
        <div className="showMembers">
          <div className="memberInfo">
            <img src="./pic/about/minsu.jpg" alt="" width="230px" />
            <h4>Jo-MinSu</h4>
            <p>Software Engineering</p>
            <p>2018038062</p>
          </div>
          <div className="memberInfo">
            <img src="./pic/about/jongwon.jpg" alt="" width="230px"/>
            <h4>Seo-JongWon</h4>
            <p>Software Engineering</p>
            <p>2018038031</p>
          </div>
          <div className="memberInfo">
            <img src="./pic/about/yoo.jpg" alt="" width="230px" />
            <h4>Yoo-BeongJu</h4>
            <p>Software Engineering</p>
            <p>2018038053</p>
          </div>
          <div className="memberInfo">
            <img src="./pic/about/gwangmo.jpg" alt="" width="230px" />
            <h4>Kim-GwangMo</h4>
            <p>Software Engineering</p>
            <p>2018038065</p>
          </div>
        </div>
      </Suspense>
      

      <h3 style={{marginBottom : "30px"}}># Contact Us</h3>
      <h5>Address : 1, Chungdae-ro, Seowon-gu, CheongJu</h5>
      <h5>E-mail : sncalphs@gmail.com</h5>
      <h5>Instagram : @lookin_min</h5>
      <h5>Tel : 010-5**6-2205</h5>

    </div>
  )
}
