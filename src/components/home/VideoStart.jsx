import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VideoStart.css";

export const VideoStart = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="effectContainer fade-out-box">
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
