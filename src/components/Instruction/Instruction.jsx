/* eslint-disable no-unused-vars */
import React from 'react'

import InstructionIcon from "../../assets/instructionicon.png"

function Instruction() {
  return (
    <>
    <div className="instruction">
        <div className="max-container">
          <div className="name">Instruction</div>
          <div className="instruction-items">
            <div className="item">
              <div className="ico-box">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 28H12V31C12 31.552 12.447 32 13 32H14V30H16V32H18V26H16V28ZM0 16V18H2V16H0ZM2 20H6V18H2V20ZM1 12C0.447 12 0 12.447 0 13V14H2V12H1ZM12 16V20H14V16H12ZM28 20H30V18H28V20ZM1 10H9C9.552 10 10 9.552 10 9V1C10 0.447 9.552 0 9 0H1C0.447 0 0 0.447 0 1V9C0 9.552 0.447 10 1 10ZM2 2H8V8H2V2ZM6 26H4V28H6V26ZM4 6H6V4H4V6ZM31 22H23C22.447 22 22 22.447 22 23V31C22 31.552 22.447 32 23 32H31C31.552 32 32 31.552 32 31V23C32 22.447 31.552 22 31 22ZM30 30H24V24H30V30ZM32 18V16H30V18H32ZM28 26H26V28H28V26ZM9 22H1C0.447 22 0 22.447 0 23V31C0 31.552 0.447 32 1 32H9C9.552 32 10 31.552 10 31V23C10 22.447 9.552 22 9 22ZM8 30H2V24H8V30ZM14 24V22H12V26H16V24H14ZM26 12H24V14H26V12ZM16 14H14V16H16V14ZM18 14V16H20V18H18V16H16V20H14V22H16V24H18V26H20V22H18V20H22V16H24V14H18ZM16 8H14V10H16V8ZM18 14V12H20V10H16V14H18ZM31 0H23C22.447 0 22 0.447 22 1V9C22 9.552 22.447 10 23 10H31C31.552 10 32 9.552 32 9V1C32 0.447 31.552 0 31 0ZM30 8H24V2H30V8ZM28 4H26V6H28V4ZM31 12H28V14H26V16H24V18H28V16H30V14H32V13C32 12.447 31.552 12 31 12ZM12 4V8H14V4H12ZM6 14H8V12H4V14H2V16H6V14ZM12 10V12H10V14H14V10H12ZM8 16H6V18H8V20H10V14H8V16ZM18 8V6H20V4H16V8H18ZM16 2H14V4H16V2ZM13 0C12.447 0 12 0.447 12 1V2H14V0H13ZM20 1C20 0.447 19.552 0 19 0H16V2H20V1Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <p>
                To make a transaction, you can use any wallet or exchange to
                participate!
              </p>
            </div>
            <div className="item">
              <div className="ico-box">
                <svg
                  width="28"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.993 4.93298C18.993 4.95598 19 4.97698 19 4.99998C19 5.68198 18.861 6.32998 18.614 6.92198C22.951 8.73098 26 13.008 26 18C26 24.627 20.627 30 14 30C7.373 30 2 24.627 2 18C2 16.339 2.344 14.76 2.954 13.321C2.521 12.542 2.155 11.769 1.871 11.024C0.685 13.077 0 15.457 0 18C0 25.731 6.268 32 14 32C21.732 32 28 25.731 28 18C28 12.029 24.256 6.94598 18.993 4.93298Z"
                      fill="white"
                    ></path>
                    <path
                      d="M15.412 16.663C14.653 15.903 3.80002 6.28101 3.04102 7.04101C2.28202 7.80001 11.904 18.652 12.663 19.412C13.422 20.171 14.653 20.171 15.412 19.412C16.171 18.652 16.171 17.422 15.412 16.663Z"
                      fill="#48A0DC"
                    ></path>
                    <path
                      d="M14 7C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3C12.8954 3 12 3.89543 12 5C12 6.10457 12.8954 7 14 7Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="28" height="32" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                Once we receive your transaction, the outgoing transaction is
                processed to your address.
              </p>
            </div>
            <div className="item">
              <div className="ico-box">
                <img
                  src={InstructionIcon}
                  alt=""
                />
              </div>
              <p>
                Once we receive your transaction, we will immediately send the
                requested amount back to you.
              </p>
            </div>
            <div className="item">
              <div className="ico-box">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C10.35 2.042 7.829 3.35 5 3.35C3.149 3.35 1.43 2.789 0 1.832V15.384C0 20.92 7.984 27.348 11.925 27.348C16.125 27.348 24 20.92 24 15.384V1.832C22.57 2.789 20.851 3.35 19 3.35C16.171 3.35 13.65 2.042 12 0Z"
                    fill="#88C057"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5639 9.80103C16.9979 9.16903 16.0799 9.16903 15.5139 9.80103L10.2759 15.439L8.45593 13.406C7.87693 12.759 6.93793 12.759 6.35893 13.406C5.77993 14.052 5.77993 15.1 6.35893 15.746L9.11693 18.828C9.26693 18.995 9.44193 19.117 9.62793 19.198C10.1629 19.469 10.8139 19.365 11.2529 18.876L17.5649 12.087C18.1299 11.455 18.1299 10.432 17.5639 9.80103Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <p>
                Every address that is sent too late, gets their XRP immediately
                sent back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instruction