import AppConstants from '../results/AppConstants.js';

let retrievedGender = localStorage.getItem('sex');
let gender = JSON.parse(retrievedGender);

let retrievedAge = localStorage.getItem('age');
let age = JSON.parse(retrievedAge);

let retrievedBmi = localStorage.getItem('bmi');
let bmi = JSON.parse(retrievedBmi);

let retrievedSmoker = localStorage.getItem('smoker');
let smoker = JSON.parse(retrievedSmoker);

let retrievedDiabetic = localStorage.getItem('diabetesMed');
let diabetic = JSON.parse(retrievedDiabetic);

let retrievedTreatingBP = localStorage.getItem('bloodPressMed');
let treatingBP = JSON.parse(retrievedTreatingBP);

let retrievedSbp = localStorage.getItem('sbp');
let sbp = JSON.parse(retrievedSbp);

// let retrievedDbp = localStorage.getItem('dbp');
// let dbp = JSON.parse(retrievedDbp);

let retrievedTrig = localStorage.getItem('triglycerides');
let triglycerides = JSON.parse(retrievedTrig);

let retrievedGoodChol = localStorage.getItem('goodChol');
let goodChol = JSON.parse(retrievedGoodChol);

let retrievedBadChol = localStorage.getItem('badChol');
let badChol = JSON.parse(retrievedBadChol);

let retrievedCReact = localStorage.getItem('cReactiveProteins');
let crp = JSON.parse(retrievedCReact);

let retrievedFamHistory = localStorage.getItem('famHistory');
let famHistory = JSON.parse(retrievedFamHistory);

let bases;
let betas;
let expBase;

if (gender === 'male') {
  bases = AppConstants.BASELINES.fbm.male;
  betas = AppConstants.BETAS.fbm.male;
  expBase = AppConstants.EXP_BASES.fbm.male;
} else {
  bases = AppConstants.BASELINES.fbm.female;
  betas = AppConstants.BETAS.fbm.female;
  expBase = AppConstants.EXP_BASES.fbm.female;
}

// Calculate boolean log set
const smokerVal = (smoker === true) ? 1 : 0;
const smokerContribution = (smokerVal - bases.smoker) * betas.smoker;
const diabeticVal = (diabetic === true) ? 1 : 0;
const diabeticContribution = (diabeticVal - bases.diabetic) * betas.diabetic;

// Calculate boolean log set
const ageContribution =
(Math.log(age) - bases.age) * betas.age;

// Calculate BP set
const treating = (treatingBP === true) ? 1 : 0;
const sbp1 =
((Math.log(sbp) * (1 - treating)) - bases.sbp) * betas.sbp;
const sbp2 =
((Math.log(sbp) * (treating)) - bases.treatingBP)
* betas.treatingBP;
const sbpContribution = sbp1 + sbp2;

export const calcTotalChol = () => {
  return (goodChol + badChol + (triglycerides/5));
}

export const calcFraminghamBMIModel = () => {
  // Calculate boolean log set
  const bmiContribution =
  (Math.log(bmi) - bases.bmi) * betas.bmi;

  // Combine contributions
  const totalContributions =
      ageContribution
      + bmiContribution
      + smokerContribution
      + diabeticContribution
      + sbpContribution;

  // Determine risk
  let riskStatus = Math.round(100 * (1 - Math.pow(expBase, Math.exp(totalContributions))));
  return riskStatus;
}

export const calcFraminghamLipidModel = () => {

  let cholTotal = calcTotalChol();

  // Calculate boolean log set
  const cholTotalContribution =
  (Math.log(cholTotal) - bases.cholTotal) * betas.cholTotal;
  const cholHDLContribution =
  (Math.log(goodChol) - bases.cholHDL) * betas.cholHDL;

  // Combine contributions
  const totalContributions = ageContribution
  + cholTotalContribution
  + cholHDLContribution
  + smokerContribution
  + diabeticContribution
  + sbpContribution;

  // Determine risk
  let riskStatus = Math.round(100 * (1 - Math.pow(expBase, Math.exp(totalContributions))));
  return riskStatus;
}

export const calcReynoldsModel = () => {

  let cholTotal = calcTotalChol();
  // Calculate natural log set
  const ageContribution = (gender === 'male')
  ? (Math.log(age) - bases.age) * betas.age
  : (age - bases.age) * betas.age;
  const sbpContribution =
  (Math.log(sbp) - bases.sbp) * betas.sbp;
  const cholTotalContribution =
  (Math.log(cholTotal) - bases.cholTotal) * betas.cholTotal;
  const cholHDLContribution =
  (Math.log(goodChol) - bases.cholHDL) * betas.cholHDL;
  const crpContribution =
  (Math.log(crp) - bases.crp) * betas.crp;

  // Calculate boolean log set
  const famCVDVal = (famHistory === true) ? 1 : 0;
  const famCVDContribution = (famCVDVal - bases.famCVD) * betas.famCVD;

  // Combine contributions
  const totalContributions = ageContribution
  + famCVDContribution
  + smokerContribution
  + cholHDLContribution
  + cholTotalContribution
  + sbpContribution
  + crpContribution;

  // Determine risk
  let riskStatus = Math.round(100 * (1 - Math.pow(expBase, Math.exp(totalContributions))));
  return riskStatus;
}
