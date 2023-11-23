/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { transactionsAllData } from "../allData";

function Transactions() {

  // from To value
  const [fromTo1, setFromTo1] = useState(0);
  const [fromTo2, setFromTo2] = useState(1);
  const [fromTo3, setFromTo3] = useState(2);
  const [fromTo4, setFromTo4] = useState(3);
  const [fromTo5, setFromTo5] = useState(4);

  // randomTexts hash
  const [hash1, setHash1] = useState(
    "76SN9OTRNYJNF0KN22JLELHD9O7U86ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const [hash2, setHash2] = useState(
    "JLKJFD76SN9OTRNYJNF0KN22JLELHD9O7U86ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const [hash3, setHash3] = useState(
    "HGFTRETE76SN9OTRNYJNF0KN22JLELHD9O7U86ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const [hash4, setHash4] = useState(
    "GHRETRE76SN9OTRNYJNF0KN22JLELHD9O7U86ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const [hash5, setHash5] = useState(
    "RIOEURYHC76SN9OTRNYJNF0KN22JLELHD9O7U86ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  // randomValue  value xrp
  const [value1, setValue1] = useState("3214782486476486312");
  const [value2, setValue2] = useState("1525782486476486312");
  const [value3, setValue3] = useState("2143247824864764863");
  const [value4, setValue4] = useState("5344782486476486312");
  const [value5, setValue5] = useState("6434782486476486312");

  //  slice Random
  const [Random1, setRandom1] = useState(5);
  const [secondRandom1, setSeconRandom1] = useState(11);
  const [Random2, setRandom2] = useState(5);
  const [secondRandom2, setSeconRandom2] = useState(11);
  const [Random3, setRandom3] = useState(5);
  const [secondRandom3, setSeconRandom3] = useState(11);
  const [Random4, setRandom4] = useState(5);
  const [secondRandom4, setSeconRandom4] = useState(11);
  const [Random5, setRandom5] = useState(5);
  const [secondRandom5, setSeconRandom5] = useState(11);

  // hash
  function generateRandomText(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
  // value xrp
  function generateRandomXrp(length) {
    const characters = "123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    setRandom1(Math.floor(Math.random() * (6 - 4) + 4));
    setSeconRandom1(Math.floor(Math.random() * (13 - 11) + 11));

    return result;
  }

  useEffect(() => {
    setTimeout(() => {
      // Set the value after 4 seconds (4000 milliseconds)
      setHash5(hash4);
      setValue5(value4);
      setRandom5(Random4);
      setSeconRandom5(secondRandom4);
      setFromTo5(fromTo4);
    }, 4000);
  }, [hash4, value4, Random4, secondRandom4, fromTo4]);

  useEffect(() => {
    setTimeout(() => {
      // Set the value after 4 seconds (4000 milliseconds)
      setHash4(hash3);
      setValue4(value3);
      setRandom4(Random3);
      setSeconRandom4(secondRandom3);
      setFromTo4(fromTo3);
    }, 4000);
  }, [hash3, value3, Random3, secondRandom3, fromTo3]);

  useEffect(() => {
    setTimeout(() => {
      // Set the value after 4 seconds (4000 milliseconds)
      setHash3(hash2);
      setValue3(value2);
      setRandom3(Random2);
      setSeconRandom3(secondRandom2);
      setFromTo3(fromTo2);
    }, 4000);
  }, [hash2, value2, Random2, secondRandom2, fromTo2]);

  useEffect(() => {
    setTimeout(() => {
      // Set the value after 4 seconds (4000 milliseconds)
      setHash2(hash1);
      setValue2(value1);
      setRandom2(Random1);
      setSeconRandom2(secondRandom1);
      setFromTo2(fromTo1);
    }, 4000);
  }, [hash1, value1, Random1, secondRandom1, fromTo1]);

  useEffect(() => {
    setInterval(() => {
      const randomText = generateRandomText(60);
      setHash1(randomText);
      const randomXrp = generateRandomXrp(15);
      setValue1(randomXrp);

      setFromTo1((pre) => {
        if (pre == transactionsAllData.allCangeValueFromTo.length - 1) {
          return (pre = 0);
        } else {
          return pre + 1;
        }
      });
    }, 4000);
  }, []);

  const secondValueXrp1 = Number(
    value1.slice(0, Random1) + "." + value1.slice(6, 8)
  );
  const firstValueXrp1 = secondValueXrp1 * 2;
  const secondValueXrp2 = Number(
    value2.slice(0, Random1) + "." + value2.slice(6, 8)
  );
  const firstValueXrp2 = secondValueXrp2 * 2;
  const secondValueXrp3 = Number(
    value3.slice(0, Random1) + "." + value3.slice(6, 8)
  );
  const firstValueXrp3 = secondValueXrp3 * 2;
  const secondValueXrp4 = Number(
    value4.slice(0, Random1) + "." + value4.slice(6, 8)
  );
  const firstValueXrp4 = secondValueXrp4 * 2;
  const secondValueXrp5 = Number(
    value5.slice(0, Random1) + "." + value5.slice(6, 8)
  );
  const firstValueXrp5 = secondValueXrp5 * 2;

  
  return (
    <>
      <div id="transactions" className="transactions">
        <div className="container">
          <div className="transactions-header">
            <h3 className="transactions-title">Transactions for Address</h3>
            <div className="transactions-address">
              <span id="r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E">
                r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#6391FF"></circle>
                <path
                  d="M8 12.5L10.6667 15L16 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="transactions-container">
            <table>
              <thead>
                <tr>
                  <th>Hash</th>
                  <th>From</th>
                  <th></th>
                  <th>To</th>
                  <th>Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="txhash">
                      {hash1.toUpperCase()}
                      <br />
                      {hash1.slice(31).toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="address">
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                      <br />
                      {transactionsAllData.allCangeValueFromTo[fromTo1]}
                    </p>
                  </td>
                  <td className="arrow">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5"
                        cy="18.5"
                        r="18.5"
                        fill="#5CC2B8"
                      ></circle>
                      <path
                        d="M12.3333 19.2708L16.4444 23.125L24.6667 15.4166"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <p className="address">
                      {transactionsAllData.allCangeValueFromTo[fromTo1]}
                      <br />
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                    </p>
                  </td>
                  <td>
                    <p className="value">
                      {firstValueXrp1} XRP
                      <br />
                      {secondValueXrp1} XRP
                    </p>
                  </td>
                  <td>
                    <p className="status">
                      Completed
                      <br />
                      Completed
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="txhash">
                      {hash2.toUpperCase()}
                      <br />
                      {hash2.slice(31).toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="address">
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                      <br />
                      {transactionsAllData.allCangeValueFromTo[fromTo2]}
                    </p>
                  </td>
                  <td className="arrow">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5"
                        cy="18.5"
                        r="18.5"
                        fill="#5CC2B8"
                      ></circle>
                      <path
                        d="M12.3333 19.2708L16.4444 23.125L24.6667 15.4166"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <p className="address">
                      {transactionsAllData.allCangeValueFromTo[fromTo2]}
                      <br />
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                    </p>
                  </td>
                  <td>
                    <p className="value">
                      {firstValueXrp2} XRP
                      <br />
                      {secondValueXrp2} XRP
                    </p>
                  </td>
                  <td>
                    <p className="status">
                      Completed
                      <br />
                      Completed
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="txhash">
                      {hash3.toUpperCase()}
                      <br />
                      {hash3.slice(31).toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="address">
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                      <br />
                      {transactionsAllData.allCangeValueFromTo[fromTo3]}
                    </p>
                  </td>
                  <td className="arrow">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5"
                        cy="18.5"
                        r="18.5"
                        fill="#5CC2B8"
                      ></circle>
                      <path
                        d="M12.3333 19.2708L16.4444 23.125L24.6667 15.4166"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <p className="address">
                      {transactionsAllData.allCangeValueFromTo[fromTo3]}
                      <br />
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                    </p>
                  </td>
                  <td>
                    <p className="value">
                      {firstValueXrp3} XRP
                      <br />
                      {secondValueXrp3} XRP
                    </p>
                  </td>
                  <td>
                    <p className="status">
                      Completed
                      <br />
                      Completed
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="txhash">
                      {hash4.toUpperCase()}
                      <br />
                      {hash4.slice(31).toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="address">
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                      <br />
                      {transactionsAllData.allCangeValueFromTo[fromTo4]}
                    </p>
                  </td>
                  <td className="arrow">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5"
                        cy="18.5"
                        r="18.5"
                        fill="#5CC2B8"
                      ></circle>
                      <path
                        d="M12.3333 19.2708L16.4444 23.125L24.6667 15.4166"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <p className="address">
                      {transactionsAllData.allCangeValueFromTo[fromTo4]}
                      <br />
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                    </p>
                  </td>
                  <td>
                    <p className="value">
                      {firstValueXrp4} XRP
                      <br />
                      {secondValueXrp4} XRP
                    </p>
                  </td>
                  <td>
                    <p className="status">
                      Completed
                      <br />
                      Completed
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="txhash">
                      {hash5.toUpperCase()}
                      <br />
                      {hash5.slice(31).toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="address">
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                      <br />
                      {transactionsAllData.allCangeValueFromTo[fromTo5]}
                    </p>
                  </td>
                  <td className="arrow">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5"
                        cy="18.5"
                        r="18.5"
                        fill="#5CC2B8"
                      ></circle>
                      <path
                        d="M12.3333 19.2708L16.4444 23.125L24.6667 15.4166"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <p className="address">
                      {transactionsAllData.allCangeValueFromTo[fromTo5]}
                      <br />
                      r1mzEzTKiLvZH4qBPHK3nvT5JGYXfgz5E
                    </p>
                  </td>
                  <td>
                    <p className="value">
                      {firstValueXrp5} XRP
                      <br />
                      {secondValueXrp5} XRP
                    </p>
                  </td>
                  <td>
                    <p className="status">
                      Completed
                      <br />
                      Completed
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
