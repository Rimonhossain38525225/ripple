/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header/Header";
import './Home.css'
import GiveWaitingForPay from "../components/GiveWaitingForPay/GiveWaitingForPay";
import Instruction from "../components/Instruction/Instruction";
import Transections from "../components/Transections/Transections";
function Home() {
  return <>
  <Header/>
  <GiveWaitingForPay/>
  <Instruction/>
  <Transections/>
  </>;
}

export default Home;
