import { r, h, s, d, A_G, A_M, A_O, V, impossible } from './App.js';
export function coneCalculation() {
    setImpossible("false");
    if (r == null || h == null || s == null || d == null || a_g == null || a_m == null || a_o == null || V == null || U_g == null) {
      setImpossible("true");
    } else {
      if (r > 0) {
        if (h > 0) {
          caserh(r, h);
        } else {
          if (s > 0) {
            if ((r*r) >= (s*s)) {
              setImpossible("true");
            } else {
              casers(r, s);
            }                  
          } else {
            if (d > 0) {
              if (r != (d/2)) {
                setImpossible("true");
              } else {
                caserd(r, d);
              }
            } else {
              if (a_g > 0) {
                if ((r*r*Math.PI) != a_g) {
                  setImpossible("true");
                } else {
                  casera_g(r, a_g);
                }
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
                        caser(r);
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
                        caseh(h);
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
                        cases(s);
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
                        cased(d);
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
                        casea_gU_g(A_G, U_g);
                      } else {
                        casea_g(a_g);
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
                        casea_mU_g(A_M, U_g);
                      } else {
                        casea_m(a_m);
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
                        casea_o(a_o);
                      }
                    }
                  } else {
                    if (V > 0) {
                      if (U_g > 0) {
                        caseVU_g()
                      } else {
                        caseV(V);
                      }
                    } else {
                      if (U_g > 0) {
                        caseU_g(U_g);
                      } else {
                        setImpossible("true");
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
export function caserh() {
    d = (2*r);
    A_G = (r*r*Math.PI);
    s = (Math.sqrt((h*h + r*r)));
    A_M = (r*r*Math.PI);
    A_O = (A_M+A_G);
    V = ((((1/3)*Math.PI)*(r*(s*s)))*h);
}
export function casers() {
    h = (Math.sqrt((s*s - r*r)));
    caserh();
}
export function caserd() {
    A_G = (r*r*Math.PI);
    impossible = 'true';
}
export function caserA_G() {
    d = (2*r);
    impossible = 'true';
}
export function caserA_M() {
    A_G = (r*r*Math.PI);
    A_O = (A_M+A_G);
    d = (2*r);
    impossible = 'true';
}
export function caserA_O() {
    s = ((A_M/r)/Math.PI);
    casers();
}
export function caserV() {
    h = (V/((1/3)*(Math.PI*(r*r))));
    caserh();
}

//h case
export function casehs() {
    r = (Math.sqrt(s*s - h*h));
    casers();
}
export function casehd() {
    r = (d/2);
    caserh();
}
export function casehA_G() {
    r = (d/Math.PI);
    caserh();
}
export function casehA_M() {
    impossible = 'true';
}
export function casehA_O() {
    impossible = 'true';
}
export function casehV() {
    A_G = ((3*V)/h);
}

//s case
export function casesd() {
    r = (d/2);
    casers();
}
export function casesA_G() {
    r = (A_G/Math.PI);
    casers();
}
export function casesA_M() {
    r = (A_M/(s*Math.PI));
    casers();
}
export function casesA_O() {
    r = (Math.sqrt((A_O/(Math.PI+(Math.PI*s)))));
    casers();
}
export function casesV() {
    impossible = 'true';
}

//d case
export function casedA_G() {
    r = (d/2);
    caserA_G();
}
export function casedA_M() {
    r = (d/2);
    caserA_M();
}
export function casedA_O() {
    r = (d/2);
    caserA_O();
}
export function casedV() {
    r = (d/2);
    caserV();
}

//A_G case
export function caseA_GA_M() {
    r = (Math.sqrt(A_G/Math.PI));
    caserA_G();
}
export function caseA_GA_O() {
    A_M = (A_O-A_G);
    caseA_GA_M();
}
export function caseA_GV() {
    h = ((3*V)/A_G);
    casehA_G();
}

//A_M case
export function caseA_MA_O() {
    A_G = (A_O-A_M);
    caseA_GA_M();
}
export function caseA_MV() {
    impossible = 'true';
}

//A_O case
export function caseA_OV() {
    impossible = 'true';
}