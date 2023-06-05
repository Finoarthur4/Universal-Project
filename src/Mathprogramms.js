import { useState, useContext } from 'react';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ConeCalculator} from './ConeCalculator.js';

export function pqformel(p, q, mode) {
    if(mode === "+") {
      return(-(p/2)+Math.sqrt(((p/2)*(p/2))-q));
    } else {
      if (mode === "-") {
        return(-(p/2)-Math.sqrt(((p/2)*(p/2))-q));
      }
    }
}
export function cardanischeformel(p, q, ergebnisz) {
    console.log(`p = ${p}`);
    console.log(`q = ${q}`);
    var delta_2 = (((q*q)/4)+((p*p*p)/27));
    console.log(`delta_2 = ${delta_2}`);
    var t1 = (-(q/2)+Math.sqrt(delta_2));
    console.log(`t1 = ${t1}`);
    var t2 = (-(q/2)-Math.sqrt(delta_2));
    console.log(`t2 = ${t2}`);
    var delta = (-delta_2);
    console.log(`delta = ${delta}`);
    if (delta == p == 0) {
        var z1 = (0);
        console.log(`z1 = ${z1}`);
        var z2 = (0);
        console.log(`z2 = ${z2}`);
        var z3 = (0);
        console.log(`z3 = ${z3}`);
        switch (ergebnisz) {
        case 1:
            return(z1);
        case 2:
            return(z2);
        case 3:
            return(z3);
        default:
            return(z1);
        }
    }
    if (delta == 0 && p != 0) {
        var z1 = ((3*q)/p);
        console.log(`z1 = ${z1}`);
        var z2 = (-((3*q)/(2*p)));
        console.log(`z2 = ${z2}`);
        var z3 = (-((3*q)/(2*p)));
        console.log(`z3 = ${z3}`);
        switch (ergebnisz) {
        case 1:
            return(z1);
        case 2:
            return(z2);
        case 3:
            return(z3);
        default:
            return(z1);
        }
    }
    if (delta < 0) {
        var u = Math.cbrt(t1);
        console.log(`u = ${u}`);
        var v = Math.cbrt(t2);
        console.log(`v = ${v}`);
        var z1 = (u+v);
        console.log(`z1 = ${z1}`);
        var z2 = (-((u+v)/2)+((u-v)/2)*Math.sqrt(3));
        console.log(`z2 = ${z2}`);
        var z3 = (-((u+v)/2)-((u-v)/2)*Math.sqrt(3));
        console.log(`z3 = ${z3}`);
        switch (ergebnisz) {
        case 1:
            return(z1);
        case 2:
            return(z2);
        case 3:
            return(z3);
        default:
            return(z1);
        }
    }
    if (delta > 0) {
        var z1 = (Math.sqrt((-(4/3)*p))*Math.cos((1/3)*Math.acos((-(q/2))*Math.sqrt(-(27/(p*p*p))))));
        console.log(`z1 = ${z1}`);
        var z2 = (Math.sqrt((-(4/3)*p))*Math.cos((1/3)*Math.acos((-(q/2))*Math.sqrt(-(27/(p*p*p)))+(Math.PI/3))));
        console.log(`z2 = ${z2}`);
        var z3 = (Math.sqrt((-(4/3)*p))*Math.cos((1/3)*Math.acos((-(q/2))*Math.sqrt(-(27/(p*p*p)))-(Math.PI/3))));
        console.log(`z3 = ${z3}`);
        switch (ergebnisz) {
        case 1:
            return(z1);
        case 2:
            return(z2);
        case 3:
            return(z3);
        default:
            return(z1);
        }
    }
}

export default function Mathprogramms() {
    const [mathprogramm, setMathProgramm] = useState();

    return(
        <>
            <ToastContainer/>
            <hr />
            <label>
                Select the programm you want to start.
                <br></br>
                <select
                    value={mathprogramm}
                    onChange={e => setMathProgramm(e.target.value)}
                >
                    <option value={"None"}>None</option>
                    <option value={"Cone Calculator"}>Cone Calculator</option>
                    <option value={"Zylinder Calculator"}>Zylinder Calculator</option>
                </select>
            </label>
            {mathprogramm === "Cone Calculator" &&
            <ConeCalculator/>
            }
            {mathprogramm === "Zylinder Calculator" &&
            <label/>
            }
        </>
    );
}