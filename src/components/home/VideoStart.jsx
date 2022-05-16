import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VideoStart.css";

export const VideoStart = () => {
  let navigate = useNavigate();
  const video = useRef(null);

  useEffect(() => {
    video.current.style.transitionDelay = "3s";
    video.current.style.transitionDuration = "2s";
    video.current.style.transform = "scale(2.5)";
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };

  }, []);

  return (
    <>
      <div className="effectContainer fade-out-box" ref={video}>
        <div>
          <video
            src="/pic/effect.mp4"
            style={{ width: "100%", height: "937px" }}
            autoPlay
            preload
            muted
          />
        </div>
      </div>
    </>
  );
};
