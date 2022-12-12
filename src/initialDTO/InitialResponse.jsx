const initialResponse = {
  base: {
    log: [],
    userdataAsString: "",
    ok: true,
    error: "",
  },
  publicPension: {
    customer: {
      publicPensionBase: 0,
      publicPensionSupplement: 0,
      publicPensionExtraSupplement: 0,
      averageTax: 0,
    },
    spouse: {
      publicPensionBase: 0,
      publicPensionSupplement: 0,
      publicPensionExtraSupplement: 0,
      averageTax: 0,
    },
  },
};

export { initialResponse };
