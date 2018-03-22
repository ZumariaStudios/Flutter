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
    smoker: false,
    famHistory: false,
    diabetesMed: false,
    bloodPressMed: false,
    sbp: '',
    dbp: '',
    triglycerides: '',
    goodChol: '',
    badChol: '',
    cReactiveProteins: '',
    FraminghamBMIModelRisk: '',
    FraminghamLipidModelRisk: '',
  }

  load() {
    localStorage.getItem(KEY);
  }

  save() {
    localStorage.setItem(KEY, data);
  }
}
