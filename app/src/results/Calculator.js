import AppConstants from '../results/AppConstants.js';

// const getVal = (name) => {
//   let retrieved = localStorage.getItem(name);
//   let actualVal = JSON.parse(retrieved);
//   return actualVal;
// }
//
// let gender = getVal('sex');
// let age = getVal('age');
// let bmi = getVal('bmi');
// let smoker = getVal('smoker');
// let diabetic = getVal('diabetesMed');
// let treatingBP = getVal('bloodPressMed');
// let sbp = getVal('sbp');
// let triglycerides = getVal('triglycerides');
// let goodChol = getVal('goodChol');
// let badChol = getVal('badChol');
// let crp = getVal('cReactiveProteins');
// let famHistory = getVal('famHistory');

let bases;
let betas;
let expBase;

export const calcTotalChol = (goodChol, badChol, triglycerides) => {
  return (Number(goodChol) + Number(badChol) + (Number(triglycerides)/5));
}

export const calcBMI = (weight, weightMes,heightFst, heightFstMes, heightSnd) => {
  let fWeight = 0;
  let fHeight = 0;

  if (weightMes === "lbs") {
    fWeight = (Number(weight) * 0.45);
  } else {
    fWeight = weight;
  }

  if (heightFstMes === 'ft') {
    fHeight = Math.pow(
      ((Number(heightFst) * 12 + Number(
          heightSnd)) * 0.025), 2);
  } else {
    fHeight = Math.pow((Number(
          heightFst) + Number(
          heightSnd)/100),2);
  }

  let results = (Number(fWeight)/Number(fHeight)).toFixed(2);
  return results;
}

export const calcFraminghamBMIModel = (gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory) => {

  if (gender === 'gentleman') {
    bases = AppConstants.BASELINES.fbm.male;
    betas = AppConstants.BETAS.fbm.male;
    expBase = AppConstants.EXP_BASES.fbm.male;
  } else {
    bases = AppConstants.BASELINES.fbm.female;
    betas = AppConstants.BETAS.fbm.female;
    expBase = AppConstants.EXP_BASES.fbm.female;
  }

  // Calculate boolean log set
  const ageContribution =
  (Math.log(age) - bases.age) * betas.age;
  const bmiContribution =
  (Math.log(bmi) - bases.bmi) * betas.bmi;

  // Calculate boolean log set
  const smokerVal = (smoker === true) ? 1 : 0;
  const smokerContribution = (smokerVal - bases.smoker) * betas.smoker;
  const diabeticVal = (diabetic === true) ? 1 : 0;
  const diabeticContribution = (diabeticVal - bases.diabetic) * betas.diabetic;

  // Calculate BP set
  const treating = (treatingBP === true) ? 1 : 0;
  const sbp1 =
  ((Math.log(sbp) * (1 - treating)) - bases.sbp) * betas.sbp;
  const sbp2 =
  ((Math.log(sbp) * (treating)) - bases.treatingBP)
  * betas.treatingBP;
  const sbpContribution = sbp1 + sbp2;

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

export const calcFraminghamLipidModel = (gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory) => {

  if (gender === 'gentleman') {
    bases = AppConstants.BASELINES.flm.male;
    betas = AppConstants.BETAS.flm.male;
    expBase = AppConstants.EXP_BASES.flm.male;
  } else {
    bases = AppConstants.BASELINES.flm.female;
    betas = AppConstants.BETAS.flm.female;
    expBase = AppConstants.EXP_BASES.flm.female;
  }

  let cholTotal = calcTotalChol(goodChol, badChol, triglycerides);

  // Calculate boolean log set
  const ageContribution =
  (Math.log(age) - bases.age) * betas.age;
  const cholTotalContribution =
  (Math.log(cholTotal) - bases.cholTotal) * betas.cholTotal;
  const cholHDLContribution =
  (Math.log(goodChol) - bases.cholHDL) * betas.cholHDL;

  // Calculate boolean log set
  const smokerVal = (smoker === true) ? 1 : 0;
  const smokerContribution = (smokerVal - bases.smoker) * betas.smoker;
  const diabeticVal = (diabetic === true) ? 1 : 0;
  const diabeticContribution = (diabeticVal - bases.diabetic) * betas.diabetic;

  // Calculate BP set
  const treating = (treatingBP === true) ? 1 : 0;
  const sbp1 =
  ((Math.log(sbp) * (1 - treating)) - bases.sbp) * betas.sbp;
  const sbp2 =
  ((Math.log(sbp) * (treating)) - bases.treatingBP)
  * betas.treatingBP;
  const sbpContribution = sbp1 + sbp2;

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

export const calcReynoldsModel = (gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory) => {

  if (gender === 'gentleman') {
    bases = AppConstants.BASELINES.rm.male;
    betas = AppConstants.BETAS.rm.male;
    expBase = AppConstants.EXP_BASES.rm.male;
  } else {
    bases = AppConstants.BASELINES.rm.female;
    betas = AppConstants.BETAS.rm.female;
    expBase = AppConstants.EXP_BASES.rm.female;
  }

  let cholTotal = calcTotalChol(goodChol, badChol, triglycerides);

  // Calculate natural log set
  const ageContribution = (gender === 'gentleman')
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
  const smokerVal = (smoker === true) ? 1 : 0;
  const smokerContribution = (smokerVal - bases.smoker) * betas.smoker;
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
