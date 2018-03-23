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
    triglycerides: '',
    goodChol: '',
    badChol: '',
    totalChol: '',
    cReactiveProteins: '',
    FraminghamBMIModelRisk: '',
    FraminghamLipidModelRisk: '',
    reynoldsRisk: '',
    finalAverage: '',
  }

  load() {
    localStorage.getItem(KEY);
  }

  save() {
    localStorage.setItem(KEY, data);
  }
}
