/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import wordImage from "../../assets/img/top-img.8ba4e5ca.png";
import qrImage from "../../assets/img/qrCode.png";
import { copyAdress } from "../../appDataYouCanChange/allData";

function GiveWaitingForPay() {
  const [lastChanceNumber, setLastChanceNumber] = useState(
    localStorage.getItem("chance") == null
      ? 76266515
      : localStorage.getItem("chance")
  );
  const [radiusData, setRadiusData] = useState(
    localStorage.getItem("radius") == null
      ? 205.017
      : localStorage.getItem("radius")
  );

  // reinitial value
  if (Number(lastChanceNumber) >= 100000000) {
    setLastChanceNumber((pre) => (pre = 76266515));
    setRadiusData((pre) => (pre = 205.017));
  }
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("chance", lastChanceNumber);
      localStorage.setItem("radius", radiusData);
    }, 4000);
  }, [lastChanceNumber, radiusData]);

  useEffect(() => {
    setInterval(() => {
      setLastChanceNumber(
        (pre) =>
          Number(pre) + Math.floor(Math.random() * (60000 - 2000 + 1)) + 2000
      );
      setRadiusData(
        (pre) => Number(pre) - Number((Math.random() * 0.5).toFixed(3))
      );
    }, 4000);
  }, []);

  // copy
  function copyTextToClipboard(text) {
    // Create a temporary textarea element to hold the text
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);
  }

  // Add click event listener to the button
  const handleCopy = function () {
    let textToCopy = copyAdress; // Replace with the text you want to copy
    copyTextToClipboard(textToCopy);
  };

  return (
    <>
      <div className="box-top-text">
        <div className="min-container">
          <div className="top-box">
            <div className="left-box">
              <span>Event 2023</span>
              <h1>
                {" "}
                JOIN THE <br /> GIVEAWAY{" "}
              </h1>
            </div>
            <div className="right-box">
              <img style={{ marginBottom: "-50px" }} src={wordImage} alt="" />
            </div>
          </div>
          <div className="bot-box">
            <div className="arr-r-btn">
              <span>More info</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMCAYAAADBJPs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgB7daxDcIwEIXh57MH8ghkApSGhj5Dpaeh8QhZgYXuDCeQhS4pMsD7ylf+8kkGiM5Yn1tdH1uNu4AGkdxipAQa/BWJ5mam83KfXr4xUBAjJR+ylito6KlXGC7WdSqgY6kDhSe2870oaZptXm6fEwMNMY5vDPRzFMfxH/QnxqET3iaYQKIBsaecAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div className="v-tabs">
              <div style={{ padding: "0 40px" }} className="item-tab active">
                <span id="titlecount">100,000,000</span> XRP{" "}
              </div>
              <span>•</span>
              <div style={{ color: "#ffffff" }} className="item-tab">
                {" "}
                GIVEAWAY{" "}
              </div>
            </div>
          </div>
          <div className="box-info-bottom">
            <div id="bonus" className="p-description-top">
              <p>
                {" "}
                We believe that Blockchain and Ripple (XRP) will make the world
                more fair. To speed up the process of cryptocurrency mass
                adoption, We decided to run 100,000,000 XRP giveaway. To
                participate you just need to send from 1,000 XRP to 500,000 XRP
                to the contribution address, and we will immediately send you
                back 2,000 XRP to 1,000,000 XRP (x2 back) to the address you
                sent it from.{" "}
              </p>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.45421e-07H11.9375C9.64489 -1.32252e-05 7.83927 -2.35964e-05 6.40845 0.16128C4.9445 0.326319 3.74969 0.670746 2.73867 1.44653C2.25335 1.81893 1.81893 2.25335 1.44653 2.73867C0.670746 3.74969 0.326319 4.9445 0.16128 6.40845C-2.35964e-05 7.83927 -1.32252e-05 9.64489 2.45421e-07 11.9375V12V12.0625C-1.32252e-05 14.3551 -2.35964e-05 16.1607 0.16128 17.5916C0.326319 19.0555 0.670746 20.2503 1.44653 21.2613C1.81893 21.7467 2.25335 22.1811 2.73867 22.5535C3.74969 23.3293 4.9445 23.6737 6.40845 23.8387C7.83925 24 9.64486 24 11.9374 24H11.9375H12H12.0625H12.0626C14.3551 24 16.1607 24 17.5916 23.8387C19.0555 23.6737 20.2503 23.3293 21.2613 22.5535C21.7467 22.1811 22.1811 21.7467 22.5535 21.2613C23.3293 20.2503 23.6737 19.0555 23.8387 17.5916C24 16.1607 24 14.3551 24 12.0626V12.0625V12V11.9375V11.9374C24 9.64486 24 7.83925 23.8387 6.40845C23.6737 4.9445 23.3293 3.74969 22.5535 2.73867C22.1811 2.25335 21.7467 1.81893 21.2613 1.44653C20.2503 0.670746 19.0555 0.326319 17.5916 0.16128C16.1607 -2.35964e-05 14.3551 -1.32252e-05 12.0625 2.45421e-07H12ZM3.95619 3.03323C4.56102 2.56913 5.34691 2.29362 6.6325 2.14869C7.93824 2.00149 9.63117 2 12 2C14.3688 2 16.0618 2.00149 17.3675 2.14869C18.6531 2.29362 19.439 2.56913 20.0438 3.03323C20.3905 3.29924 20.7008 3.60953 20.9668 3.95619C21.4309 4.56102 21.7064 5.34691 21.8513 6.6325C21.9985 7.93824 22 9.63117 22 12C22 14.3688 21.9985 16.0618 21.8513 17.3675C21.7064 18.6531 21.4309 19.439 20.9668 20.0438C20.7008 20.3905 20.3905 20.7008 20.0438 20.9668C19.439 21.4309 18.6531 21.7064 17.3675 21.8513C16.0618 21.9985 14.3688 22 12 22C9.63117 22 7.93824 21.9985 6.6325 21.8513C5.34691 21.7064 4.56102 21.4309 3.95619 20.9668C3.60953 20.7008 3.29924 20.3905 3.03323 20.0438C2.56913 19.439 2.29362 18.6531 2.14869 17.3675C2.00149 16.0618 2 14.3688 2 12C2 9.63117 2.00149 7.93824 2.14869 6.6325C2.29362 5.34691 2.56913 4.56102 3.03323 3.95619C3.29924 3.60953 3.60953 3.29924 3.95619 3.03323ZM11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7ZM11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z"
                    fill="#6391FF"
                  ></path>
                </svg>{" "}
                NOTE: You can do it only one time.{" "}
              </span>
            </div>
            <div className="item-list grad-b">
              <div className="box-i">
                <div className="name-box"> For example: </div>
                <ul>
                  <li> Send 1,000+ XRP, you will be get 2,000+ XRP back. </li>
                  <li> Send 5,000+ XRP, you will be get 10,000+ XRP back. </li>
                  <li> Send 25,000+ XRP, you will be get 50,000+ XRP back. </li>
                  <li>
                    {" "}
                    Send 100,000+ XRP, you will be get 200,000+ XRP back.{" "}
                  </li>
                  <li>
                    {" "}
                    Send 250,000+ XRP, you will be get 500,000+ XRP back.{" "}
                  </li>
                  <li>
                    {" "}
                    Send 500,000+ XRP, you will be get 1,000,000+ XRP back.{" "}
                  </li>
                </ul>
              </div>
              <div className="box-i">
                <div className="name-box"> Contribution Special BONUS: </div>
                <ul>
                  <li>10,000+ XRP = 20% Bonus</li>
                  <li>30,000+ XRP = 30% Bonus</li>
                  <li>50,000+ XRP = 50% Bonus</li>
                  <li>100,000+ XRP = 70% Bonus</li>
                  <li>200,000+ XRP = 100% Bonus</li>
                </ul>
              </div>
            </div>
            <div className="payment-address">
              <div className="left-box grad-b">
                <div className="top">
                  <div className="left-box">
                    <div className="name"> Payment Address </div>
                    <p>You can send XRP to the following address:</p>
                    <p>Destination tag: 777777</p>
                    <div className="address">
                      <span
                        id="wallet"
                        data-event="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aXNpdG9yX2lkIjo1OTYzNDEsInNpdGVfaWQiOjQ3MiwidHlwZSI6ImNvcHkvWFJQIiwiaWF0IjoxNzAwMjEwNjQ2fQ.Q2pxVpPL8h4qeZMUxia8tsHFnvOKAXxIoQFcdLa1CYA"
                      >
                        {copyAdress}
                      </span>
                      <button onClick={handleCopy} type="button">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.8 2C20.3766 2 20.7488 2.00078 21.0322 2.02393C21.3038 2.04612 21.4045 2.0838 21.454 2.10899C21.6422 2.20487 21.7951 2.35785 21.891 2.54601C21.9162 2.59545 21.9539 2.69617 21.9761 2.96784C21.9992 3.25117 22 3.62345 22 4.2V14C22 14.4796 21.9995 14.7893 21.9833 15.0262C21.9677 15.2542 21.9411 15.3411 21.9239 15.3827C21.8224 15.6277 21.6277 15.8224 21.3827 15.9239C21.3411 15.9411 21.2542 15.9677 21.0262 15.9833C20.7893 15.9995 20.4796 16 20 16V18H20.032C20.4706 18 20.8491 18 21.1624 17.9787C21.4922 17.9561 21.8221 17.9066 22.1481 17.7716C22.8831 17.4672 23.4672 16.8831 23.7716 16.1481C23.9066 15.8221 23.9561 15.4922 23.9787 15.1624C24 14.8491 24 14.4706 24 14.032V14V4.2V4.16143C24 3.63429 24 3.17954 23.9694 2.80497C23.9371 2.40963 23.8658 2.01641 23.673 1.63803C23.3854 1.07354 22.9265 0.614601 22.362 0.326981C21.9836 0.134187 21.5904 0.0628714 21.195 0.0305704C20.8205 -3.34041e-05 20.3657 -1.79069e-05 19.8385 9.28211e-07H19.8H10H9.96803C9.52938 -1.20656e-05 9.15088 -2.29136e-05 8.83762 0.0213513C8.50778 0.0438559 8.17787 0.0933612 7.85193 0.228369C7.11686 0.532851 6.53285 1.11686 6.22837 1.85193C6.09336 2.17787 6.04386 2.50778 6.02135 2.83762C5.99998 3.15087 5.99999 3.52935 6 3.96799V3.96803L6 4.00002H8C8 3.52039 8.00054 3.21074 8.01671 2.97376C8.03227 2.74576 8.05889 2.65893 8.07612 2.61731C8.17762 2.37229 8.37229 2.17762 8.61731 2.07612C8.65893 2.05889 8.74576 2.03227 8.97376 2.01671C9.21074 2.00054 9.52038 2 10 2H19.8ZM4.2 6.00002L4.16146 6.00002C3.63431 6 3.17955 5.99998 2.80497 6.03059C2.40963 6.06289 2.01641 6.1342 1.63803 6.327C1.07354 6.61462 0.614601 7.07356 0.326981 7.63804C0.134187 8.01642 0.0628714 8.40964 0.0305704 8.80499C-3.34041e-05 9.17956 -1.79069e-05 9.63432 9.28211e-07 10.1615V10.2V19.8V19.8386C-1.79069e-05 20.3657 -3.34041e-05 20.8205 0.0305704 21.195C0.0628714 21.5904 0.134187 21.9836 0.326981 22.362C0.614601 22.9265 1.07354 23.3854 1.63803 23.673C2.01641 23.8658 2.40963 23.9371 2.80497 23.9694C3.17954 24 3.6343 24 4.16143 24H4.2H13.8H13.8386C14.3657 24 14.8205 24 15.195 23.9694C15.5904 23.9371 15.9836 23.8658 16.362 23.673C16.9265 23.3854 17.3854 22.9265 17.673 22.362C17.8658 21.9836 17.9371 21.5904 17.9694 21.195C18 20.8205 18 20.3657 18 19.8386V19.8V10.2V10.1614C18 9.63431 18 9.17955 17.9694 8.80499C17.9371 8.40964 17.8658 8.01642 17.673 7.63804C17.3854 7.07356 16.9265 6.61462 16.362 6.327C15.9836 6.1342 15.5904 6.06289 15.195 6.03059C14.8205 5.99998 14.3657 6 13.8385 6.00002L13.8 6.00002H4.2ZM2.54601 8.10901C2.59545 8.08382 2.69617 8.04614 2.96784 8.02394C3.25117 8.00079 3.62345 8.00002 4.2 8.00002H13.8C14.3766 8.00002 14.7488 8.00079 15.0322 8.02394C15.3038 8.04614 15.4045 8.08382 15.454 8.10901C15.6422 8.20488 15.7951 8.35786 15.891 8.54603C15.9162 8.59547 15.9539 8.69619 15.9761 8.96785C15.9992 9.25119 16 9.62346 16 10.2V19.8C16 20.3766 15.9992 20.7488 15.9761 21.0322C15.9539 21.3038 15.9162 21.4046 15.891 21.454C15.7951 21.6422 15.6422 21.7951 15.454 21.891C15.4045 21.9162 15.3038 21.9539 15.0322 21.9761C14.7488 21.9992 14.3766 22 13.8 22H4.2C3.62345 22 3.25117 21.9992 2.96784 21.9761C2.69617 21.9539 2.59545 21.9162 2.54601 21.891C2.35785 21.7951 2.20487 21.6422 2.10899 21.454C2.0838 21.4046 2.04612 21.3038 2.02393 21.0322C2.00078 20.7488 2 20.3766 2 19.8V10.2C2 9.62346 2.00078 9.25119 2.02393 8.96785C2.04612 8.69619 2.0838 8.59547 2.10899 8.54603C2.20487 8.35786 2.35785 8.20488 2.54601 8.10901Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <img
                    alt=""
                    height="180"
                    width="180"
                    className="qrcode"
                    src={qrImage}
                  />
                </div>
                <div className="loader">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M13.792 6.164C15.4941 6.164 16.874 4.78414 16.874 3.082C16.874 1.37986 15.4941 0 13.792 0C12.0898 0 10.71 1.37986 10.71 3.082C10.71 4.78414 12.0898 6.164 13.792 6.164Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M13.792 26.3499C14.8132 26.3499 15.641 25.522 15.641 24.5009C15.641 23.4797 14.8132 22.6519 13.792 22.6519C12.7708 22.6519 11.943 23.4797 11.943 24.5009C11.943 25.522 12.7708 26.3499 13.792 26.3499Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M6.21901 8.99185C7.75105 8.99185 8.99301 7.74989 8.99301 6.21785C8.99301 4.68581 7.75105 3.44385 6.21901 3.44385C4.68697 3.44385 3.44501 4.68581 3.44501 6.21785C3.44501 7.74989 4.68697 8.99185 6.21901 8.99185Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M21.365 22.9038C22.2161 22.9038 22.906 22.2138 22.906 21.3628C22.906 20.5117 22.2161 19.8218 21.365 19.8218C20.5139 19.8218 19.824 20.5117 19.824 21.3628C19.824 22.2138 20.5139 22.9038 21.365 22.9038Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M3.082 16.2571C4.44339 16.2571 5.547 15.1535 5.547 13.7921C5.547 12.4308 4.44339 11.3271 3.082 11.3271C1.72062 11.3271 0.617004 12.4308 0.617004 13.7921C0.617004 15.1535 1.72062 16.2571 3.082 16.2571Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M24.501 15.0231C25.1814 15.0231 25.733 14.4715 25.733 13.7911C25.733 13.1107 25.1814 12.5591 24.501 12.5591C23.8206 12.5591 23.269 13.1107 23.269 13.7911C23.269 14.4715 23.8206 15.0231 24.501 15.0231Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M4.69402 19.8401C3.85102 20.6831 3.85102 22.0471 4.69402 22.8901C5.53602 23.7331 6.90202 23.7331 7.74402 22.8901C8.58702 22.0471 8.58702 20.6831 7.74402 19.8401C6.90202 18.9961 5.53702 18.9881 4.69402 19.8401Z"
                        fill="#6391FF"
                      ></path>
                      <path
                        d="M21.364 7.14195C21.8743 7.14195 22.288 6.72826 22.288 6.21795C22.288 5.70763 21.8743 5.29395 21.364 5.29395C20.8537 5.29395 20.44 5.70763 20.44 6.21795C20.44 6.72826 20.8537 7.14195 21.364 7.14195Z"
                        fill="#6391FF"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="26.349" height="26.35" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p> Waiting for payment </p>
                </div>
              </div>
              <div className="chart-test">
                <div className="line"></div>
              </div>
              <div className="right-box progress-bar">
                <div id="rules" className="text-center">
                  <div className="top">
                    <div className="num">100,000,000</div>
                    <span>/</span>
                    <div className="num">
                      {lastChanceNumber.toLocaleString()}
                    </div>
                  </div>
                  <p>
                    {" "}
                    Last chance <br /> to get your XRP!{" "}
                  </p>
                </div>
                <div
                  className="radial-progress-container"
                  style={{ height: "250px", width: "250px" }}
                >
                  <div
                    className="radial-progress-inner"
                    style={{ width: "224px" }}
                  ></div>
                  <svg
                    className="radial-progress-bar"
                    width="250"
                    height="250"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        id="radial-gradientundefined"
                        fx="1"
                        fy="1"
                        cx="0.5"
                        cy="0.5"
                        r="0.65"
                      >
                        <stop offset="30%" stopColor="#9DBAFF"></stop>
                        <stop offset="100%" stopColor="#9DBAFF"></stop>
                      </radialGradient>
                    </defs>
                    <circle
                      r="112"
                      cx="125"
                      cy="125"
                      fill="transparent"
                      stroke="#3F455F"
                      strokeDasharray="703.7167544041137"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      style={{
                        height: "250px",
                        width: "250px",
                        strokeWidth: "13px",
                      }}
                    ></circle>
                    <circle
                      transform="rotate(270, 125,125)"
                      r="112"
                      cx="125"
                      cy="125"
                      fill="transparent"
                      stroke="url(#radial-gradientundefined)"
                      strokeDasharray="703.7167544041137"
                      strokeDashoffset="703.7167544041137"
                      strokeLinecap="round"
                      style={{
                        height: "250px",
                        width: "250px",
                        strokeWidth: "13px",
                        strokeDashoffset: `${radiusData.toString()}`,
                        transition: "strokeDashoffset 1000ms linear 0s",
                      }}
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveWaitingForPay;
