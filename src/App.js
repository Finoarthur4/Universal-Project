import { useState, useContext } from 'react';
import { BytetoInteger } from './BytetoInteger';
//import { UTF8toByte } from './UTF8toByte';
//import { AscIItoText } from './AscIItoText';

import React from 'react';
import cone from './cone.png'; // Tell webpack this JS file uses this image

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

{/*"predeploy": "npm run build",
"deploy": "gh-pages -b main -d build",*/}
//If you wwant to push it via VSC you must copy it into "Scripts"
//It is better to push via Git Extensions, because of several back-ups

export default function Form() {
  const [r, setR] = useState(0);
  const [h, setH] = useState(0);
  const [s, setS] = useState(0);
  const [d, setD] = useState(0);
  const [a_g, setA_G] = useState(0);
  const [a_m, setA_M] = useState(0);
  const [a_o, setA_O] = useState(0);
  const [V, setV] = useState(0);
  const [U_g, setU_G] = useState(0);
  const [hoa, setHOA] = useState(0);
  const [impossible, setImpossible] = useState(false);

  const [extratext, setExtratext] = useState("");
  const [k, setK] = useState(0);

  const [programm, setProgramm] = useState();
  const [mathprogramm, setMathProgramm] = useState();

  function pqformel(p, q, mode) {
    if(mode === "+") {
      return(-(p/2)+Math.sqrt(((p/2)*(p/2))-q));
    } else {
      if (mode === "-") {
        return(-(p/2)-Math.sqrt(((p/2)*(p/2))-q));
      }
    }
  }
  function cardanischeformel(p, q, ergebnisz) {
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

  function coneCalculationCase() {
    setImpossible(false);
    if (isNaN(r) == true) {
      setR(0);
    }
    if (isNaN(h) == true) {
      setH(0);
    }
    if (isNaN(s) == true) {
      setS(0);
    }
    if (isNaN(d) == true) {
      setD(0);
    }
    if (isNaN(a_g) == true) {
      setA_G(0);
    }
    if (isNaN(a_m) == true) {
      setA_M(0);
    }
    if (isNaN(a_o) == true) {
      setA_O(0);
    }
    if (isNaN(V) == true) {
      setV(0);
    }
    if (isNaN(U_g) == true) {
      setU_G(0);
    }
    if (isNaN(hoa) == true) {
      setHOA(0);
    }
    if (impossible == true) {
      setImpossible(true);
    } else {
      if (r > 0) {
        if (h > 0) {
          ConeCaserh(r, h);
        } else {
          if (s > 0) {
            if ((r*r) >= (s*s)) {
              setImpossible(true);
            } else {
              ConeCasers(r, s);
            }                  
          } else {
            if (d > 0) {
                ConeCaserd(r, d);
            } else {
              if (a_g > 0) {
                ConeCasera_g(r, a_g);
              } else {
                if (a_m > 0) {
                  ConeCasera_m(r, a_m);
                } else {
                  if (a_o > 0) {
                    ConeCasera_o(r, a_o);
                  } else {
                    if (V > 0) {
                      ConeCaserV(r, V);
                    } else {
                      if (U_g > 0) {
                        ConeCaserU_g(r, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCaserhoa(r, hoa);
                        } else {
                          ConeCaser(r);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (h > 0) {
          if (s > 0) {
            ConeCasehs(h, s);
          } else {
            if (d > 0) {
              ConeCasehd(h, d);
            } else {
              if (a_g > 0) {
                ConeCaseha_g(h, a_g);
              } else {
                if (a_m > 0) {
                  ConeCaseha_m(h, a_m);
                } else {
                  if (a_o > 0) {
                    ConeCaseha_o(h, a_o);
                  } else {
                    if (V > 0) {
                      ConeCasehV(h, V);
                    } else {
                      if (U_g > 0) {
                        ConeCasehU_g(h, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCasehhoa(h, hoa);
                        } else {
                          ConeCaseh(h);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (s > 0) {
            if (d > 0) {
              ConeCasesd(s, d);
            } else {
              if (a_g > 0) {
                ConeCasesa_g(s, a_g);
              } else {
                if (a_m > 0) {
                  ConeCasesa_m(s, a_m);
                } else {
                  if (a_o > 0) {
                    ConeCasesa_o(s, a_o);
                  } else {
                    if (V > 0) {
                      ConeCasesV(s, V);
                    } else {
                      if (U_g > 0) {
                        ConeCasesU_g(s, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCaseshoa(s, hoa);
                        } else {
                          ConeCases(s);
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (d > 0) {
              if (a_g > 0) {
                ConeCaseda_g(d, a_g);
              } else {
                if (a_m > 0) {
                  ConeCaseda_m(d, a_m);
                } else {
                  if (a_o > 0) {
                    ConeCaseda_o(d, a_o);
                  } else {
                    if (V > 0) {
                      ConeCasedV(d, V);
                    } else {
                      if (U_g > 0) {
                        ConeCasedU_g(d, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCasedhoa(d, hoa);
                        } else {
                          ConeCased(d);
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (a_g > 0) {
                if (a_m > 0) {
                  ConeCasea_ga_m(a_g, a_m);
                } else {
                  if (a_o > 0) {
                    ConeCasea_ga_o(a_g, a_o);
                  } else {
                    if (V > 0) {
                      ConeCasea_gV(a_g, V);
                    } else {
                      if (U_g > 0) {
                        ConeCasea_gU_g(a_g, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCasea_ghoa(a_g, hoa);
                        } else {
                          ConeCasea_g(a_g);
                        }
                      }
                    }
                  }
                }
              } else {
                if (a_m > 0) {
                  if (a_o > 0) {
                    ConeCasea_ma_o(a_m, a_o);
                  } else {
                    if (V > 0) {
                      ConeCasea_mV(a_m, V);
                    } else {
                      if (U_g > 0) {
                        ConeCasea_mU_g(a_m, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCasea_mhoa(a_m, hoa);
                        } else {
                          ConeCasea_m(a_m);
                        }
                      }
                    }
                  }
                } else {
                  if (a_o > 0) {
                    if (V > 0) {
                      ConeCasea_oV(a_o, V);
                    } else {
                      if (U_g > 0) {
                        ConeCasea_oU_g(a_o, U_g);
                      } else {
                        if (hoa > 0) {
                          ConeCasea_ohoa(a_o, hoa);
                        } else {
                          ConeCasea_o(a_o);
                        }
                      }
                    }
                  } else {
                    if (V > 0) {
                      if (U_g > 0) {
                        ConeCaseVU_g()
                      } else {
                        if (hoa > 0) {
                          ConeCaseVhoa(V, hoa);
                        } else {
                          ConeCaseV(V);
                        }
                      }
                    } else {
                      if (U_g > 0) {
                        if (hoa > 0) {
                          ConeCaseU_ghoa(U_g, hoa);
                        } else {
                          ConeCaseU_g(U_g);
                        }
                      } else {
                        if (hoa > 0) {
                          ConeCasehoa(hoa);
                        } else {
                          setImpossible(true);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //cases

    //r case
    function ConeCaserh(_r, _h) {
      setR(_r);
      setH(_h);
      if (s == null || s == 0 || isNaN(s) == true) {
        var _s = (Math.sqrt(_h*_h+_r*_r));
        setS(_s);
        console.log(`_s = ${_s}`);
      }
      if (d == null || d == 0 || isNaN(d) == true) {
        var _d = (2*_r);
        setD(_d);
        console.log(`_d = ${_d}`);
      }
      if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
        var _a_g = (_r*_r*Math.PI);
        setA_G(_a_g);
        console.log(`_a_g = ${_a_g}`);
      }
      if (a_m == null || a_m == 0 || isNaN(a_m) == true) {
        var _a_m = (_r*_s*Math.PI);
        setA_M(_a_m);
        console.log(`_a_m = ${_a_m}`);
      }
      if (a_o == null || a_o == 0 || isNaN(a_o) == true) {
        var _a_o = (_a_g+_a_m);
        setA_O(_a_o);
        console.log(`_a_o = ${_a_o}`);
      }
      if (V == null || V == 0 || isNaN(V) == true) {
        var _V = ((1/3)*_a_g*_h);
        setV(_V);
        console.log(`_V = ${_V}`);
      }
      if (U_g == null || U_g == 0 || isNaN(U_g) == true) {
        var _U_g = (2*Math.PI*_r);
        setU_G(_U_g);
        console.log(`_U_g = ${_U_g}`);
      }
      if (hoa == null || hoa == 0 || isNaN(hoa) == true) {
        var _hoa = (Math.atan(_r/_h));
        setHOA(_hoa);
        console.log(`_hoa = ${_hoa}`);
      }
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("That isn't possible! rtfm!");
        toast.error("One of the results is not a real number");
      }
      if (_r != Math.sqrt(_s*_s-_h*_h) || _h != Math.sqrt(_s*_s-_r*_r) || _s != Math.sqrt(_h*_h+_r*_r) || _d != (2*_r) || _a_g != (_r*_r*Math.PI) || _a_m != (_r*_s*Math.PI) || _a_o != (_a_g+_r*_r) || _V != ((1/3)*_a_g*_h) || _U_g != (2*Math.PI*_r) || _hoa != Math.asin(r/s)) {
        toast.error("The values don't fit to the formeln!");
      }
    }
    function ConeCasers(_r, _s) {
      if (h == null || h == 0 || isNaN(h) == true) {
        var _h = (Math.sqrt((_s*_s-_r*_r)));
        setH(_h)
        console.log(`_h = ${_h}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCaserd(_r, _d) {
      console.log("ConeCaser");
      ConeCaser(_r);
    }
    function ConeCasera_g(_r, _a_g) {
      console.log("ConeCaser");
      ConeCaser(_r);
    }
    function ConeCasera_m(_r, _a_m) {
      if (s == null || s == 0 || isNaN(s) == true) {
        var _s = (_a_m/(_r*Math.PI));
        setS(_s);
        console.log(`_s = ${_s}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCasera_o(_r, _a_o) {
      if (s == null || s == 0 || isNaN(s) == true) {
        var _s = ((_a_o/Math.PI)/_r-_r);
        setS(_s);
        console.log(`_s = ${_s}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCaserV(_r, _V) {
      if (h == null || h == 0 || isNaN(h) == true) {
        var _h = (_V/((1/3)*Math.PI*_r*_r));
        setH(_h);
        console.log(`_h = ${_h}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCaserU_g(_r, _U_g) {
      console.log("ConeCaser");
      ConeCaser(_r);
    }
    function ConeCaserhoa(_r, _hoa) {
      if (h == null || h == 0 || isNaN(h) == true) {
        var _h = (Math.sin(_r/_hoa));
        setH(_h);
        console.log(`_h = ${_h}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }

    //h case
    function ConeCasehs(_h, _s) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_s*_s-_h*_h));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCasehd(_h, _d) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCaseha_g(_h, _a_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCaseha_m(_h, _a_m) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _p = (_h*_h);
        var _q = (-_a_m*_a_m)/(Math.PI*Math.PI);
        var _r = (Math.sqrt(pqformel(_p, _q, "+")));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCaseha_o(_h, _a_o) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(Math.sqrt((_a_o*_a_o)/(Math.PI*Math.PI)/(_h*_h)/2)));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCasehV(_h, _V) {
      if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
        var _a_g = ((3*_V)/_h);
        setA_G(_a_g);
        console.log(`_a_g = ${_a_g}`);
      }
      console.log("ConeCaseha_g");
      ConeCaseha_g(_h, _a_g);
    }
    function ConeCasehU_g(_h, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }
    function ConeCasehhoa(_h, _hoa) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.tan(_h*_hoa));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserh");
      ConeCaserh(_r, _h);
    }

    //s case
    function ConeCasesd(_s, _d) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCasesa_g(_s, _a_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_a_g/Math.PI);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCasesa_m(_s, _a_m) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_a_m/(_s*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCasesa_o(_s, _a_o) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt((_a_o/(Math.PI+Math.PI*_s))));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCasesV(_s, _V) {
      var p = (-(_s*_s));
      console.log(`p = ${p}`);
      var q = (3*V/Math.PI);
      console.log(`q = ${q}`);
      if (cardanischeformel(p, q , 1) > 0) {
        var _h = cardanischeformel(p, q , 1);
        setH(_h);
        console.log(`_h = ${_h}`);
        console.log("ConeCasehs");
        ConeCasehs(_h, _s);
      } else {
        if (cardanischeformel(p, q , 2) > 0) {
          var _h = cardanischeformel(p, q , 2);
          setH(_h);
          console.log(`_h = ${_h}`);
          console.log("ConeCasehs");
          ConeCasehs(_h, _s);
        } else {
          if (cardanischeformel(p, q , 3) > 0) {
            var _h = cardanischeformel(p, q , 3);
            setH(_h);
            console.log(`_h = ${_h}`);
            console.log("ConeCasehs");
            ConeCasehs(_h, _s);
          } else {
            toast.error("Your input value combination is not possible");
          }
        }
      }
    }
    function ConeCasesU_g(_s, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }
    function ConeCaseshoa(_s, _hoa) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sin(_s*_hoa));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasers");
      ConeCasers(_r, _s);
    }

    //d case
    function ConeCaseda_g(_d, _a_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_g");
      ConeCasera_g(_r, _a_g);
    }
    function ConeCaseda_m(_d, _a_m) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_m");
      ConeCasera_m(_r, _a_m);
    }
    function ConeCaseda_o(_d, _a_o) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_o");
      ConeCasera_o(_r, _a_o);
    }
    function ConeCasedV(_d, _V) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserV");
      ConeCaserV(_r, _V);
    }
    function ConeCasedU_g(_d, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserU_g");
      ConeCaserU_g(_r, _U_g);
    }
    function ConeCasedhoa(_d, _hoa) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserhoa");
      ConeCaserhoa(_r, _hoa);
    }

    //A_G case
    function ConeCasea_ga_m(_a_g, _a_m) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_m");
      ConeCasera_m(_r, _a_m);
    }
    function ConeCasea_ga_o(_a_g, _a_o) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_o");
      ConeCasera_o(_r, _a_o);
    }
    function ConeCasea_gV(_a_g, _V) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserV");
      ConeCaserV(_r, _V);
    }
    function ConeCasea_gU_g(_a_g, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserU_g");
      ConeCaserU_g(_r, _U_g);
    }
    function ConeCasea_ghoa(_a_g, _hoa) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserhoa");
      ConeCaserhoa(_r, _hoa);
    }

    //A_M case
    function ConeCasea_ma_o(_a_m, _a_o) {
      if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
        var _a_g = (_a_o-_a_m);
        setA_G(_a_g);
        console.log(`_a_g = ${_a_g}`);
      }
      console.log("ConeCasea_ga_m");
      ConeCasea_ga_m(_a_g, _a_m);
    }
    function ConeCasea_mV(_a_m, _V) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCasea_mU_g(_a_m, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_m");
      ConeCasera_m(_r, _a_m);
    }
    function ConeCasea_mhoa(_a_m, _hoa) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!");
    }

    //A_O case
    function ConeCasea_oV(_a_o, _V) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCasea_oU_g(_a_o, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCasera_o");
      ConeCasera_o(_r, _a_o);
    }
    function ConeCasea_ohoa(_a_o, _hoa) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
    }

    //V case
    function ConeCaseVU_g(_V, _U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserV");
      ConeCaserV(_r, _V);
    }
    function ConeCaseVhoa(_V, _hoa) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!");
    }

    // U_g case
    function ConeCaseU_ghoa(_U_g, _hoa) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
      }
      console.log("ConeCaserhoa");
      ConeCaserhoa(_r, _hoa);
    }

    //single case
    function ConeCaser(_r) {
      if (d == null || d == 0 || isNaN(d) == true) {
        var _d = (2*_r);
        setD(_d);
        console.log(`_d = ${_d}`);
        console.log("ConeCaserd");
        ConeCaserd(_r, _d);
      }
      if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
        var _a_g = (_r*_r*Math.PI);
        setA_G(_a_g);
        console.log(`_a_g = ${_a_g}`);
        console.log("ConeCasera_g");
        ConeCasera_g(_r, _a_g);
      }
      if (U_g == null || U_g == 0 || isNaN(U_g) == true) {
        var _U_g = (2*Math.PI*_r);
        setU_G(_U_g);
        console.log(`_U_g = ${_U_g}`);
        console.log("ConeCaserU_g");
        ConeCaserU_g(_r, _U_g);
        setImpossible(true);
        toast.error("That isn't possible! rtfm!")
      }
    }
    function ConeCaseh(_h) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCases(_s) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCased(_d) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_d/2);
        setR(_r);
        console.log(`_r = ${_r}`);
        console.log("ConeCaser");
        ConeCaser(_r);
      }
    }
    function ConeCasea_g(_a_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (Math.sqrt(_a_g/Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
        console.log("ConeCaser");
        ConeCaser(_r);
      }
    }
    function ConeCasea_m(_a_m) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCasea_o(_a_o) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCaseV(_V) {
      setImpossible(true);
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }
    function ConeCaseU_g(_U_g) {
      if (r == null || r == 0 || isNaN(r) == true) {
        var _r = (_U_g/(2*Math.PI));
        setR(_r);
        console.log(`_r = ${_r}`);
        console.log("ConeCaser");
        ConeCaser(_r);
      }
    }
    function ConeCasehoa(_hoa) {
      toast.error("That isn't possible! rtfm!")
      if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
        toast.error("One of the results is not a real number")
      }
    }

  }


  function reset() {
    setR(0);
    setH(0);
    setS(0);
    setD(0);
    setA_G(0);
    setA_M(0);
    setA_O(0);
    setV(0);
    setU_G(0);
    setHOA(0);
    setImpossible(false);
  }


  return (
    <>
      <ToastContainer />
      <label>
        Select the group of programms you want to see.
        <br></br>
        <select
          value={programm}
          onChange={e => setProgramm(e.target.value)}
        >
          <option value={"None"}>None</option>
          <option value={"Math"}>Math</option>
        </select>
      </label>
      {programm === "Math" &&
        <label>
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
        </label>
      }
      {mathprogramm === "Cone Calculator" &&
        <label>
          <hr />
          <label>
            <h1>Welcome to CEUCCC</h1>
            <p>(<b>C</b>ompletely <b>E</b>xaggerated <b>U</b>nnecessary <b>C</b>omplicated <b>C</b>one <b>C</b>alculator)</p>
          </label>
          <br></br>
          <img src={cone} alt='Cone' />
          <br></br>
          <label>
            <h2>Manual:</h2>
            <p>
              <i>Thinking: Hopefully this guy won't notice that i can't speak english very well.</i>
              <br></br>
              This calculator is at the moment <b>only for straight circular cones!</b>
              <br></br>
              It is enough to enter 2 values to calculate all data of the cone.
              <br></br>
              Unfortunately, there are some exceptions.
              <br></br>
              But first the <b>explanations of the symbols</b>.
              <br></br>
              <b>r</b> is the radius.
              <br></br>
              <b>h</b> is the height.
              <br></br>
              <b>s</b> is the length of the mantellinie.
              <br></br>
              <b>d</b> is the durchmesser.
              <br></br>
              <b>a<sub>g</sub> (a_g)</b> is the fächeninhalt of the grundfläche.
              <br></br>
              <b>a<sub>m</sub> (a_m)</b> is the flächeninhalt of the mantel.
              <br></br>
              <b>a<sub>o</sub> (a_o)</b> is the flächeninhalt of the whole oberfläche.
              <br></br>
              <b>V</b> is the volumen.
              <br></br>
              <b>U<sub>g</sub> (U_g)</b> is the Umfang of the grundfläche.
              <br></br>
              <b>φ</b> is the half opening winkel.
              <br></br>
              But now to the <b>exceptions</b>:
              <br></br>
              <h3>Exceptions</h3>
              <br></br>
              First the cases where to values are given but aren't enough to calculate:
              <br></br>
              - a<sub>m</sub> and V
              <br></br>
              - a<sub>m</sub> and φ
              <br></br>
              - a<sub>o</sub> and V maybe
              <br></br>
              - a<sub>o</sub> and φ
              <br></br>
              - V and φ
              <br></br>
              - If Values are smaller than 0.
              <br></br>
              - At least 2 Values must be bigger than 0. 
              <br></br>
              - If only value is given, the values are calculated which are possible with 1 value.
              <br></br>
              - The values must fit to this formeln and it's ableitungen:
              <br></br>
              r = sqrt(s²-h²)
              <br></br>
              h = sqrt(s²-r²)
              <br></br>
              s = sqrt(h²+r²)
              <br></br>
              d = 2*r
              <br></br>
              a<sub>g</sub> = r² * PI
              <br></br>
              a<sub>m</sub> = r * s * PI
              <br></br>
              a<sub>o</sub> = a<sub>g</sub> + a<sub>m</sub> = r * PI * (r + s)
              <br></br>
              V = 1/3 * PI * r² * h = 1/3 * a<sub>g</sub> * h
              <br></br>
              U<sub>g</sub> = 2 * PI * r
              <br></br>
              φ = arcsin(r/s) = arctan(r/h)
              <br></br>
            </p>
          </label>
          <br></br>
          <label>
            <h2>Calculator:</h2>
          </label>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>symbol</th>
                <th>value</th>
                <th>copy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>r = </td>
                <td>
                  <input
                    value={r}
                    onChange={e => setR(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`r = ${r}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>h = </td>
                <td>
                  <input
                    value={h}
                    onChange={e => setH(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`h = ${h}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>s = </td>
                <td>
                  <input
                    value={s}
                    onChange={e => setS(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`s = ${s}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>d = </td>
                <td>
                  <input
                    value={d}
                    onChange={e => setD(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`d = ${d}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>a<sub>g</sub> = </td>
                <td>
                  <input
                    value={a_g}
                    onChange={e => setA_G(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm²
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`a_g = ${a_g}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>a<sub>m</sub> = </td>
                <td>
                  <input
                    value={a_m}
                    onChange={e => setA_M(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm²
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`a_m = ${a_m}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>a<sub>o</sub> = </td>
                <td>
                  <input
                    value={a_o}
                    onChange={e => setA_O(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm²
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`a_o = ${a_o}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>V = </td>
                <td>
                  <input
                    value={V}
                    onChange={e => setV(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm³
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`V = ${V}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>U<sub>g</sub> = </td>
                <td>
                  <input
                    value={U_g}
                    onChange={e => setU_G(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> cm
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`U_g = ${U_g}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
              <tr>
                <td>φ = </td>
                <td>
                  <input
                    value={hoa}
                    onChange={e => setHOA(e.target.value)}
                    type="number"
                    onCopy={e => toast.info("There is a button for that!")}
                    onCut={e => toast.info("There is a button for that!")}
                    onPaste={e => toast("Too lazy to type?")}
                  /> °
                </td>
                <td>
                  <button onClick={() =>  navigator.clipboard.writeText(`φ = ${hoa}`)}>
                    Copy solution
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <label>
            <button onClick={() => navigator.clipboard.writeText(`r = ${r}, h = ${h}, s = ${s}, d = ${d}, a_g = ${a_g}, a_m = ${a_m}, a_o = ${a_o}, V = ${V}, U_g = ${U_g}, φ = ${hoa}.`)}>
              Copy all Values
            </button>
          </label>
          <br></br>
          <br></br>
          <label>
            <button onClick={() => {
              toast.info("Calculator started.")
              coneCalculationCase()
            }}>
              <h2>
                Calculate
              </h2>
            </button>
          </label>
          <label>
            <button onClick={() => reset()}>
              <h2>
                Reset
              </h2>
            </button>
            <br></br>
          </label>
          <br></br>
          {r == 3 && h == 1 && s == 4 && d == 1 && a_g  == 5 && a_o == 9 && V == 2 && U_g == 6 && hoa == 5 &&
            <label>
              <input
                value={extratext}
                onChange={e => {
                  setExtratext(e.target.value)
                  setK(Math.round(a_m))
                }}
                type="text"
                onCopy={e => toast.info("There is a button for that!")}
                onCut={e => toast.info("There is a button for that!")}
                onPaste={e => toast("Too lazy to type?")}
              />
            </label>
          }
          <br></br>
          {r == 3 && h == 1 && s == 4 && d == 1 && a_g  == 5 && a_o == 9 && V == 2 && U_g == 6 && hoa == 5 &&
            <label>
              <br></br>
              {BytetoInteger(extratext, k)
              }
              {//AscIItoText(BytetoInteger(extratext, k))
              }
            </label>
          }
          <hr />
        </label>
      }
      {mathprogramm === "Zylinder Calculator" &&
        <label>
          <hr />
        </label>
      }
    </>
  );
}
