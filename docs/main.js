// Example arrays for *all* experiments:
const interpolationSteps = [0, 25, 50, 75, 100];
const regSteps = [1e-6, 0.01, 1, 10];
const timeSteps = [0, 5, 15];

/** Utility: scroll to top */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------------- EXP 1 Setup ---------------------- */

// Because we used "exp1-" in the IDs, let's define a function to load Exp1Data
function initExp1() {
  // Source / Target
  document.getElementById("exp1-source-img").src = ExpAData.sourceImage;
  document.getElementById("exp1-source-audio").src = ExpAData.sourceAudio;
  document.getElementById("exp1-target-img").src = ExpAData.targetImage;
  document.getElementById("exp1-target-audio").src = ExpAData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp1-m1-interp");
  const m1InterpVal    = document.getElementById("exp1-m1-interp-val");
  const m1Img          = document.getElementById("exp1-method1-img");
  const m1Audio        = document.getElementById("exp1-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpAData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp1-m2-interp");
  const m2InterpVal    = document.getElementById("exp1-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp1-m2-reg");
  const m2RegVal       = document.getElementById("exp1-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp1-m2-time");
  const m2TimeVal      = document.getElementById("exp1-m2-time-val");
  const m2Img          = document.getElementById("exp1-method2-img");
  const m2Audio        = document.getElementById("exp1-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpAData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

/* ---------------------- EXP 2 Setup (similarly) ---------------------- */
function initExp2() {
  // Source / Target
  document.getElementById("exp2-source-img").src = ExpBData.sourceImage;
  document.getElementById("exp2-source-audio").src = ExpBData.sourceAudio;
  document.getElementById("exp2-target-img").src = ExpBData.targetImage;
  document.getElementById("exp2-target-audio").src = ExpBData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp2-m1-interp");
  const m1InterpVal    = document.getElementById("exp2-m1-interp-val");
  const m1Img          = document.getElementById("exp2-method1-img");
  const m1Audio        = document.getElementById("exp2-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpBData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp2-m2-interp");
  const m2InterpVal    = document.getElementById("exp2-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp2-m2-reg");
  const m2RegVal       = document.getElementById("exp2-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp2-m2-time");
  const m2TimeVal      = document.getElementById("exp2-m2-time-val");
  const m2Img          = document.getElementById("exp2-method2-img");
  const m2Audio        = document.getElementById("exp2-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpBData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

function initExp3() {
  // Source / Target
  document.getElementById("exp3-source-img").src = ExpCData.sourceImage;
  document.getElementById("exp3-source-audio").src = ExpCData.sourceAudio;
  document.getElementById("exp3-target-img").src = ExpCData.targetImage;
  document.getElementById("exp3-target-audio").src = ExpCData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp3-m1-interp");
  const m1InterpVal    = document.getElementById("exp3-m1-interp-val");
  const m1Img          = document.getElementById("exp3-method1-img");
  const m1Audio        = document.getElementById("exp3-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpCData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp3-m2-interp");
  const m2InterpVal    = document.getElementById("exp3-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp3-m2-reg");
  const m2RegVal       = document.getElementById("exp3-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp3-m2-time");
  const m2TimeVal      = document.getElementById("exp3-m2-time-val");
  const m2Img          = document.getElementById("exp3-method2-img");
  const m2Audio        = document.getElementById("exp3-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpCData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

function initExp4() {
  // Source / Target
  document.getElementById("exp4-source-img").src = ExpDData.sourceImage;
  document.getElementById("exp4-source-audio").src = ExpDData.sourceAudio;
  document.getElementById("exp4-target-img").src = ExpDData.targetImage;
  document.getElementById("exp4-target-audio").src = ExpDData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp4-m1-interp");
  const m1InterpVal    = document.getElementById("exp4-m1-interp-val");
  const m1Img          = document.getElementById("exp4-method1-img");
  const m1Audio        = document.getElementById("exp4-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpDData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp4-m2-interp");
  const m2InterpVal    = document.getElementById("exp4-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp4-m2-reg");
  const m2RegVal       = document.getElementById("exp4-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp4-m2-time");
  const m2TimeVal      = document.getElementById("exp4-m2-time-val");
  const m2Img          = document.getElementById("exp4-method2-img");
  const m2Audio        = document.getElementById("exp4-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpDData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

function initExp5() {
  // Source / Target
  document.getElementById("exp5-source-img").src = ExpEData.sourceImage;
  document.getElementById("exp5-source-audio").src = ExpEData.sourceAudio;
  document.getElementById("exp5-target-img").src = ExpEData.targetImage;
  document.getElementById("exp5-target-audio").src = ExpEData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp5-m1-interp");
  const m1InterpVal    = document.getElementById("exp5-m1-interp-val");
  const m1Img          = document.getElementById("exp5-method1-img");
  const m1Audio        = document.getElementById("exp5-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpEData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp5-m2-interp");
  const m2InterpVal    = document.getElementById("exp5-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp5-m2-reg");
  const m2RegVal       = document.getElementById("exp5-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp5-m2-time");
  const m2TimeVal      = document.getElementById("exp5-m2-time-val");
  const m2Img          = document.getElementById("exp5-method2-img");
  const m2Audio        = document.getElementById("exp5-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpEData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

function initExp6() {
  // Source / Target
  document.getElementById("exp6-source-img").src = ExpFData.sourceImage;
  document.getElementById("exp6-source-audio").src = ExpFData.sourceAudio;
  document.getElementById("exp6-target-img").src = ExpFData.targetImage;
  document.getElementById("exp6-target-audio").src = ExpFData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp6-m1-interp");
  const m1InterpVal    = document.getElementById("exp6-m1-interp-val");
  const m1Img          = document.getElementById("exp6-method1-img");
  const m1Audio        = document.getElementById("exp6-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpFData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp6-m2-interp");
  const m2InterpVal    = document.getElementById("exp6-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp6-m2-reg");
  const m2RegVal       = document.getElementById("exp6-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp6-m2-time");
  const m2TimeVal      = document.getElementById("exp6-m2-time-val");
  const m2Img          = document.getElementById("exp6-method2-img");
  const m2Audio        = document.getElementById("exp6-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpFData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

function initExp7() {
  // Source / Target
  document.getElementById("exp7-source-img").src = ExpGData.sourceImage;
  document.getElementById("exp7-source-audio").src = ExpGData.sourceAudio;
  document.getElementById("exp7-target-img").src = ExpGData.targetImage;
  document.getElementById("exp7-target-audio").src = ExpGData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp7-m1-interp");
  const m1InterpVal    = document.getElementById("exp7-m1-interp-val");
  const m1Img          = document.getElementById("exp7-method1-img");
  const m1Audio        = document.getElementById("exp7-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpGData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp7-m2-interp");
  const m2InterpVal    = document.getElementById("exp7-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp7-m2-reg");
  const m2RegVal       = document.getElementById("exp7-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp7-m2-time");
  const m2TimeVal      = document.getElementById("exp7-m2-time-val");
  const m2Img          = document.getElementById("exp7-method2-img");
  const m2Audio        = document.getElementById("exp7-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpGData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

function initExp8() {
  // Source / Target
  document.getElementById("exp8-source-img").src = ExpHData.sourceImage;
  document.getElementById("exp8-source-audio").src = ExpHData.sourceAudio;
  document.getElementById("exp8-target-img").src = ExpHData.targetImage;
  document.getElementById("exp8-target-audio").src = ExpHData.targetAudio;

  // Method 1
  const m1InterpSlider = document.getElementById("exp8-m1-interp");
  const m1InterpVal    = document.getElementById("exp8-m1-interp-val");
  const m1Img          = document.getElementById("exp8-method1-img");
  const m1Audio        = document.getElementById("exp8-method1-audio");

  function updateMethod1() {
    const idx = parseInt(m1InterpSlider.value, 10);
    const interpStr = interpolationSteps[idx] + "%";
    m1InterpVal.textContent = interpStr;
    
    const entry = ExpHData.otData.find(o => o.interpolation === interpStr);
    if (entry) {
      m1Img.src   = entry.imageUrl;
      m1Audio.src = entry.audioUrl;
    } else {
      m1Img.src   = "";
      m1Audio.src = "";
    }
  }
  m1InterpSlider.addEventListener("input", updateMethod1);

  // Method 2
  const m2InterpSlider = document.getElementById("exp8-m2-interp");
  const m2InterpVal    = document.getElementById("exp8-m2-interp-val");
  const m2RegSlider    = document.getElementById("exp8-m2-reg");
  const m2RegVal       = document.getElementById("exp8-m2-reg-val");
  const m2TimeSlider   = document.getElementById("exp8-m2-time");
  const m2TimeVal      = document.getElementById("exp8-m2-time-val");
  const m2Img          = document.getElementById("exp8-method2-img");
  const m2Audio        = document.getElementById("exp8-method2-audio");

  function updateMethod2() {
    // interpolation
    const iIdx = parseInt(m2InterpSlider.value, 10);
    const iStr = interpolationSteps[iIdx] + "%";
    m2InterpVal.textContent = iStr;
    // regularization
    const rIdx = parseInt(m2RegSlider.value, 10);
    const rVal = regSteps[rIdx];
    m2RegVal.textContent = (rVal === 0.000001) ? "1e-6" : rVal;
    // time-limiting
    const tIdx = parseInt(m2TimeSlider.value, 10);
    const tVal = timeSteps[tIdx];
    m2TimeVal.textContent = tVal;

    const entry = ExpHData.uotData.find(o => 
      o.interpolation === iStr &&
      parseFloat(o.regularization) === rVal &&
      parseInt(o.timelimiting) === tVal
    );
    if (entry) {
      m2Img.src   = entry.imageUrl;
      m2Audio.src = entry.audioUrl;
    } else {
      m2Img.src   = "";
      m2Audio.src = "";
    }
  }
  m2InterpSlider.addEventListener("input", updateMethod2);
  m2RegSlider.addEventListener("input", updateMethod2);
  m2TimeSlider.addEventListener("input", updateMethod2);

  // Init once
  updateMethod1();
  updateMethod2();
}

/** Initialize everything once DOM is ready */
window.addEventListener("DOMContentLoaded", () => {
  // Call each experiment’s init
  initExp1();
  initExp2();
  initExp3();
  initExp4();
  initExp5();
  initExp6();
  initExp7();
  initExp8();
});
