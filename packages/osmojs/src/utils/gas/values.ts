import { coins } from "@cosmjs-rn/amino";

export const GAS_VALUES = {
  osmosis: {
    createPool: "250000",
    joinPool: "140000",
    joinSwapExternAmountIn: "140000",
    exitPool: "140000",
    swapExactAmountIn: "250000",
    swapExactAmountOut: "250000",
    lockTokens: "250000",
    beginUnlocking: "140000",
    unlockPeriodLock: "140000",
  },
};

export const FEE_VALUES = {
  osmosis: {
    low: "0",
    medium: "6250",
    high: "10000",
  },
};

export const FEES = Object.keys(GAS_VALUES).reduce((m, chain) => {
  m[chain] = Object.keys(GAS_VALUES[chain]).reduce((m2, method) => {
    m2[method] = (fee = "low") => ({
      amount: coins(FEE_VALUES[chain][fee], "uosmo"),
      gas: GAS_VALUES[chain][method],
    });
    return m2;
  }, {});
  return m;
}, {});
