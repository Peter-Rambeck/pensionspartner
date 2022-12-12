const initialValues = {
  licenseKey: "3QXT-W5B3-GYAE-ABJ2-X5S6-FQ27-DQ",
  data: {
    person: {
      customer: true,
      spouse: true,
    },
    customer: {
      danishSSN: "",
      pensionDate: "string",
      salary: 0,
      coronaSalary: 0,
      activeVSOIncome: 0,
      inactiveVSOIncome: 0,
      pensionIncome: " ",
      pensionSaving: 0,
      capitalIncome: 0,
      liquidity: 0,
      nationalChurchMember: true,
      yearsAbroad: 0,
    },
    spouse: {
      danishSSN: " ",
      pensionDate: " ",
      coronaSalary: 0,
      activeVSOIncome: 0,
      inactiveVSOIncome: 0,
      pensionIncome: 0,
      pensionSaving: 0,
      capitalIncome: 0,
      liquidity: 0,
      nationalChurchMember: true,
      yearsAbroad: 0,
    },
    maritalStatus: "Unknown",
    spouseIsSeniorCitizen: true,
    calculationDate: "string",
    includePublicPensionExtraSupplement: true,
  },
};

export { initialValues };
