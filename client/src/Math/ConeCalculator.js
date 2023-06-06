import { useState, useContext } from 'react';
import { BytetoInteger } from './BytetoInteger';
//import { UTF8toByte } from './UTF8toByte';
//import { AscIItoText } from './AscIItoText';

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cone from './cone.png'; // Tell webpack this JS file uses this image

import { pqformel, cardanischeformel } from './Mathprogramms.js';

export function ConeCalculator() {
  //Cone Values
  const [Coner, setConeR] = useState(0);
  const [Coneh, setConeH] = useState(0);
  const [Cones, setConeS] = useState(0);
  const [Coned, setConeD] = useState(0);
  const [Conea_g, setConeA_G] = useState(0);
  const [Conea_m, setConeA_M] = useState(0);
  const [Conea_o, setConeA_O] = useState(0);
  const [ConeV, setConeV] = useState(0);
  const [ConeU_g, setConeU_G] = useState(0);
  const [Conehoa, setConeHOA] = useState(0);

  const [extratext, setExtratext] = useState("");
  const [k, setK] = useState(0);

  if (isNaN(Coner) == true) {
    setConeR(0);
  }
  if (isNaN(Coneh) == true) {
    setConeH(0);
  }
  if (isNaN(Cones) == true) {
    setConeS(0);
  }
  if (isNaN(Coned) == true) {
    setConeD(0);
  }
  if (isNaN(Conea_g) == true) {
    setConeA_G(0);
  }
  if (isNaN(Conea_m) == true) {
    setConeA_M(0);
  }
  if (isNaN(Conea_o) == true) {
    setConeA_O(0);
  }
  if (isNaN(ConeV) == true) {
    setConeV(0);
  }
  if (isNaN(ConeU_g) == true) {
    setConeU_G(0);
  }
  if (isNaN(Conehoa) == true) {
    setConeHOA(0);
  }
if (Coner > 0) {
if (Coneh > 0) {
  ConeCaserh(Coner, Coneh);
} else {
  if (Cones > 0) {
    ConeCasers(Coner, Cones);                 
  } else {
    if (Coned > 0) {
        ConeCaserd(Coner, Coned);
    } else {
      if (Conea_g > 0) {
        ConeCasera_g(Coner, Conea_g);
      } else {
        if (Conea_m > 0) {
          ConeCasera_m(Coner, Conea_m);
        } else {
          if (Conea_o > 0) {
            ConeCasera_o(Coner, Conea_o);
          } else {
            if (ConeV > 0) {
              ConeCaserV(Coner, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCaserU_g(Coner, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCaserhoa(Coner, Conehoa);
                } else {
                  ConeCaser(Coner);
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
if (Coneh > 0) {
  if (Cones > 0) {
    ConeCasehs(Coneh, Cones);
  } else {
    if (Coned > 0) {
      ConeCasehd(Coneh, Coned);
    } else {
      if (Conea_g > 0) {
        ConeCaseha_g(Coneh, Conea_g);
      } else {
        if (Conea_m > 0) {
          ConeCaseha_m(Coneh, Conea_m);
        } else {
          if (Conea_o > 0) {
            ConeCaseha_o(Coneh, Conea_o);
          } else {
            if (ConeV > 0) {
              ConeCasehV(Coneh, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCasehU_g(Coneh, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCasehhoa(Coneh, Conehoa);
                } else {
                  ConeCaseh(Coneh);
                }
              }
            }
          }
        }
      }
    }
  }
} else {
  if (Cones > 0) {
    if (Coned > 0) {
      ConeCasesd(Cones, Coned);
    } else {
      if (Conea_g > 0) {
        ConeCasesa_g(Cones, Conea_g);
      } else {
        if (Conea_m > 0) {
          ConeCasesa_m(Cones, Conea_m);
        } else {
          if (Conea_o > 0) {
            ConeCasesa_o(Cones, Conea_o);
          } else {
            if (ConeV > 0) {
              ConeCasesV(Cones, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCasesU_g(Cones, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCaseshoa(Cones, Conehoa);
                } else {
                  ConeCases(Cones);
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (Coned > 0) {
      if (Conea_g > 0) {
        ConeCaseda_g(Coned, Conea_g);
      } else {
        if (Conea_m > 0) {
          ConeCaseda_m(Coned, Conea_m);
        } else {
          if (Conea_o > 0) {
            ConeCaseda_o(Coned, Conea_o);
          } else {
            if (ConeV > 0) {
              ConeCasedV(Coned, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCasedU_g(Coned, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCasedhoa(Coned, Conehoa);
                } else {
                  ConeCased(Coned);
                }
              }
            }
          }
        }
      }
    } else {
      if (Conea_g > 0) {
        if (Conea_m > 0) {
          ConeCasea_ga_m(Conea_g, Conea_m);
        } else {
          if (Conea_o > 0) {
            ConeCasea_ga_o(Conea_g, Conea_o);
          } else {
            if (ConeV > 0) {
              ConeCasea_gV(Conea_g, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCasea_gU_g(Conea_g, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCasea_ghoa(Conea_g, Conehoa);
                } else {
                  ConeCasea_g(Conea_g);
                }
              }
            }
          }
        }
      } else {
        if (Conea_m > 0) {
          if (Conea_o > 0) {
            ConeCasea_ma_o(Conea_m, Conea_o);
          } else {
            if (ConeV > 0) {
              ConeCasea_mV(Conea_m, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCasea_mU_g(Conea_m, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCasea_mhoa(Conea_m, Conehoa);
                } else {
                  ConeCasea_m(Conea_m);
                }
              }
            }
          }
        } else {
          if (Conea_o > 0) {
            if (ConeV > 0) {
              ConeCasea_oV(Conea_o, ConeV);
            } else {
              if (ConeU_g > 0) {
                ConeCasea_oU_g(Conea_o, ConeU_g);
              } else {
                if (Conehoa > 0) {
                  ConeCasea_ohoa(Conea_o, Conehoa);
                } else {
                  ConeCasea_o(Conea_o);
                }
              }
            }
          } else {
            if (ConeV > 0) {
              if (ConeU_g > 0) {
                ConeCaseVU_g()
              } else {
                if (Cone > 0) {
                  ConeCaseVhoa(ConeV, Conehoa);
                } else {
                  ConeCaseV(ConeV);
                }
              }
            } else {
              if (ConeU_g > 0) {
                if (Conehoa > 0) {
                  ConeCaseU_ghoa(ConeU_g, Conehoa);
                } else {
                  ConeCaseU_g(ConeU_g);
                }
              } else {
                if (Conehoa > 0) {
                  ConeCasehoa(Conehoa);
                } else {
                  toast.error("That isn't possible! rtfm!");
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

//r case
function ConeCaserh(_Coner, _Coneh) {
setConeR(_Coner);
setConeH(_Coneh);
if (Cones == null || Cones == 0 || isNaN(Cones) == true) {
  var _Cones = (Math.sqrt(_Coneh*_Coneh+_Coner*_Coner));
  setConeS(_Cones);
  console.log(`_Cones = ${_Cones}`);
}
if (Coned == null || Coned == 0 || isNaN(Coned) == true) {
  var _Coned = (2*_Coner);
  setConeD(_Coned);
  console.log(`_Coned = ${_Coned}`);
}
if (Conea_g == null || Conea_g == 0 || isNaN(Conea_g) == true) {
  var _Conea_g = (_Coner*_Coner*Math.PI);
  setConeA_G(_Conea_g);
  console.log(`_Conea_g = ${_Conea_g}`);
}
if (Conea_m == null || Conea_m == 0 || isNaN(Conea_m) == true) {
  var _Conea_m = (_Coner*_Cones*Math.PI);
  setConeA_M(_Conea_m);
  console.log(`_Conea_m = ${_Conea_m}`);
}
if (Conea_o == null || Conea_o == 0 || isNaN(Conea_o) == true) {
  var _Conea_o = (_Conea_g+_Conea_m);
  setConeA_O(_Conea_o);
  console.log(`_Conea_o = ${_Conea_o}`);
}
if (ConeV == null || ConeV == 0 || isNaN(ConeV) == true) {
  var _ConeV = ((1/3)*_Conea_g*_Coneh);
  setConeV(_ConeV);
  console.log(`_ConeV = ${_ConeV}`);
}
if (ConeU_g == null || ConeU_g == 0 || isNaN(ConeU_g) == true) {
  var _ConeU_g = (2*Math.PI*_Coner);
  setConeU_G(_ConeU_g);
  console.log(`_ConeU_g = ${_ConeU_g}`);
}
if (Conehoa == null || Conehoa == 0 || isNaN(Conehoa) == true) {
  var _Conehoa = (Math.atan(_Coner/_Coneh));
  setConeHOA(_Conehoa);
  console.log(`_Conehoa = ${_Conehoa}`);
}
if (isNaN(Coner) == true || isNaN(Coneh) == true || isNaN(Cones) == true || isNaN(Coned) == true || isNaN(Conea_g) == true || isNaN(Conea_m) == true || isNaN(Conea_o) == true || isNaN(ConeV) == true || isNaN(ConeU_g) == true || isNaN(Conehoa) == true) {
  toast.error("That isn't possible! rtfm!");
  toast.error("One of the results is not a real number");
}
if (_Coner != Math.sqrt(_Cones*_Cones-_Coneh*_Coneh) || _Coneh != Math.sqrt(_Cones*_Cones-_Coner*_Coner) || _Cones != Math.sqrt(_Coneh*_Coneh+_Coner*_Coner) || _Coned != (2*_Coner) || _Conea_g != (_Coner*_Coner*Math.PI) || _Conea_m != (_Coner*_Cones*Math.PI) || _Conea_o != (_Conea_g+_Coner*_Coner) || _ConeV != ((1/3)*_Conea_g*_Coneh) || _ConeU_g != (2*Math.PI*_Coner) || _Conehoa != Math.asin(r/s)) {
  toast.error("The values don't fit to the formeln!");
}
}
function ConeCasers(_Coner, _Cones) {
if (Coneh == null || Coneh == 0 || isNaN(Coneh) == true) {
  var _Coneh = (Math.sqrt((_Cones*_Cones-_Coner*_Coner)));
  setConeH(_Coneh)
  console.log(`_Coneh = ${_Coneh}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCaserd(_Coner, _Coned) {
console.log("ConeCaser");
ConeCaser(_Coner);
}
function ConeCasera_g(_Coner, _Conea_g) {
console.log("ConeCaser");
ConeCaser(_Coner);
}
function ConeCasera_m(_Coner, _Conea_m) {
if (Cones == null || Cones == 0 || isNaN(Cones) == true) {
  var _Cones = (_Conea_m/(_Coner*Math.PI));
  setConeS(_Cones);
  console.log(`_Cones = ${_Cones}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCasera_o(_Coner, _Conea_o) {
if (Cones == null || Cones == 0 || isNaN(Cones) == true) {
  var _Cones = ((_Conea_o/Math.PI)/_Coner-_Coner);
  setConeS(_Cones);
  console.log(`_Cones = ${_Cones}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCaserV(_Coner, _ConeV) {
if (Coneh == null || Coneh == 0 || isNaN(Coneh) == true) {
  var _Coneh = (_ConeV/((1/3)*Math.PI*_Coner*_Coner));
  setConeH(_Coneh);
  console.log(`_Coneh = ${_Coneh}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCaserU_g(_Coner, _ConeU_g) {
console.log("ConeCaser");
ConeCaser(_Coner);
}
function ConeCaserhoa(_Coner, _Conehoa) {
if (Coneh == null || Coneh == 0 || isNaN(Coneh) == true) {
  var _Coneh = (Math.sin(_Coner/_Conehoa));
  setConeH(_Coneh);
  console.log(`_Coneh = ${_Coneh}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}

//h case
function ConeCasehs(_Coneh, _Cones) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Cones*_Cones-_Coneh*_Coneh));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCasehd(_Coneh, _Coned) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCaseha_g(_Coneh, _Conea_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCaseha_m(_Coneh, _Conea_m) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _p = (_Coneh*_Coneh);
  var _q = (-_Conea_m*_Conea_m)/(Math.PI*Math.PI);
  var _Coner = (Math.sqrt(pqformel(_p, _q, "+")));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCaseha_o(_Coneh, _Conea_o) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(Math.sqrt((_Conea_o*_Conea_o)/(Math.PI*Math.PI)/(_Coneh*_Coneh)/2)));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCasehV(_Coneh, _ConeV) {
if (Conea_g == null || Conea_g == 0 || isNaN(Conea_g) == true) {
  var _Conea_g = ((3*_ConeV)/_Coneh);
  setConeA_G(_Conea_g);
  console.log(`_Conea_g = ${_Conea_g}`);
}
console.log("ConeCaseha_g");
ConeCaseha_g(_Coneh, _Conea_g);
}
function ConeCasehU_g(_Coneh, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}
function ConeCasehhoa(_Coneh, _Conehoa) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.tan(_Coneh*_Conehoa));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserh");
ConeCaserh(_Coner, _Coneh);
}

//s case
function ConeCasesd(_Cones, _Coned) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCasesa_g(_Cones, _Conea_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Conea_g/Math.PI);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCasesa_m(_Cones, _Conea_m) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Conea_m/(_Cones*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCasesa_o(_Cones, _Conea_o) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt((_Conea_o/(Math.PI+Math.PI*_Cones))));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCasesV(_Cones, _ConeV) {
var p = (-(_Cones*_Cones));
console.log(`p = ${p}`);
var q = (3*V/Math.PI);
console.log(`q = ${q}`);
if (cardanischeformel(p, q , 1) > 0) {
  var _Coneh = cardanischeformel(p, q , 1);
  setConeH(_Coneh);
  console.log(`_Coneh = ${_Coneh}`);
  console.log("ConeCasehs");
  ConeCasehs(_Coneh, _Cones);
} else {
  if (cardanischeformel(p, q , 2) > 0) {
    var _Coneh = cardanischeformel(p, q , 2);
    setConeH(_Coneh);
    console.log(`_Coneh = ${_Coneh}`);
    console.log("ConeCasehs");
    ConeCasehs(_Coneh, _Cones);
  } else {
    if (cardanischeformel(p, q , 3) > 0) {
      var _Coneh = cardanischeformel(p, q , 3);
      setConeH(_Coneh);
      console.log(`_Coneh = ${_Coneh}`);
      console.log("ConeCasehs");
      ConeCasehs(_Coneh, _Cones);
    } else {
      toast.error("The values don't fit to the formeln!");
    }
  }
}
}
function ConeCasesU_g(_Cones, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}
function ConeCaseshoa(_Cones, _Conehoa) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sin(_Cones*_Conehoa));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasers");
ConeCasers(_Coner, _Cones);
}

//d case
function ConeCaseda_g(_Coned, _Conea_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_g");
ConeCasera_g(_Coner, _Conea_g);
}
function ConeCaseda_m(_Coned, _Conea_m) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_m");
ConeCasera_m(_Coner, _Conea_m);
}
function ConeCaseda_o(_Coned, _Conea_o) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_o");
ConeCasera_o(_Coner, _Conea_o);
}
function ConeCasedV(_Coned, _ConeV) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserV");
ConeCaserV(_Coner, _ConeV);
}
function ConeCasedU_g(_Coned, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserU_g");
ConeCaserU_g(_Coner, _ConeU_g);
}
function ConeCasedhoa(_Coned, _Conehoa) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserhoa");
ConeCaserhoa(_Coner, _Conehoa);
}

//A_G case
function ConeCasea_ga_m(_Conea_g, _Conea_m) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_m");
ConeCasera_m(_Coner, _Conea_m);
}
function ConeCasea_ga_o(_Conea_g, _Conea_o) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_o");
ConeCasera_o(_Coner, _Conea_o);
}
function ConeCasea_gV(_Conea_g, _ConeV) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserV");
ConeCaserV(_Coner, _ConeV);
}
function ConeCasea_gU_g(_Conea_g, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserU_g");
ConeCaserU_g(_Coner, _ConeU_g);
}
function ConeCasea_ghoa(_Conea_g, _Conehoa) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserhoa");
ConeCaserhoa(_Coner, _Conehoa);
}

//A_M case
function ConeCasea_ma_o(_Conea_m, _Conea_o) {
if (Conea_g == null || Conea_g == 0 || isNaN(Conea_g) == true) {
  var _Conea_g = (_Conea_o-_Conea_m);
  setConeA_G(_Conea_g);
  console.log(`_Conea_g = ${_Conea_g}`);
}
console.log("ConeCasea_ga_m");
ConeCasea_ga_m(_Conea_g, _Conea_m);
}
function ConeCasea_mV(_Conea_m, _ConeV) {
setImpossible(true);
toast.error("That isn't possible! rtfm!")
if (isNaN(Coner) == true || isNaN(Coneh) == true || isNaN(Cones) == true || isNaN(Coned) == true || isNaN(Conea_g) == true || isNaN(Conea_m) == true || isNaN(Conea_o) == true || isNaN(ConeV) == true || isNaN(ConeU_g) == true || isNaN(Conehoa) == true) {
  toast.error("One of the results is not a real number")
}
}
function ConeCasea_mU_g(_Conea_m, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_m");
ConeCasera_m(_Coner, _Conea_m);
}
function ConeCasea_mhoa(_Conea_m, _Conehoa) {
setImpossible(true);
toast.error("That isn't possible! rtfm!");
}

//A_O case
function ConeCasea_oV(_Conea_o, _ConeV) {
setImpossible(true);
toast.error("That isn't possible! rtfm!")
if (isNaN(Coner) == true || isNaN(Coneh) == true || isNaN(Cones) == true || isNaN(Coned) == true || isNaN(Conea_g) == true || isNaN(Conea_m) == true || isNaN(Conea_o) == true || isNaN(ConeV) == true || isNaN(ConeU_g) == true || isNaN(Conehoa) == true) {
  toast.error("One of the results is not a real number")
}
}
function ConeCasea_oU_g(_Conea_o, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCasera_o");
ConeCasera_o(_Coner, _Conea_o);
}
function ConeCasea_ohoa(_Conea_o, _Conehoa) {
toast.error("That isn't possible! rtfm!");
}

//V case
function ConeCaseVU_g(_ConeV, _ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserV");
ConeCaserV(_Coner, _ConeV);
}
function ConeCaseVhoa(_ConeV, _Conehoa) {
toast.error("That isn't possible! rtfm!");
}

// U_g case
function ConeCaseU_ghoa(_ConeU_g, _Conehoa) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
}
console.log("ConeCaserhoa");
ConeCaserhoa(_Coner, _Conehoa);
}

//single case
function ConeCaser(_Coner) {
if (Coned == null || Coned == 0 || isNaN(Coned) == true) {
  var _Coned = (2*_Coner);
  setConeD(_Coned);
  console.log(`_Coned = ${_Coned}`);
}
if (Conea_g == null || Conea_g == 0 || isNaN(Conea_g) == true) {
  var _Conea_g = (_Coner*_Coner*Math.PI);
  setConeA_G(_Conea_g);
  console.log(`_Conea_g = ${_Conea_g}`);
}
if (ConeU_g == null || ConeU_g == 0 || isNaN(ConeU_g) == true) {
  var _ConeU_g = (2*Math.PI*_Coner);
  setConeU_G(_ConeU_g);
  console.log(`_ConeU_g = ${_ConeU_g}`);
}
toast.error("That isn't possible! rtfm!");
}
function ConeCaseh(_Coneh) {
toast.error("That isn't possible! rtfm!");
}
function ConeCases(_Cones) {
toast.error("That isn't possible! rtfm!");
}
function ConeCased(_Coned) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_Coned/2);
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
  console.log("ConeCaser");
  ConeCaser(_Coner);
}
}
function ConeCasea_g(_Conea_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (Math.sqrt(_Conea_g/Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
  console.log("ConeCaser");
  ConeCaser(_Coner);
}
}
function ConeCasea_m(_Conea_m) {
toast.error("That isn't possible! rtfm!");
}
function ConeCasea_o(_Conea_o) {
toast.error("That isn't possible! rtfm!");
}
function ConeCaseV(_ConeV) {
toast.error("That isn't possible! rtfm!");
}
function ConeCaseU_g(_ConeU_g) {
if (Coner == null || Coner == 0 || isNaN(Coner) == true) {
  var _Coner = (_ConeU_g/(2*Math.PI));
  setConeR(_Coner);
  console.log(`_Coner = ${_Coner}`);
  console.log("ConeCaser");
  ConeCaser(_Coner);
}
}
function ConeCasehoa(_Conehoa) {
toast.error("That isn't possible! rtfm!");
}



function reset() {
setConeR(0);
setConeH(0);
setConeS(0);
setConeD(0);
setConeA_G(0);
setConeA_M(0);
setConeA_O(0);
setConeV(0);
setConeU_G(0);
setConeHOA(0);
}

  return (
    <>
      <ToastContainer />
      <div>
        <hr/>
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
            <h2>Exceptions:</h2>
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
                  value={Coner}
                  onChange={e => setConeR(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`r = ${Coner}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>h = </td>
              <td>
                <input
                  value={Coneh}
                  onChange={e => setConeH(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`h = ${Coneh}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>s = </td>
              <td>
                <input
                  value={Cones}
                  onChange={e => setConeS(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`s = ${Cones}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>d = </td>
              <td>
                <input
                  value={Coned}
                  onChange={e => setConeD(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`d = ${Coned}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>a<sub>g</sub> = </td>
              <td>
                <input
                  value={Conea_g}
                  onChange={e => setConeA_G(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm²
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`a_g = ${Conea_g}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>a<sub>m</sub> = </td>
              <td>
                <input
                  value={Conea_m}
                  onChange={e => setConeA_M(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm²
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`a_m = ${Conea_m}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>a<sub>o</sub> = </td>
              <td>
                <input
                  value={Conea_o}
                  onChange={e => setConeA_O(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm²
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`a_o = ${Conea_o}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>V = </td>
              <td>
                <input
                  value={ConeV}
                  onChange={e => setConeV(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm³
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`V = ${ConeV}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>U<sub>g</sub> = </td>
              <td>
                <input
                  value={ConeU_g}
                  onChange={e => setConeU_G(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> cm
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`U_g = ${ConeU_g}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
            <tr>
              <td>φ = </td>
              <td>
                <input
                  value={Conehoa}
                  onChange={e => setConeHOA(e.target.value)}
                  type="number"
                  onCopy={e => toast.info("There is a button for that!")}
                  onCut={e => toast.info("There is a button for that!")}
                  onPaste={e => toast("Too lazy to type?")}
                /> °
              </td>
              <td>
                <button onClick={() =>  navigator.clipboard.writeText(`φ = ${Conehoa}`)}>
                  Copy solution
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <label>
          <button onClick={() => navigator.clipboard.writeText(`r = ${Coner}, h = ${Coneh}, s = ${Cones}, d = ${Coned}, a_g = ${Conea_g}, a_m = ${Conea_m}, a_o = ${Conea_o}, V = ${ConeV}, U_g = ${ConeU_g}, φ = ${Conehoa}.`)}>
            Copy all Values
          </button>
        </label>
        <br></br>
        <br></br>
        <label>
          <button onClick={() => {
            toast.info("Calculator started.")
            ConeCalculation()
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
        {Coner == 3 && Coneh == 1 && Cones == 4 && Coned == 1 && Conea_g  == 5 && Conea_o == 9 && ConeV == 2 && ConeU_g == 6 && Conehoa == 5 &&
          <label>
            <input
              value={extratext}
              onChange={e => {
                setExtratext(e.target.value)
                setK(Math.round(Conea_m))
              }}
              type="text"
              onCopy={e => toast.info("There is a button for that!")}
              onCut={e => toast.info("There is a button for that!")}
              onPaste={e => toast("Too lazy to type?")}
            />
          </label>
        }
        <br></br>
        {Coner == 3 && Coneh == 1 && Cones == 4 && Coned == 1 && Conea_g  == 5 && Conea_o == 9 && ConeV == 2 && ConeU_g == 6 && Conehoa == 5 &&
          <label>
            <br></br>
            {BytetoInteger(extratext, k)
            }
            {//AscIItoText(BytetoInteger(extratext, k))
            }
          </label>
        }
        <hr />
      </div>
    </>
  );
}