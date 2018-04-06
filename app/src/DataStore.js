var DataStore = class {
  let data = {
    userName: '',
    gender: '',
    age: '',
    weight: '',
    weightMes: '',
    heightFst: '',
    heightFstMes: '',
    heightSnd: '',
    heightSndMes: '',
    bmi:'',
    bmiResults: '',
    smoker: false,
    famHistory: false,
    diabetic: false,
    treatingBP: false,
    bpm: '',
    bpmResults: '',
    sbp: '',
    dbp: '',
    bloodPressResults: '',
    triglycerides: '',
    goodChol: '',
    badChol: '',
    totalChol: '',
    cholResults: '',
    crp: '',
    FraminghamBMIModelRisk: '',
    FraminghamLipidModelRisk: '',
    reynoldsRisk: '',
    finalAverage: '',
    visited: false,
  }

  load() {
    localStorage.getItem(KEY);
  }

  save() {
    localStorage.setItem(KEY, data);
  }
}
