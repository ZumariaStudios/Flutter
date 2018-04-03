import AppConstants from '../results/AppConstants.js';

const InteractiveFraminghamBMICalc = (props) => {
  let retrievedGender = localStorage.getItem('sex');
  let gender = JSON.parse(retrievedGender);

  let retrievedAge = localStorage.getItem('age');
  let age = JSON.parse(retrievedAge);

  let bases;
  let betas;
  let expBase;

  export const calcFraminghamBMIModel = () => {

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
  return()
}

export default InteractiveFraminghamBMICalc;
