export const AppConstants = {

  // Baselines for all models
  BASELINES: {
    flm: {
      male: {
        age: 3.881563798,
        cholTotal: 5.358941988,
        cholHDL: 3.804437795,
        sbp: 4.372376891,
        treatingBP: 0.4928472,
        smoker: 0.3522,
        diabetic: 0.065
      },
      female: {
        age: 3.893859035,
        cholTotal: 5.3711103036,
        cholHDL: 4.053533568,
        sbp: 4.266133407,
        treatingBP: 0.568559937,
        smoker: 0.3423,
        diabetic: 0.0376
      }
    },
    fbm: {
      male: {
        age: 3.8815638,
        bmi: 3.13549422,
        sbp: 4.37237689,
        treatingBP: 0.4928472,
        smoker: 0.3522,
        diabetic: 0.065
      },
      female: {
        age: 3.89385903,
        bmi: 3.13549422,
        sbp: 4.34493891,
        treatingBP: 0.48975444,
        smoker: 0.3423,
        diabetic: 0.0376
      }
    },
    rm: {
      male: {
        age: 4.143135,
        sbp: 4.85203,
        cholTotal: 5.313206,
        cholHDL: 3.749504,
        crp: -0.150823,
        smoker: 0.032,
        famCVD: 0.108
      },
      female: {
        age: 52,
        sbp: 4.828314,
        cholTotal: 5.337538,
        cholHDL: 3.949319,
        crp: 0.693147,
        smoker: 0.116,
        famCVD: 0.129
      }
    }
  },
  // Betas for all models
  BETAS: {
    flm: {
      male: {
        age: 3.06117,
        cholTotal: 1.1237,
        cholHDL: -0.93263,
        sbp: 1.93303,
        treatingBP: 1.99881,
        smoker: 0.65451,
        diabetic: 0.57367
      },
      female: {
        age: 2.32888,
        cholTotal: 1.10904,
        cholHDL: -0.7083,
        sbp: 2.76157,
        treatingBP: 2.82263,
        smoker: 0.52873,
        diabetic: 0.69154
      }
    },
    fbm: {
      male: {
        age: 3.11296,
        bmi: 0.79277,
        sbp: 1.85508,
        treatingBP: 1.9672,
        smoker: 0.70953,
        diabetic: 0.5316,
      },
      female: {
        age: 2.7207,
        bmi: 0.51125,
        sbp: 2.81291,
        treatingBP: 2.88267,
        smoker: 0.61868,
        diabetic: 0.77763
      }
    },
    rm: {
      male: {
        age: 4.385,
        sbp: 2.607,
        cholTotal: 0.963,
        cholHDL: -0.772,
        crp: 0.102,
        smoker: 0.405,
        famCVD: 0.541
      },
      female: {
        age: 0.0799,
        sbp: 3.137,
        cholTotal: 1.382,
        cholHDL: -1.172,
        crp: 0.18,
        smoker: 0.818,
        famCVD: 0.438
      }
    }
  },

  // Exponent bases for all models
  EXP_BASES: {
    flm: {
      male: 0.88936,
      female: 0.95012
    },
    fbm: {
      male: 0.88431,
      female: 0.94833
    },
    rm: {
      male: 0.899,
      female: 0.98634
    }
  },

  //Cardiovascular Health Assestment
  REST_HEART: {
    male: {
      age18to25: {
        bpm49to55 : 'Athlete',
        bpm56to61 : 'Excellent',
        bpm62to65 : 'Good',
        bpm66to69 : 'Above average',
        bpm70to73 : 'Average',
        bpm74to81 : 'Below average',
        bpm82plus : 'Poor',
      },
      age26to35: {
        bpm49to54 : 'Athlete',
        bpm55to61 : 'Excellent',
        bpm62to65 : 'Good',
        bpm66to70 : 'Above average',
        bpm71to74 : 'Average',
        bpm75to81 : 'Below average',
        bpm82plus : 'Poor',
      },
      age36to45: {
        bpm50to56 : 'Athlete',
        bpm57to62 : 'Excellent',
        bpm63to66 : 'Good',
        bpm67to70 : 'Above average',
        bpm71to75 : 'Average',
        bpm76to82 : 'Below average',
        bpm83plus : 'Poor',
      },
      age46to55: {
        bpm50to57 : 'Athlete',
        bpm58to63 : 'Excellent',
        bpm64to67 : 'Good',
        bpm68to71 : 'Above average',
        bpm72to76 : 'Average',
        bpm77to83 : 'Below average',
        bpm84plus : 'Poor',
      },
      age56to65: {
        bpm51to56 : 'Athlete',
        bpm57to61 : 'Excellent',
        bpm62to67 : 'Good',
        bpm68to71 : 'Above average',
        bpm72to75 : 'Average',
        bpm76to81 : 'Below average',
        bpm82plus : 'Poor',
      },
      age65plus: {
        bpm50to55 : 'Athlete',
        bpm56to61 : 'Excellent',
        bpm62to65 : 'Good',
        bpm66to69 : 'Above average',
        bpm70to73 : 'Average',
        bpm74to79 : 'Below average',
        bpm80plus : 'Poor',
      }
    },
    female: {
      age18to25: {
        bpm54to60 : 'Athlete',
        bpm61to65 : 'Excellent',
        bpm66to69 : 'Good',
        bpm70to73 : 'Above average',
        bpm74to78 : 'Average',
        bpm79to84 : 'Below average',
        bpm85plus : 'Poor',
      },
      age26to35: {
        bpm54to59 : 'Athlete',
        bpm60to64 : 'Excellent',
        bpm65to68 : 'Good',
        bpm69to72 : 'Above average',
        bpm73to76 : 'Average',
        bpm77to82 : 'Below average',
        bpm83plus : 'Poor',
      },
      age36to45: {
        bpm54to59 : 'Athlete',
        bpm60to64 : 'Excellent',
        bpm65to69 : 'Good',
        bpm70to73 : 'Above average',
        bpm74to78 : 'Average',
        bpm79to84 : 'Below average',
        bpm85plus : 'Poor',
      },
      age46to55: {
        bpm54to60 : 'Athlete',
        bpm61to65 : 'Excellent',
        bpm66to69 : 'Good',
        bpm70to73 : 'Above average',
        bpm74to77 : 'Average',
        bpm78to83 : 'Below average',
        bpm84plus : 'Poor',
      },
      age56to65: {
        bpm54to59 : 'Athlete',
        bpm60to64 : 'Excellent',
        bpm65to68 : 'Good',
        bpm69to73 : 'Above average',
        bpm74to77 : 'Average',
        bpm78to83 : 'Below average',
        bpm84plus : 'Poor',
      },
      age65plus: {
        bpm54to59 : 'Athlete',
        bpm60to64 : 'Excellent',
        bpm65to68 : 'Good',
        bpm69to72 : 'Above average',
        bpm73to76 : 'Average',
        bpm77to84 : 'Below average',
        bpm85plus : 'Poor',
      }
    }
  }
}

export default AppConstants;
