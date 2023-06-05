import { useState, useContext } from 'react';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

{/*"predeploy": "npm run build",
"deploy": "gh-pages -b main -d build",*/}
//If you want to push it via VSC you must copy it into "Scripts"
//It is better to push via Git Extensions, because of several back-ups

//Math
import Mathprogramms from './Mathprogramms.js';

export default function Form() {
  const [programm, setProgramm] = useState();

  return (
    <>
      <ToastContainer />
      <label>
        Select the group of programms you want to see:
        <select
          value={programm}
          onChange={e => setProgramm(e.target.value)}
        >
          <option value={"None"}>None</option>
          <option value={"Math"}>Math</option>
          <option value={"Games"}>Games</option>
          <option value={"Chat"}>Chat</option>
        </select>
      </label>
      {programm === "Math" &&
        <Mathprogramms/>
      }
    </>
  );
}
