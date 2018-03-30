var DataStore = class {
  let data = {
    userName: '',
    sex: '',
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
    diabetesMed: false,
    bloodPressMed: false,
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
    cReactiveProteins: '',
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
