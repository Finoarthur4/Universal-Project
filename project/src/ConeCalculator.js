import React from 'react';
import { useState, useContext } from 'react';
import { BytetoInteger } from './BytetoInteger';
//import { UTF8toByte } from './UTF8toByte';
//import { AscIItoText } from './AscIItoText';
import cone from './cone.png';
import {
    cardanischeformel,
    pqformel
} from './App.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ConeCalculator() {
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
              caserh(r, h);
            } else {
              if (s > 0) {
                if ((r*r) >= (s*s)) {
                  setImpossible(true);
                } else {
                  casers(r, s);
                }                  
              } else {
                if (d > 0) {
                    caserd(r, d);
                } else {
                  if (a_g > 0) {
                    casera_g(r, a_g);
                  } else {
                    if (a_m > 0) {
                      casera_m(r, a_m);
                    } else {
                      if (a_o > 0) {
                        casera_o(r, a_o);
                      } else {
                        if (V > 0) {
                          caserV(r, V);
                        } else {
                          if (U_g > 0) {
                            caserU_g(r, U_g);
                          } else {
                            if (hoa > 0) {
                              caserhoa(r, hoa);
                            } else {
                              caser(r);
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
                casehs(h, s);
              } else {
                if (d > 0) {
                  casehd(h, d);
                } else {
                  if (a_g > 0) {
                    caseha_g(h, a_g);
                  } else {
                    if (a_m > 0) {
                      caseha_m(h, a_m);
                    } else {
                      if (a_o > 0) {
                        caseha_o(h, a_o);
                      } else {
                        if (V > 0) {
                          casehV(h, V);
                        } else {
                          if (U_g > 0) {
                            casehU_g(h, U_g);
                          } else {
                            if (hoa > 0) {
                              casehhoa(h, hoa);
                            } else {
                              caseh(h);
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
                  casesd(s, d);
                } else {
                  if (a_g > 0) {
                    casesa_g(s, a_g);
                  } else {
                    if (a_m > 0) {
                      casesa_m(s, a_m);
                    } else {
                      if (a_o > 0) {
                        casesa_o(s, a_o);
                      } else {
                        if (V > 0) {
                          casesV(s, V);
                        } else {
                          if (U_g > 0) {
                            casesU_g(s, U_g);
                          } else {
                            if (hoa > 0) {
                              caseshoa(s, hoa);
                            } else {
                              cases(s);
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
                    caseda_g(d, a_g);
                  } else {
                    if (a_m > 0) {
                      caseda_m(d, a_m);
                    } else {
                      if (a_o > 0) {
                        caseda_o(d, a_o);
                      } else {
                        if (V > 0) {
                          casedV(d, V);
                        } else {
                          if (U_g > 0) {
                            casedU_g(d, U_g);
                          } else {
                            if (hoa > 0) {
                              casedhoa(d, hoa);
                            } else {
                              cased(d);
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (a_g > 0) {
                    if (a_m > 0) {
                      casea_ga_m(a_g, a_m);
                    } else {
                      if (a_o > 0) {
                        casea_ga_o(a_g, a_o);
                      } else {
                        if (V > 0) {
                          casea_gV(a_g, V);
                        } else {
                          if (U_g > 0) {
                            casea_gU_g(a_g, U_g);
                          } else {
                            if (hoa > 0) {
                              casea_ghoa(a_g, hoa);
                            } else {
                              casea_g(a_g);
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (a_m > 0) {
                      if (a_o > 0) {
                        casea_ma_o(a_m, a_o);
                      } else {
                        if (V > 0) {
                          casea_mV(a_m, V);
                        } else {
                          if (U_g > 0) {
                            casea_mU_g(a_m, U_g);
                          } else {
                            if (hoa > 0) {
                              casea_mhoa(a_m, hoa);
                            } else {
                              casea_m(a_m);
                            }
                          }
                        }
                      }
                    } else {
                      if (a_o > 0) {
                        if (V > 0) {
                          casea_oV(a_o, V);
                        } else {
                          if (U_g > 0) {
                            casea_oU_g(a_o, U_g);
                          } else {
                            if (hoa > 0) {
                              casea_ohoa(a_o, hoa);
                            } else {
                              casea_o(a_o);
                            }
                          }
                        }
                      } else {
                        if (V > 0) {
                          if (U_g > 0) {
                            caseVU_g()
                          } else {
                            if (hoa > 0) {
                              caseVhoa(V, hoa);
                            } else {
                              caseV(V);
                            }
                          }
                        } else {
                          if (U_g > 0) {
                            if (hoa > 0) {
                              caseU_ghoa(U_g, hoa);
                            } else {
                              caseU_g(U_g);
                            }
                          } else {
                            if (hoa > 0) {
                              casehoa(hoa);
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
    }

    //cases

    //r case
    function caserh(_r, _h) {
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
            toast.error("That isn't possible! rtfm!")
            toast.error("One of the results is not a real number")
        }
    }
    function casers(_r, _s) {
    if (h == null || h == 0 || isNaN(h) == true) {
        var _h = (Math.sqrt((_s*_s-_r*_r)));
        setH(_h)
        console.log(`_h = ${_h}`);
    }
        console.log("caserh");
        caserh(_r, _h);
    }
    function caserd(_r, _d) {
        console.log("caser");
        caser(_r);
    }
    function casera_g(_r, _a_g) {
        console.log("caser");
        caser(_r);
    }
    function casera_m(_r, _a_m) {
        if (s == null || s == 0 || isNaN(s) == true) {
            var _s = (_a_m/(_r*Math.PI));
            setS(_s);
            console.log(`_s = ${_s}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function casera_o(_r, _a_o) {
        if (s == null || s == 0 || isNaN(s) == true) {
            var _s = ((_a_o/Math.PI)/_r-_r);
            setS(_s);
            console.log(`_s = ${_s}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function caserV(_r, _V) {
        if (h == null || h == 0 || isNaN(h) == true) {
            var _h = (_V/((1/3)*Math.PI*_r*_r));
            setH(_h);
            console.log(`_h = ${_h}`);
        }
        console.log("caserh");
        caserh(_r, _h);
        }
    function caserU_g(_r, _U_g) {
        console.log("caser");
        caser(_r);
    }
    function caserhoa(_r, _hoa) {
        if (h == null || h == 0 || isNaN(h) == true) {
            var _h = (Math.sin(_r/_hoa));
            setH(_h);
            console.log(`_h = ${_h}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }

    //h case
    function casehs(_h, _s) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_s*_s-_h*_h));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }
    function casehd(_h, _d) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }
    function caseha_g(_h, _a_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }
    function caseha_m(_h, _a_m) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _p = (_h*_h);
            var _q = (-_a_m*_a_m)/(Math.PI*Math.PI);
            var _r = (Math.sqrt(pqformel(_p, _q, "+")));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }
    function caseha_o(_h, _a_o) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(Math.sqrt((_a_o*_a_o)/(Math.PI*Math.PI)/(_h*_h)/2)));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }
    function casehV(_h, _V) {
        if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
            var _a_g = ((3*_V)/_h);
            setA_G(_a_g);
            console.log(`_a_g = ${_a_g}`);
        }
        console.log("caseha_g");
        caseha_g(_h, _a_g);
    }
    function casehU_g(_h, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }
    function casehhoa(_h, _hoa) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.tan(_h*_hoa));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserh");
        caserh(_r, _h);
    }

    //s case
    function casesd(_s, _d) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function casesa_g(_s, _a_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_a_g/Math.PI);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function casesa_m(_s, _a_m) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_a_m/(_s*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function casesa_o(_s, _a_o) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt((_a_o/(Math.PI+Math.PI*_s))));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function casesV(_s, _V) {
        var p = (-(_s*_s));
        console.log(`p = ${p}`);
        var q = (3*V/Math.PI);
        console.log(`q = ${q}`);
        if (cardanischeformel(p, q , 1) > 0) {
            var _h = cardanischeformel(p, q , 1);
            setH(_h);
            console.log(`_h = ${_h}`);
            console.log("casehs");
            casehs(_h, _s);
        } else {
            if (cardanischeformel(p, q , 2) > 0) {
                var _h = cardanischeformel(p, q , 2);
                setH(_h);
                console.log(`_h = ${_h}`);
                console.log("casehs");
                casehs(_h, _s);
            } else {
                if (cardanischeformel(p, q , 3) > 0) {
                    var _h = cardanischeformel(p, q , 3);
                    setH(_h);
                    console.log(`_h = ${_h}`);
                    console.log("casehs");
                    casehs(_h, _s);
                } else {
                    toast.error("Your input value combination is not possible");
                }
            }
        }
    }
    function casesU_g(_s, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casers");
        casers(_r, _s);
    }
    function caseshoa(_s, _hoa) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sin(_s*_hoa));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casers");
        casers(_r, _s);
    }

    //d case
    function caseda_g(_d, _a_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_g");
        casera_g(_r, _a_g);
    }
    function caseda_m(_d, _a_m) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_m");
        casera_m(_r, _a_m);
    }
    function caseda_o(_d, _a_o) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_o");
        casera_o(_r, _a_o);
    }
    function casedV(_d, _V) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserV");
        caserV(_r, _V);
    }
    function casedU_g(_d, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserU_g");
        caserU_g(_r, _U_g);
    }
    function casedhoa(_d, _hoa) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserhoa");
        caserhoa(_r, _hoa);
    }

    //A_G case
    function casea_ga_m(_a_g, _a_m) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_m");
        casera_m(_r, _a_m);
    }
    function casea_ga_o(_a_g, _a_o) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_o");
        casera_o(_r, _a_o);
    }
    function casea_gV(_a_g, _V) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserV");
        caserV(_r, _V);
    }
    function casea_gU_g(_a_g, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserU_g");
        caserU_g(_r, _U_g);
    }
    function casea_ghoa(_a_g, _hoa) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserhoa");
        caserhoa(_r, _hoa);
    }

    //A_M case
    function casea_ma_o(_a_m, _a_o) {
        if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
            var _a_g = (_a_o-_a_m);
            setA_G(_a_g);
            console.log(`_a_g = ${_a_g}`);
        }
        console.log("casea_ga_m");
        casea_ga_m(_a_g, _a_m);
    }
    function casea_mV(_a_m, _V) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number");
        }
    }
    function casea_mU_g(_a_m, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_m");
        casera_m(_r, _a_m);
    }
    function casea_mhoa(_a_m, _hoa) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
    }

    //A_O case
    function casea_oV(_a_o, _V) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number");
        }
    }
    function casea_oU_g(_a_o, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("casera_o");
        casera_o(_r, _a_o);
    }
    function casea_ohoa(_a_o, _hoa) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
    }

    //V case
    function caseVU_g(_V, _U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserV");
        caserV(_r, _V);
    }
    function caseVhoa(_V, _hoa) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
    }

    // U_g case
    function caseU_ghoa(_U_g, _hoa) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
        }
        console.log("caserhoa");
        caserhoa(_r, _hoa);
    }

    //single case
    function caser(_r) {
        if (d == null || d == 0 || isNaN(d) == true) {
            var _d = (2*_r);
            setD(_d);
            console.log(`_d = ${_d}`);
            console.log("caserd");
            caserd(_r, _d);
        }
        if (a_g == null || a_g == 0 || isNaN(a_g) == true) {
            var _a_g = (_r*_r*Math.PI);
            setA_G(_a_g);
            console.log(`_a_g = ${_a_g}`);
            console.log("casera_g");
            casera_g(_r, _a_g);
        }
        if (U_g == null || U_g == 0 || isNaN(U_g) == true) {
            var _U_g = (2*Math.PI*_r);
            setU_G(_U_g);
            console.log(`_U_g = ${_U_g}`);
            console.log("caserU_g");
            caserU_g(_r, _U_g);
            setImpossible(true);
            toast.error("That isn't possible! rtfm!")
        }
    }
    function caseh(_h) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!")
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number")
        }
    }
    function cases(_s) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!")
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number")
        }
    }
    function cased(_d) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_d/2);
            setR(_r);
            console.log(`_r = ${_r}`);
            console.log("caser");
            caser(_r);
        }
    }
    function casea_g(_a_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (Math.sqrt(_a_g/Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
            console.log("caser");
            caser(_r);
        }
    }
    function casea_m(_a_m) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number");
        }
    }
    function casea_o(_a_o) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number");
        }
    }
    function caseV(_V) {
        setImpossible(true);
        toast.error("That isn't possible! rtfm!");
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number");
        }
    }
    function caseU_g(_U_g) {
        if (r == null || r == 0 || isNaN(r) == true) {
            var _r = (_U_g/(2*Math.PI));
            setR(_r);
            console.log(`_r = ${_r}`);
            console.log("caser");
            caser(_r);
        }
    }
    function casehoa(_hoa) {
        toast.error("That isn't possible! rtfm!")
        if (isNaN(r) == true || isNaN(h) == true || isNaN(s) == true || isNaN(d) == true || isNaN(a_g) == true || isNaN(a_m) == true || isNaN(a_o) == true || isNaN(V) == true || isNaN(U_g) == true || isNaN(hoa) == true) {
            toast.error("One of the results is not a real number")
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

    return(
        <>
            <ToastContainer />
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
                Thinking: Hopefully this guy won't notice that i can't speak english very well.
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
                First the cases where to values are given but aren't enough to calculate:
                <br></br>
                empty
                <br></br>
                Of course some things also can't work. These are:
                <br></br>
                r can't be something else than d/2 or bigger than s. Because of the Satz von Pyhtagoras. Because of this h also can't be bigger than s. 
                <br></br>
                Furthermore the Volumen can't be bigger than a<sub>g</sub> or a<sub>m</sub> if one of this values is bigger than 1. 
                <br></br>
                Even more no value which you type in can't be smaller or be 0.
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
                {impossible == true &&
                <p>
                    That isn't possible!
                    <h1>
                    rtfm
                    </h1>
                </p>
                }
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
        </>
    )
}