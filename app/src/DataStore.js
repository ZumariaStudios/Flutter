var DataStore = class {
  let data = {
    userName: '',
    sex: '',
    age: '',
    weight: '',
    weightMes: '',
    height: '',
    heightMes: '',
    smoker: '',
    famHistory: '',
    diabetesMed: '',
    bloodPressMed: ''
  }

  load() {
    localStorage.getItem(KEY);
  }

  save() {
    localStorage.setItem(KEY, data);
  }
}
